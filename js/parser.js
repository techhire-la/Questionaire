$(document).ready(function(){
    $("#resultstest").clone("<tbody></tbody>");
    $.ajax({
      type: "GET",
      url: '/js/contacts.json',
      dataType: 'json',
      success: function(data){
      $(data.contacts).each(function(index, value){
        console.log(data)
        //var sName = $(this).find('Name').text();
        //var sEmail = $(this).find('Email').text();
        //var sPhoneNumber = $(this).find('phonenumbers').text();
          $("<th>").html("<input type='checkbox' name='Program' value='"+ data.Name +"' />" + data.Name).appendTo("#resultstest tbody");
          $("<tr>").html("Email: " + "<a href ='mailto:"+ data.Email +"'>"+data.Email+"</a>").appendTo("#resultstest tbody");
          $("<tr>").html("Phone : " + data.PhoneNumber).appendTo("#resultstest tbody");
      });
    },
    error: function() {
      alert("An error occurred while processing Json file.");
    }
    });
  });
  //Code Ends