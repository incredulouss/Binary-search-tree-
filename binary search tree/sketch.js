
var tree;

function setup() {
  noCanvas();
  tree = new Tree();
  var n = new Node(5);
  tree.addNode(n);
  console.log(tree);

}
function Tree()
{
 this.root = null; 
  
}
Tree.prototype.addNode = function(n)
{
  if(this.root == null)
  {
   this.root = n; 
  }
  
}

function Node(val)
{
 this.left = null;
  this.right = null;
  this.valu = val;
  
}