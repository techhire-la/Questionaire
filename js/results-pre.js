s$(document).submit(function () {
      $.ajax({
          type: "GET",
          url: "js/contacts.json",
          dataType: "json",
          cashe: false,
          success: function (formQuestions) {
            //debugger;

            $("input[name=college-age]:radio").click(function () {
              if ($('input[name=college-age]:checked').val() == "yes") {
                var filterContacts = data.contacts.filter(function (contact) {
                  return contact.group.includes("College");
                });
              }
            });

            $("input[name=education]:radio").click(function () {
              if ($('input[name=education]:checked').val() == "True") {
                var filterContacts = data.contacts.filter(function (contact) {
                  return contact.group.includes("High School");
                });
              }
            });

            $("input[name=vet]:radio").click(function () {
              if ($('input[name=vet]:checked').val() == "yes") {
                var filterContacts = data.contacts.filter(function (contact) {
                  return contact.group.includes("Veterans");
                });
              }
            });
            $("input[name=housing]:radio").click(function () {
              if ($('input[name=housing]:checked').val() == "yes") {
                var filterContacts = data.contacts.filter(function (contact) {
                  return contact.group.includes("Homelessness");
                });
              }
            });

            //var filterContacts = data.contacts.filter(function (contact) {
            // return contact.group.includes("Middle School");
            //return contact.phonenumber === "323.546.8071";
            //return contact.zip.includes(90038);
            //});

            event.preventDefault();
            var searchIDs = $("input[type='checkbox']:checked").map(function () {
              return $(this).val();
            }).get(); // <----
            console.log(searchIDs);
            console.dir(filterContacts);
            error: function () {

              alert("An error occurred while processing json file.");
            }
          });
      });