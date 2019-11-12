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
      return -1;
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

  function minHeight(tree) {
    if(!tree) {
      return -1;
    }
    let left = height(tree.left)
    let right = height(tree.right)
    if(left < right) {
      return left + 1
    }
    else {
      return right + 1
    }
  }

//Q6: is it BST?
function isBst(tree){
  if(tree === null){
    return true;
  }
  if(!tree.left && !tree.right){
    return true;
  }
  if(tree.left && tree.left.key > tree.key){
    return false;
  }
  if(tree.right && tree.right.key < tree.key){
    return false;
  }
  return isBst(tree.left) && isBst(tree.right);
}

//Q7: 3rd largest node - below are two solns - both work
// function thirdLargest(tree){
//   if(!tree.right){
//     return tree.parent;
//   }
//   if(!tree.right.right && !tree.parent){
//     return tree.left
//   }
//   return thirdLargest(tree.right)
// }

function thirdLargest(tree) {
  let largest = tree._findMax()
  tree.remove(largest.key)
  let second = tree._findMax()
  tree.remove(second.key)
  let third = tree._findMax()
  return third.key
}

//Q8: Balanced BST
function balancedBst(tree){
  return(minHeight(tree) >= height(tree) - 1);
}

//Q9: Same BST
function sameBst(arr1, arr2) {
  if((arr1[0] !== arr2[0]) || (arr1.length !== arr2.length)) {
    return false
  }
  if(arr1.length < 2 || arr1.length === 2 && arr1[1] === arr2[1]) {
    return true
  }
  let right1 = arr1.filter(item => item > arr1[0])
  let left1 = arr1.filter(item => item < arr1[0])

  let right2 = arr2.filter(item => item > arr2[0])
  let left2 = arr2.filter(item => item < arr2[0])

  return sameBst(right1, right2) && sameBst(left1, left2)
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
  bst.insert(10);
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
  //console.log(height(bst))
  //console.log(isBst(bst));
  //console.log(thirdLargest(bst));
  console.log(balancedBst(bst));
}



let arr1=[3, 5, 4, 6, 1, 0, 2]

let arr2=[3, 1, 5, 2, 4, 6, 0]

console.log(sameBst(arr1, arr2))

