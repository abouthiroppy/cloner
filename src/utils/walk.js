'use strict';

const archy   = require('archy');
const dirTree = require('directory-tree');

module.exports = (dir) => {
  return new Promise((resolve) => {
    const tree = createTree(dirTree.directoryTree(dir));
    resolve(tree);
  });
};

function createTree(items) {
  const parents = {
    label: './cloner',
    nodes: []
  };

  items.children.map((e) => {
    const obj = {
      label: e.path,
      nodes: []
    };

    e.children.map((e) => {
      obj.nodes.push(e.name);
    });

    parents.nodes.push(obj);
  });

  return archy(parents);
}
