(function(){
  const root = document.querySelector("[data-reminders]");
  if (!root) return;
  const key = "gv-reminders-v1";
  const inputs = Array.from(root.querySelectorAll("input[type=checkbox]"));

  function load(){
    try { return JSON.parse(localStorage.getItem(key) || "{}"); }
    catch { return {}; }
  }
  function save(data){
    localStorage.setItem(key, JSON.stringify(data));
  }

  const state = load();
  inputs.forEach(input => {
    const id = input.id;
    if (Object.prototype.hasOwnProperty.call(state, id)) input.checked = !!state[id];

    input.addEventListener("change", () => {
      state[id] = input.checked;
      save(state);
      window.showToast?.(input.checked ? "Atgādinājums ieslēgts" : "Atgādinājums izslēgts");
    });
  });
})();