function endsWith(str, search) {
  return str.indexOf(search, str.length - search.length) !== -1;
}

module.exports = function () {
  return {
    name: "Ignore html and css imports",
    visitor: {
      ImportDeclaration: {
        exit: function (path, state) {
          const node = path.node;
          const fileTypes = state.opts.removeExtensions || [
            ".html",
            ".scss",
            ".css",
          ];
          if (fileTypes.some((_) => endsWith(node.source.value, _))) {
            path.remove();
          }
        },
      },
    },
  };
};
