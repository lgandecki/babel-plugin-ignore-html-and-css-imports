# Ignore html and css imports in your code. Useful for testing meteor without it's context
Turn HTML imports into strings.

## Example

```js
import html from './example.html';
```

#### out
```js
```

## Installation

```sh
$ npm install --save-dev babel-plugin-ignore-html-and-css-imports
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-ignore-html-and-css-imports"]
}
```

### Via CLI

```sh
$ babel --plugins transform-ignore-html-and-css-imports script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-ignore-html-and-css-imports"]
});
```


Initially based on yeiniel/babel-plugin-transform-html-import-to-string which turned out still not to work properly in Meteor - and since we didn't need the string at all, we've decided to change it a bit.
