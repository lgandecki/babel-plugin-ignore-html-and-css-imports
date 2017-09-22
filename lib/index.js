'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: {
            ImportDeclaration: {
                exit: function exit(path, state) {
                    var node = path.node;
                    if (endsWith(node.source.value, '.html') || endsWith(node.source.value, '.scss') || endsWith(node.source.value, '.css')) {
                        path.remove();
                    }
                }
            }
        }
    };
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function endsWith(str, search) {
    return str.indexOf(search, str.length - search.length) !== -1;
}