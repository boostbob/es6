const _ = require('lodash');

function genTreeBySorted(nodes, sortField = 'id', pickFirst = true) {
  let map = {}, roots = [];
  let sortedNodes = _.orderBy(nodes, sortField);
  
  // 该算法基于已经排好序的节点，子节点不能排在父节点前面
  _.each(sortedNodes, (node) => {
    let hasChildren = _.some(nodes, (item) => item.parentId === node.id);
    if (hasChildren) node.children = [];
    map[node.id] = node;
    node.parentId ? map[node.parentId].children.push(node) : roots.push(node);
  });
  
  return pickFirst ? roots[0] : roots;
}

let nodes = [
  {
    id: "44",
    parentId: "22",
    text: "Other"
  },
  {
    id: "55",
    parentId: "33",
    text: "Other"
  },
  {
    id: "11",
    parentId: null,
    text: "Man"
  },
  {
    id: "22",
    parentId: "11",
    text: "Boy"
  },
  {
    id: "33",
    parentId: "11",
    text: "Other"
  }
];

let tree = genTreeBySorted(nodes);
console.log(JSON.stringify(tree));