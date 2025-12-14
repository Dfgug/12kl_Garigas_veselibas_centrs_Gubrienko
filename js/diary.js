(function(){
  const calRoot = document.querySelector("[data-calendar]");
  const monthLabel = document.querySelector("[data-month-label]");
  const prevBtn = document.querySelector("[data-prev-month]");
  const nextBtn = document.querySelector("[data-next-month]");
  const noteEl = document.querySelector("#notes");
  const saveBtn = document.querySelector("[data-save]");
  const emojiBtns = Array.from(document.querySelectorAll("[data-emoji]"));

  if (!calRoot) return;

  const DOW = ["P","O","T","C","Pk","S","Sv"];
  const storageKey = "gv-diaries-v1";

  function loadAll(){
    try { return JSON.parse(localStorage.getItem(storageKey) || "{}"); }
    catch { return {}; }
  }
  function saveAll(data){
    localStorage.setItem(storageKey, JSON.stringify(data));
  }
  function pad2(n){ return String(n).padStart(2,"0"); }
  function dateKey(d){
    return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
  }

  let view = new Date();
  view.setDate(1);
  let selected = new Date();

  function setEmoji(value){
    emojiBtns.forEach(btn => btn.setAttribute("aria-pressed", String(btn.dataset.emoji === value)));
  }

  function render(){
    const year = view.getFullYear();
    const month = view.getMonth();
    const title = new Intl.DateTimeFormat("lv-LV", { month:"long", year:"numeric"}).format(view);
    monthLabel.textContent = title.charAt(0).toUpperCase() + title.slice(1);

    calRoot.innerHTML = "";
    for (const d of DOW){
      const div = document.createElement("div");
      div.className = "dow";
      div.textContent = d;
      calRoot.appendChild(div);
    }

    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month+1, 0).getDate();

    for (let i=0;i<firstDay;i++){
      const blank = document.createElement("div");
      blank.className = "dow";
      blank.style.borderBottom = "none";
      blank.textContent = "";
      calRoot.appendChild(blank);
    }

    const all = loadAll();
    for (let day=1; day<=daysInMonth; day++){
      const btn = document.createElement("button");
      const d = new Date(year, month, day);
      const key = dateKey(d);
      btn.type = "button";
      btn.textContent = String(day);
      btn.setAttribute("aria-label", key);
      btn.setAttribute("aria-selected", String(dateKey(selected) === key));
      if (all[key]) btn.classList.add("has-entry");

      btn.addEventListener("click", () => {
        selected = d;
        openEntry();
        render();
      });
      calRoot.appendChild(btn);
    }
  }

  function openEntry(){
    const key = dateKey(selected);
    const all = loadAll();
    const entry = all[key] || { mood:"", notes:"" };
    noteEl.value = entry.notes || "";
    setEmoji(entry.mood || "");
  }

  function currentMood(){
    const active = emojiBtns.find(b => b.getAttribute("aria-pressed") === "true");
    return active ? active.dataset.emoji : "";
  }

  emojiBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const isOn = btn.getAttribute("aria-pressed") === "true";
      const next = isOn ? "" : btn.dataset.emoji;
      setEmoji(next);
    });
  });

  saveBtn?.addEventListener("click", () => {
    const key = dateKey(selected);
    const all = loadAll();
    const mood = currentMood();
    const notes = noteEl.value.trim();

    if (!mood && !notes){
      if (all[key]) { delete all[key]; saveAll(all); render(); }
      window.showToast?.("Ieraksts dzēsts (tukšs).");
      return;
    }

    all[key] = { mood, notes, updatedAt: Date.now() };
    saveAll(all);
    render();
    window.showToast?.("Saglabāts!");
  });

  prevBtn?.addEventListener("click", () => { view.setMonth(view.getMonth()-1); render(); });
  nextBtn?.addEventListener("click", () => { view.setMonth(view.getMonth()+1); render(); });

  selected = new Date();
  view = new Date(selected.getFullYear(), selected.getMonth(), 1);
  openEntry();
  render();
})();