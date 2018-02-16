function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "contacts.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>name</th><th>Number</th></tr>";
    var x = xmlDoc.getElementsByTagName("program_names");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PhoneNumber")[0].childNodes[0].nodeValue +
      "</td></tr>"+
      x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("contacts").innerHTML = table;
  }