class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
class BTS {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let cur = this.root;
    // while true
    while (true) {
      if (val === cur.val) return undefined;
      //// check if val is >/< cur.val
      if (val < cur.val) {
        ////// if either, check if left or right node exists- if it doesnst exist add val to left or right
        if (!cur.left) {
          // insert and return
          cur.left = node;

          return;
        } else {
          ////// else cur = cur.left or cur.right
          cur = cur.left;
        }
      } else if (val > cur.val) {
        //   follow above steps for right branch
        if (!cur.right) {
          cur.right = node;
          return;
        } else {
          cur = cur.right;
        }
      }
    }
  }
  find(val) {
    if (this.root == null) {
      return this;
    }
    if (this.root.val == val) {
      return this.root;
    }
    let cur = this.root;
    let found = false;

    while (cur && !found) {
      if (val < cur.val) {
        cur = cur.left;
      } else if (val > cur.val) {
        cur = cur.right;
      } else {
        found = true;
        return cur;
      }
    }
    if (!found) return false;
  }
  delete(val) {
    if (!this.root) {
      return null;
    }
    if (!this.root.right && !this.root.left) {
      this.root = null;
      return this;
    }
    let cur = this.root;
    let dadnode;
    while (true) {
      if (val < cur.val) {
        dadnode = cur;
        cur = cur.left;
        if (val == cur.val) {
          if (cur.left) {
            dadnode.left = cur.left;
            return;
          } else {
            dadnode.left = cur.left;
            return;
          }
        }
      }
      if (val > cur.val) {
        dadnode = cur;
        cur = cur.right;
        if (val == cur.val) {
          if (cur.right) {
            dadnode.right = cur.right;
            return;
          } else {
            dadnode.right = cur.right;
            return;
          }
        }
      }

      // return;
    }
  }
  clear() {
    this.root = null;
  }
  BFS() {
    // node var hold root node
    let node = this.root;
    // emparr to store node vals
    let data = [];
    // emp arr to traverse the nodes on tree
    let q = [];
    // push root in q array
    q.push(node);
    // loop runs as long as q.length is > 0
    while (q.length) {
      // node holds first el of q array
      node = q.shift();
      // push val stored in node to data array
      data.push(node.val);
      // if node has left child, insert it to q array
      if (node.left) q.push(node.left);
      // then visa vis for right child
      if (node.right) q.push(node.right);
    }
    console.log(data);
    return data;
  }
  DFS_pre() {
    // store visited nide vals in data array
    let data = [];
    // let node avriable hold this.root(traversal start point)
    let node = this.root;
    // helper functions to recursively push node value to data array
    function trav(node) {
      // push node avl to data array
      data.push(node.val);
      // if node has a left recursively go down the left branch by called helper function,helper function called within helper function
      if (node.left) trav(node.left);
      // then if node has a right recursively go down the right branch after the left branch,helper function called within helper function
      if (node.right) trav(node.right);
    }
    // invoke helper function outside
    trav(node);
    console.log(data);
    return data;
  }
  DFS_post() {
    // store visited nodes in data array
    let data = [];
    // start from root, store root in node var
    let node = this.root;

    // recursive helper to travel down left and right edges
    function helperTrav(node) {
      // if node has left child call recursively
      if (node.left) helperTrav(node.left);
      // if node has right child call recursively
      if (node.right) helperTrav(node.right);
      // if push left node into data array then push right node after
      data.push(node.val);
    }
    // invoke helper
    helperTrav(node);
    console.log(data);
  }
  DFS_inOrder() {
    let data = [];
    let node = this.root;

    function travhelp(node) {
      if (node.left) travhelp(node.left);
      data.push(node.val);
      if (node.right) travhelp(node.right);
    }
    travhelp(node);
    console.log(data);
  }
}

const tree = new BTS();
tree.root = new Node(10);

tree.root.right = new Node(15);

tree.root.left = new Node(7);

tree.insert(21);
tree.insert(12);
tree.insert(9);
tree.insert(6);
tree.insert(5);
// tree.clear();
// tree.DFS_pre();
// tree.DFS_post();
tree.DFS_inOrder();
// console.log(tree.find(7));
// console.log(tree);
