$(document).ready(function(){
    $("#resultstest").clone("<tbody></tbody>");
    $.ajax({
      type: "GET",
      url: "contacts.xml",
      dataType: "html",
      data: $(this).serialize(),
      success: function(xml){
      $(xml).find('Program').each(function(){
        var sName = $(this).find('Name').text();
        var sEmail = $(this).find('Email').text();
        var sPhoneNumber = $(this.childNodes).closest('phonenumbers');
          $("<th>").html("<input type='checkbox' name='Program' value='"+ sName +"' />" + sName).appendTo("#resultstest tbody");
          $("<tr>").html("Email: " + "<a href ='mailto:"+ sEmail +"'>"+sEmail+"</a>").appendTo("#resultstest tbody");
          $("<tr>").html("Phone : " + sPhoneNumber[0].innerHTML).appendTo("#resultstest tbody");
      });
    },
    error: function() {
      alert("An error occurred while processing XML file.");
    }
    });
  });
  //Code Ends