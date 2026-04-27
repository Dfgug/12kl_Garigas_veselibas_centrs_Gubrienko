(function () {
  const calRoot = document.querySelector("[data-calendar]");
  const monthLabel = document.querySelector("[data-month-label]");
  const prevBtn = document.querySelector("[data-prev-month]");
  const nextBtn = document.querySelector("[data-next-month]");
  const noteEl = document.querySelector("#notes");
  const emojiBtns = Array.from(document.querySelectorAll("[data-emoji]"));

  if (!calRoot || !monthLabel || !noteEl) return;

  const storageKey = "gv-diaries-v1";

  function lang() {
    return window.getCurrentLang ? window.getCurrentLang() : (localStorage.getItem("lang") || "lv");
  }

  function locale() {
    return { lv: "lv-LV", ru: "ru-RU", en: "en-US" }[lang()] || "lv-LV";
  }

  function dows() {
    return {
      lv: ["P", "O", "T", "C", "Pk", "S", "Sv"],
      ru: ["П", "В", "С", "Ч", "Пт", "С", "Вс"],
      en: ["M", "T", "W", "T", "F", "S", "S"]
    }[lang()] || ["P", "O", "T", "C", "Pk", "S", "Sv"];
  }

  function loadAll() {
    try { return JSON.parse(localStorage.getItem(storageKey) || "{}"); }
    catch { return {}; }
  }

  function saveAll(data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function dateKey(d) {
    return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
  }

  let view = new Date();
  view.setDate(1);
  let selected = new Date();

  function setEmoji(value) {
    emojiBtns.forEach(btn => {
      btn.setAttribute("aria-pressed", String(btn.dataset.emoji === value));
    });
  }

  function currentMood() {
    const active = emojiBtns.find(b => b.getAttribute("aria-pressed") === "true");
    return active ? active.dataset.emoji : "";
  }

  function openEntry() {
    const key = dateKey(selected);
    const all = loadAll();
    const entry = all[key] || { mood: "", notes: "" };
    noteEl.value = entry.notes || "";
    setEmoji(entry.mood || "");
  }

  function saveEntry() {
    const key = dateKey(selected);
    const all = loadAll();
    const mood = currentMood();
    const notes = noteEl.value.trim();

    if (!mood && !notes) {
      if (all[key]) {
        delete all[key];
        saveAll(all);
        render();
      }
      return;
    }

    all[key] = { mood, notes, updatedAt: Date.now() };
    saveAll(all);
    render();
  }

  function syncTexts() {
    const helper = document.querySelector(".helper");
    const label = document.querySelector("label[for='notes']");
    const emotionLabel = document.querySelector(".field label:not([for])");
    const exportBtn = document.querySelector(".data-actions .btn.secondary");
    const importBtn = document.querySelector(".data-actions button:not(.btn.secondary)");
    const importInput = document.querySelector("#importDiaryFile");
    if (helper) helper.textContent = window.t ? window.t("diary.helper", lang()) : helper.textContent;
    if (label) label.textContent = window.t ? window.t("diary.notes.label", lang()) : label.textContent;
    if (emotionLabel) emotionLabel.textContent = window.t ? window.t("diary.emotion.label", lang()) : emotionLabel.textContent;
    if (exportBtn) exportBtn.textContent = window.t ? window.t("diary.export", lang()) : exportBtn.textContent;
    if (importBtn) importBtn.textContent = window.t ? window.t("diary.import", lang()) : importBtn.textContent;
    if (importInput) importInput.setAttribute("aria-label", window.t ? window.t("diary.import", lang()) : "Import");
    if (noteEl && window.t) noteEl.setAttribute("placeholder", window.t("diary.notes.placeholder", lang()));
    const prev = document.querySelector("[data-prev-month]");
    const next = document.querySelector("[data-next-month]");
    if (prev) prev.setAttribute("aria-label", window.t ? window.t("diary.month.prev", lang()) : "Previous month");
    if (next) next.setAttribute("aria-label", window.t ? window.t("diary.month.next", lang()) : "Next month");
  }

  function render() {
    const year = view.getFullYear();
    const month = view.getMonth();
    const title = new Intl.DateTimeFormat(locale(), { month: "long", year: "numeric" }).format(view);
    monthLabel.textContent = title.charAt(0).toUpperCase() + title.slice(1);

    calRoot.innerHTML = "";
    for (const d of dows()) {
      const div = document.createElement("div");
      div.className = "dow";
      div.textContent = d;
      calRoot.appendChild(div);
    }

    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < firstDay; i++) {
      const blank = document.createElement("div");
      blank.className = "dow";
      blank.style.borderBottom = "none";
      calRoot.appendChild(blank);
    }

    const all = loadAll();
    for (let day = 1; day <= daysInMonth; day++) {
      const btn = document.createElement("button");
      const d = new Date(year, month, day);
      const key = dateKey(d);
      btn.type = "button";
      btn.textContent = day;
      btn.setAttribute("data-date", key);
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

  emojiBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const isOn = btn.getAttribute("aria-pressed") === "true";
      const next = isOn ? "" : btn.dataset.emoji;
      setEmoji(next);
      saveEntry();
    });
  });

  noteEl.addEventListener("input", saveEntry);
  prevBtn?.addEventListener("click", () => { view.setMonth(view.getMonth() - 1); render(); });
  nextBtn?.addEventListener("click", () => { view.setMonth(view.getMonth() + 1); render(); });

  selected = new Date();
  view = new Date(selected.getFullYear(), selected.getMonth(), 1);
  openEntry();
  syncTexts();
  render();
  window.addEventListener("languagechange", () => { syncTexts(); render(); });
})();