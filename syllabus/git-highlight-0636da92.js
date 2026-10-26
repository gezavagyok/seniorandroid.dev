hljs.registerLanguage("git", function (hljs) {
  return {
    name: "Git",
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      { className: "built_in", begin: /\bgit\b/ },
      { className: "keyword", begin: /(?<=\bgit\s)[a-z][a-z-]*/ },
      { className: "attr", begin: /(?<=\s)--?[a-zA-Z][\w-]*/ },
      { className: "number", begin: /\b[0-9a-f]{7,40}\b/ },
    ],
  };
});

// mdBook already ran highlighting before this script loaded,
// so redo it for blocks tagged `git`.
document.querySelectorAll("code.language-git").forEach((el) => {
  el.removeAttribute("data-highlighted");
  hljs.highlightElement(el);
});
