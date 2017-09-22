import fs from 'fs';
import p from 'path';

function endsWith(str, search) {
    return str.indexOf(search, str.length - search.length) !== -1;
}

export default function ({ types: t }) {
    return {
        visitor: {
            ImportDeclaration: {
                exit: function(path, state) {
                    const node = path.node;
                    if (endsWith(node.source.value, '.html') || endsWith(node.source.value, '.scss') || endsWith(node.source.value, '.css') ) {
                        path.remove()
                    }
                }
            }
        }
    };
}