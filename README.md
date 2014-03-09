YePAutoTabbing
==============

Simple JQuery Auto Tabbing Plugin


This Plugin is helpful to create a autotab feature for Phone #, Created Card # and other fields.


HTML

<div class="Phone"><input id = "Phone1" class="Length3"/></div><span style='float:left;'>-</span>
<div class="Phone"><input id = "Phone2"  class="Length3"/></div><span style='float:left;'>-</span>
<div class="Phone4"><input id = "Phone3"  class="Length4"/></div>



Java Script


$("#Phone1").YePAutoTabbing({
ID:['Phone1','Phone2','Phone3'],//holds the IDs of the fields
maxLength:[3,3,4]// Holds the maximum length of the Field
});


Refer to the demo html for details

Please leave your comments for any enhancements.
