$(document).ready(function(){
    $("#resultstest").append("<th></th>");
    $.ajax({
      type: "GET",
      url: "contacts.xml",
      dataType: "xml",
      success: function(xml){
      $(xml).find('Program').each(function(){
        var sName = $(this).find('Name').text();
        var sEmail = $(this).find('Email').text();
        var sPhoneNumber = $(this).find('PhoneNumber').text();
        $("<tr></tr>").html(sName + ", " + sEmail + "," + sPhoneNumber).appendTo("#resultstest th");
      });
    },
    error: function() {
      alert("An error occurred while processing XML file.");
    }
    });
  });
  //Code Ends