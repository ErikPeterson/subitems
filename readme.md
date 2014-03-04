#SUBITEMS
####simple set of javascript functions for creating expandable forms

##see demo.html for example, subitems.js source is fully commented

The included functions allow you to select a form and give it an expandable list
of sub-items. The script uses a counter to automatically differentiate the new
elements on the page and in the generated request. The replacement string represents
a full set of elements representing the sub-item you want to add to your form, with
`%(d)` used as a placeholder for the incrementing counter. Eg:

````
var elstring = '<label for="subitem-%(d)">' +
               '<input id="subitem-%(d)" name="subitems[item-%(d)]" type="text">';

````

##usage:

####Set up your form

The script adopts a convention of using a container element with the id "sub-items"
to hold the generated items and the button for creating them. Include any element,
(e.g. `<ul id="sub-items"></ul>`) with that id in your form to make it a valid target
for the script.

####Include the script in your page:

````
<script src="subitems.js"></script>

````
###Run the script in your page

Define your element template, and pass the id of your form, the element template, and optional button text to the
readForm function to initialize:

````
<script type="text/javascript">
  var elementstring = '<li><label for "song-%(d)-name">Song Name:</label>' +
                      '<input type="text" id="song-%(d)-name" name="album[songs][song-%(d)]">' +
                      '</li>';

  readForm("test-form", elementstring, "Add Song");
</script>

````

Caveats: You probably don't want to use this code in production, as it directly
adds several methods to the global object. May repackage as a jQuery plugin in the
future.
