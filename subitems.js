(function(window, document){

//encapsulating the functions in this way causes the code to be immediately invoked on
//load, defining the functions and binding them to the window object

function addSubItem(parent, string){
//takes a parent dom object reperesenting the sub-items container, and appends a
//new element based on the input string and the counter.
  var parser = new DOMParser(), //creates new dom parser object
      eltext = string.replace(/%\(d\)/g, getCount()), //subs the %(d) marker for the counter
      html = parser.parseFromString(eltext, "text/html").firstChild, //parses the text into a document object
      el = html.children[html.children.length - 1].children[0]; //does some other node digging BS to turn a string into a DOM object

  parent.appendChild(el); //appends the new form element set to the container

  return incrementCounter(); //increments the counter
}

function incrementCounter() {
  var counter = document.getElementById("sub-item-counter");
  //gets a reference to the counter div object
  return counter.setAttribute("data-counter", (parseInt(counter.getAttribute("data-counter"), 10) + 1));
  //increments the value of its data-counter attribute
}

function getCount(){
    var counter = document.getElementById("sub-item-counter");
    //gets a reference to the counter div object
    return parseInt(counter.getAttribute("data-counter"), 10);
    //parses its data-counter attribute for the counter number
}

function readForm(formid, str, buttonlabel) {
  //takes an id for a form element, a string representing the code for one item,
  //using %(d) as a replacement placeholder for numbers differentiating the
  //created items

  var form = document.getElementById(formid), //captures a reference to the form object
      cont = form.children.namedItem("sub-items"), //captures a reference to the sub-items container
      button = document.createElement("button"), //creates a button element for insertion into the form
      label = (name) ? document.createTextNode(name) : document.createTextNode("Add an Item"), //gets the label for the button. defaults to "add an item"
      counter = document.createElement("div"); //creates empty div element to use as a counter

    counter.setAttribute("id","sub-item-counter"); //sets the id for the counter object
    form.appendChild(counter); //appends the counter object to the form
    counter.setAttribute("data-counter", "0"); //sets the "data-counter" attribute of the counter element to 0

    button.type = "button"; //sets type attribute of the button element
    cont.appendChild(button); //appends the button element to the sub-items container

    button.appendChild(label); //appends label text to utton

  return button.addEventListener('click', function(){
      //sets click event handler for the button, passing it the form element and
      //the replacement string
      addSubItem(this.parentNode, str);
  });
}

//bind these functions to the window object to make them accessible in the global scope
window.addSubItem = addSubItem;
window.incrementCounter = incrementCounter;
window.getCount = getCount;
window.readForm = readForm;

}(window, document))
