const pluginTester = require('babel-plugin-tester').default

const plugin = require("./index")

pluginTester({
  plugin,
  filename: __filename,
  tests: {
    'remove html, css and scss imports by default': {
      fixture: '__fixtures__/default.js',
      outputFixture: '__fixtures__/default-output.js'
    },
    'remove imports for configured extensions': {
      pluginOptions: {
        removeExtensions: ['.png']
      },
      fixture: '__fixtures__/configured.js',
      outputFixture: '__fixtures__/configured-output.js'
    }
  }
})
