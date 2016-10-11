/* global exports */
"use strict"


exports.d3HierarchyFn = function() { return d3.hierarchy(); }
exports.d3TreeFn      = function() { return d3.tree(); }
exports.hierarchizeFn = function(data, hierarchy) { return hierarchy(data); }
exports.treeFn        = function(data, tree) { return tree(data); }
exports.sizeFn        = function(treedata)   { return treedata.size(); }
exports.nodeSizeFn    = function(treedata)   { return treedata.nodeSize(); }

// functions on nodes
exports.hasChildrenFn = function(node) { return node.children ? true : false; }
exports.ancestorsFn   = function(node) { return node.ancestors(); }
exports.descendentsFn = function(node) { return node.descendents(); }
exports.leavesFn      = function(node) { return node.leaves(); }
exports.linksFn       = function(node) { return node.links(); }
exports.sumFn         = function(node) { return node.sum(); }
exports.childrenFn    = function(node) { return node.children ? node.children : [] }
exports.parentFn     = function(node) { return node.parent ? node.parent : [] }

// not implemented yet:
// eachFn
// eachAfterFn
// eachBeforeFn
// pathFn
// sortFn
