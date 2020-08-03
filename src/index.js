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
                    const fileTypes = ['.html', '.scss', '.css', '.png', '.jpg', '.gif', '.tif']
                    if (fileTypes.some(_ => endsWith(node.source.value, _))) {
                        path.remove()
                    }
                }
            }
        }
    };
}