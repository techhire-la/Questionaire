$(document).ready(function () {
  $("#resultstest").clone("<tbody></tbody>");
  $.ajax({
    type: "GET",
    url: "js/contacts.json",
    dataType: "json",
    cashe: false,
    success: function (data) {
      //debugger;
      $("input[name=college-age]:radio").click(function () {
        if ($('input[name=college-age]:checked').val() == "yes") {
          var filterContacts = data.contacts.filter(function (contact) {
            return contact.group.includes("College");
          })
        }
      });

      $("input[name=education]:radio").click(function () {
        if ($('input[name=education]:checked').val() == "True") {
          var filterContacts = data.contacts.filter(function (contact) {
            return contact.group.includes("High School");
          })
        }
      });

      $("input[name=vet]:radio").click(function () {
        if ($('input[name=vet]:checked').val() == "yes") {
          var filterContacts = data.contacts.filter(function (contact) {
            return contact.group.includes("Veterans");
          })
        }
      });
      $("input[name=housing]:radio").click(function () {
        if ($('input[name=housing]:checked').val() == "yes") {
          var filterContacts = data.contacts.filter(function (contact) {
            return contact.group.includes("Homelessness");
          })
        }
      });

      //var filterContacts = data.contacts.filter(function (contact) {
      // return contact.group.includes("Middle School");
      //return contact.phonenumber === "323.546.8071";
      //return contact.zip.includes(90038);
      //});
      console.dir(filterContacts);
      $(filterContacts).each(function (index, value) {
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


$("#email").submit(function (event) {
  event.preventDefault();
  var searchIDs = $("input[type='checkbox']:checked").map(function () {
    return $(this).val();
  }).get(); // <----
  console.log(searchIDs);
  document.getElementById("emaillist").value = searchIDs;
  //$("#emaillist").value= searchIDs;
});