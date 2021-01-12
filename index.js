const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant, e }) {
  addVariant("empty", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`empty${separator}${className}`)}:empty`;
    });
  });
});
