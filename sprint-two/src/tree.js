var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  // extends the newTree methods from treeMethods
  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};



treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  for (let i = 0; i < this.children.length; i++) {
    var current = this.children[i];

    if(current.contains(target)) {
      return true;
    }
  }

  return false;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
