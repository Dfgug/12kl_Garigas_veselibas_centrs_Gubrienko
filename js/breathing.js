(function(){
  const circle = document.querySelector("[data-breath-circle]");
  const startBtn = document.querySelector("[data-breath-start]");
  const stopBtn = document.querySelector("[data-breath-stop]");
  const modeSelect = document.querySelector("#mode");
  const meta = document.querySelector("[data-breath-meta]");
  if (!circle || !startBtn || !modeSelect) return;

  const MODES = {
    "478": { name: "4-7-8 tehnika", steps: [
      { label:"Ieelpo", secs:4, cls:"inhale" },
      { label:"Aizture", secs:7, cls:"hold" },
      { label:"Izelpo", secs:8, cls:"exhale" }
    ]},
    "box": { name: "Kvadrāta elpošana", steps: [
      { label:"Ieelpo", secs:4, cls:"inhale" },
      { label:"Aizture", secs:4, cls:"hold" },
      { label:"Izelpo", secs:4, cls:"exhale" },
      { label:"Aizture", secs:4, cls:"hold" }
    ]},
    "belly": { name: "Dziļā vēdera elpošana", steps: [
      { label:"Ieelpo", secs:5, cls:"inhale" },
      { label:"Izelpo", secs:6, cls:"exhale" }
    ]}
  };

  let timer = null;
  let running = false;
  let idx = 0;
  let remaining = 0;

  function setState(step){
    circle.classList.remove("inhale","exhale");
    if (step.cls === "inhale") circle.classList.add("inhale");
    if (step.cls === "exhale") circle.classList.add("exhale");
    circle.textContent = step.label;
    meta.textContent = `${step.label} — ${remaining}s`;
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
    circle.textContent = "Sākam";
    window.showToast?.("Elpošanas vingrinājums sākts");
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
    circle.textContent = "Ieelpo";
    meta.textContent = "Izvēlies tehniku un nospied “Sākt”.";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    window.showToast?.("Apturēts");
  }

  startBtn.addEventListener("click", start);
  stopBtn.addEventListener("click", stop);
  modeSelect.addEventListener("change", () => {
    if (running) stop();
  });

  stopBtn.disabled = true;
})();