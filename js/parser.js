$(document).ready(function(){
    $("#resultstest").clone("<tbody></tbody>");
    $.ajax({
      type: "GET",
      url: "contacts.xml",
      dataType: "xml",
      success: function(xml){
      $(xml).find('Program').each(function(){
        var sName = $(this).find('Name').text();
        var sEmail = $(this).find('Email').text();
        var sPhoneNumber = $(this).find('PhoneNumber').text();
        $("<th></th>").html(sName).appendTo("#resultstest tbody");
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
  $("#submitForm").submit(function(e) {
    e.preventDefault();
    var frm = $("#submitForm");
    var data = {};
    $.each(this, function(i, v){
        var input = $(v);
        data[input.attr("name")] = input.val();
        delete data["undefined"];
    });
    $.ajax({
        contentType:"xml; charset=utf-8",
        type:frm.attr("method"),
        url:frm.attr("action"),
        dataType:'xml',
        data:xml.stringify(data),
        success:function(data) {
            alert(data.message);
        }
    });
});