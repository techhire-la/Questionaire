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
  $('input').keyup(function() {                       // Bind keyup event to textbox
    var textboxVal = $(this).val().toLowerCase();   // Get value of textbox
    $('ul li').each(function() {                    // loop through the list
        var listVal = $(this).text().toLowerCase(); // get value of the <li>
        if(listVal.indexOf(textboxVal) >= 0) {      // search if textboxVal is in listVal
            $(this).show();                         // if true show this <li>
        } else {
            $(this).hide();                         // else hide this <li>
        }
    });
});