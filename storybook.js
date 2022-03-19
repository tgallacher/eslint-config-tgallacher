//
// Storybook requires default exports in the CSF format.
// https://storybook.js.org/docs/formats/component-story-format/
//
module.exports = {
  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
