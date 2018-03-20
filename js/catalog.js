$( "input:checked" ).on( "click", countChecked );

$(document).ready(function () {
  $("#resultstest").clone("<tbody></tbody>");
  $.ajax({
    type: "GET",
    url: "js/contacts.json",
    dataType: "json",
    cashe: false,
    success: function (data) {
      $(data.contacts).each(function (index, value) {
        $("<th></th>").html(value.name).appendTo("#resultstest tbody");
        $("<tr></tr>").html("<input type='checkbox' value='" + value.email + "'> " + "  Email: " + "<a href ='mailto:" + value.email + "' name='emailto' id=" + index + ">" + value.email + "</a>").appendTo("#resultstest tbody");
        $("<tr></tr>").html("  Phone : " + value.phonenumber).appendTo("#resultstest tbody");
      });
    },

    error: function () {
      alert("An error occurred while processing json file.");
    }
  });
});

var countChecked = function() {
  var n = $( "input:checked" ).length;
  $( "#log" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
};
countChecked();
 
