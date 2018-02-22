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
        var sPhoneNumber = $(this.childNodes).closest('phonenumbers');
        $("<th></th>").html( "<input type='checkbox' value=/>" + sName).appendTo("#resultstest tbody");
        $("<tr></tr>").html("Email: " + "<a href ='mailto:"+ sEmail +"'>"+sEmail+"</a>").appendTo("#resultstest tbody");
        $("<tr></tr>").html("Phone : " + sPhoneNumber[0].innerHTML).appendTo("#resultstest tbody");
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