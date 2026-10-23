(function () {
  var s = document.createElement('script');
  s.src = 'https://unpkg.com/kotlin-playground@1';
  s.onload = function () {
    document.querySelectorAll('code.language-kotlin').forEach(function (el) {
      el.setAttribute('theme', 'darcula');
    });

    KotlinPlayground('code.language-kotlin', {
      callback: function (targetNode, mountNode) {
        var pre = mountNode.closest('pre');
        if (pre) pre.classList.add('kotlin-pg');
      }
    });
  };
  document.head.appendChild(s);
})();
