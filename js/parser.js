$(document).ready(function(){
    $("#resultstest").append("<ul></ul>");
    $.ajax({
      type: "GET",
      url: "contacts.xml",
      dataType: "xml",
      success: function(xml){
      $(xml).find('Program').each(function(){
        var sName = $(this).find('Name').text();
        var sPhoneNumber = $(this).find('PhoneNumber').text();
        $("<li></li>").html(sName + ", " + sPhoneNumber).appendTo("#resultstest ul");
      });
    },
    error: function() {
      alert("An error occurred while processing XML file.");
    }
    });
  });
  //Code Ends