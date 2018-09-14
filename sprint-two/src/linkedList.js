var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // must create variable to ensure it will point to the same node
    var newNode = Node(value)

    // if list head has nothing
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      // save the tail node
      var temp = list.tail;
      // assign the newNode to the previous tail
      temp.next = newNode;
    }

    // save the tail and move it to next

    list.tail = newNode;
  };

  list.removeHead = function() {
    var removed = list.head.value;
    if (list.head !== null) {
      list.head = list.head.next;
    }

    return removed;
  };

  list.contains = function(target) {
    var currentNode = list.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// linkedList.addToTail(4);

// { list:
//     head: {
//       value: 4
//       next: null,
//     }
//     tail: {
//       value: 4,
//       next: null,
//     }
// }

// linkedList.addToTail(5);
// {
//   list:
//   head:
//   {
//     value: 4,
//     next:
//     {
//       value: 5,
//       next: null
//
//     }
//   tail:
//     {
//       value: 5,
//       next: null,
//     }
//   }
// }
