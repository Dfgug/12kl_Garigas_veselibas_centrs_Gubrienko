(function(){
  const circle = document.querySelector("[data-breath-circle]");
  const startBtn = document.querySelector("[data-breath-start]");
  const stopBtn = document.querySelector("[data-breath-stop]");
  const modeSelect = document.querySelector("#mode");
  const meta = document.querySelector("[data-breath-meta]");
  if (!circle || !startBtn || !modeSelect || !meta) return;

  function lang() {
    return window.getCurrentLang ? window.getCurrentLang() : (localStorage.getItem("lang") || "lv");
  }

  function modeName(value) {
    return window.t ? window.t(`breathing.mode.${value}`, lang()) : value;
  }

  const MODES = {
    "478": { name: () => modeName("478"), steps: [
      { key:"inhale", secs:4, cls:"inhale" },
      { key:"hold", secs:7, cls:"hold" },
      { key:"exhale", secs:8, cls:"exhale" }
    ]},
    "box": { name: () => modeName("box"), steps: [
      { key:"inhale", secs:4, cls:"inhale" },
      { key:"hold", secs:4, cls:"hold" },
      { key:"exhale", secs:4, cls:"exhale" },
      { key:"hold", secs:4, cls:"hold" }
    ]},
    "belly": { name: () => modeName("belly"), steps: [
      { key:"inhale", secs:5, cls:"inhale" },
      { key:"exhale", secs:6, cls:"exhale" }
    ]}
  };

  let timer = null;
  let running = false;
  let idx = 0;
  let remaining = 0;

  function stepLabel(key) {
    const map = {
      lv: { inhale: "Ieelpo", exhale: "Izelpo", hold: "Aizture", ready: "Ieelpo" },
      ru: { inhale: "Вдохни", exhale: "Выдохни", hold: "Задержка", ready: "Вдохни" },
      en: { inhale: "Inhale", exhale: "Exhale", hold: "Hold", ready: "Inhale" }
    };
    const l = lang();
    return (map[l] || map.lv)[key] || key;
  }

  function setState(step){
    circle.classList.remove("inhale","exhale");
    if (step.cls === "inhale") circle.classList.add("inhale");
    if (step.cls === "exhale") circle.classList.add("exhale");
    circle.textContent = stepLabel(step.key);
    meta.textContent = `${stepLabel(step.key)} — ${remaining}s`;
  }

  function tick(){
    const mode = MODES[modeSelect.value] || MODES["478"];
    const steps = mode.steps;
    const step = steps[idx];

    setState(step);
    if (remaining <= 1){
      idx = (idx + 1) % steps.length;
      remaining = steps[idx].secs;
    } else {
      remaining -= 1;
    }
  }

  function start(){
    if (running) return;
    running = true;
    idx = 0;
    const mode = MODES[modeSelect.value] || MODES["478"];
    remaining = mode.steps[0].secs;
    circle.textContent = window.t ? window.t("breathing.circle.ready", lang()) : stepLabel("ready");
    window.showToast?.(window.t ? window.t("breathing.toast.start", lang()) : "Started");
    timer = window.setInterval(tick, 1000);
    tick();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }

  function stop(){
    running = false;
    window.clearInterval(timer);
    timer = null;
    circle.classList.remove("inhale","exhale");
    circle.textContent = window.t ? window.t("breathing.circle.ready", lang()) : stepLabel("ready");
    meta.textContent = window.t ? window.t("breathing.meta.ready", lang()) : "Choose a technique and press Start.";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    window.showToast?.(window.t ? window.t("breathing.toast.stop", lang()) : "Stopped");
  }

  function syncTexts() {
    if (!running) {
      circle.textContent = window.t ? window.t("breathing.circle.ready", lang()) : stepLabel("ready");
      meta.textContent = window.t ? window.t("breathing.meta.ready", lang()) : meta.textContent;
    }
    startBtn.textContent = window.t ? window.t("breathing.start", lang()) : startBtn.textContent;
    stopBtn.textContent = window.t ? window.t("breathing.stop", lang()) : stopBtn.textContent;
    const opts = modeSelect.querySelectorAll("option");
    opts.forEach((opt) => {
      opt.textContent = window.t ? window.t(`breathing.option.${opt.value}`, lang()) : opt.textContent;
    });
  }

  startBtn.addEventListener("click", start);
  stopBtn.addEventListener("click", stop);
  modeSelect.addEventListener("change", () => {
    if (running) stop();
  });

  stopBtn.disabled = true;
  syncTexts();
  window.addEventListener("languagechange", syncTexts);
})();