$("#email").submit(function (event) {
    event.preventDefault();
    var searchIDs = $("input[type='checkbox']:checked").map(function () {
      return $(this).val();
    }).get(); // <----
    console.log(searchIDs);
    document.getElementById("emaillist").value = searchIDs;
    //$("#emaillist").value= searchIDs;
  });