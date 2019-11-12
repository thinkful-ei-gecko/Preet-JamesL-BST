const BST = require('./BST')
//#1 Whiteboard -- 3 as root, place next numbers to left or right depending on value
//#2 choose new root and reassign children
//#3 BST CLASS
//#4 What does this program do?
  //adds all of the values
  //O(n)
  function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.key + tree(t.right)
  }

//#5 Height of BST
  function height(tree) {
    if(!tree) {
      return 0
    }
    let left = height(tree.left)
    let right = height(tree.right)
    if(left > right) {
      return left + 1
    }
    else {
      return right + 1
    }
  }

function main() {
  let bst = new BST()
  bst.insert(3)
  bst.insert(1)
  bst.insert(4)
  bst.insert(6)
  bst.insert(9)
  bst.insert(2)
  bst.insert(5)
  bst.insert(7)
  // bst.insert('e')
  // bst.insert('a')
  // bst.insert('s')
  // bst.insert('y')
  // bst.insert('q')
  // bst.insert('u')
  // bst.insert('e')
  // bst.insert('s')
  // bst.insert('t')
  // bst.insert('i')
  // bst.insert('o')
  // bst.insert('n')
  console.log(height(bst))
}

main()