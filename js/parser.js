$(document).ready(function(){
    $("#resultstest").append("<tbody></tbody>");
    $.ajax({
      type: "GET",
      url: "contacts.xml",
      dataType: "xml",
      success: function(xml){
      $(xml).find('Program').each(function(){
        var sName = $(this).find('Name').text();
        var sEmail = $(this).find('Email').text();
        var sPhoneNumber = $(this).find('PhoneNumber').text();
        $("<tr></tr>").html("Name: " + sName).appendTo("#resultstest tbody");
        $("<tr></tr>").html("Email: " + sEmail).appendTo("#resultstest tbody");
        $("<tr></tr>").html("Phone : " + sPhoneNumber).appendTo("#resultstest tbody");
      });
    },
    error: function() {
      alert("An error occurred while processing XML file.");
    }
    });
  });
  //Code Ends