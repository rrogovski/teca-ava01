const KonamiCodeDirective = {
  mounted(el, binding) {
    const kode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    const length = kode.length;
    var pos = 0;
    var result = false;
    el.__KonamiCode__ = (event) => {
      if (event.keyCode === kode[pos++]) {
        if (length === pos) {
          pos = 0; // ability to start over
          result = true;
        }
      } else {
        pos = 0;
        result;
      }

      binding.value(result);
      return result;
    };
    document.addEventListener("keydown", el.__KonamiCode__);
  },

  unmounted(el) {
    document.removeEventListener("keydown", el.__KonamiCode__);
  },
};

export default (app) => {
  app.directive("konami-code", KonamiCodeDirective);
};
