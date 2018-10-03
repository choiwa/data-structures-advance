var BinarySearchTree = function(value) {
  let newTree = Object.create(treeMethods);

  newTree.value = value;

  return newTree;
};

var treeMethods = {};

// must use es5???
treeMethods.insert = function (value) {
  var direction = this.value < value ? 'right' : 'left';

  if (this[direction] === undefined) {
    this[direction] = BinarySearchTree(value);
  } else {
    this[direction].insert(value);
  }
};

treeMethods.contains = function (target) {
  var direction = '';

  if (this.value === target) {
    return true;
  }

  this.value > target ? direction = 'left' : direction = 'right';

  if (this[direction] === undefined) {
    return false;
  } else {
    return this[direction].contains(target);
  }
};

treeMethods.depthFirstLog = function (cb) {
  cb(this.value);

  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
