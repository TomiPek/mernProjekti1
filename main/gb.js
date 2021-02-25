$(document).ready(function () {
  $.getJSON("http://localhost:8080/data.json", function (results) {
    let data = results;
    var taulukko = "<table>";
    // Taululle otsikot
    taulukko +=
      "<tr><td><h5>Name</h5></td><td><h5>Country</h5></td><td><h5>Message</h5></td><td><h5>Date</h5></td>";

    for (var i = 0; i < data.length; i++) {
      // datan läpikäynti ja tulostaminen sivulle
      taulukko +=
        "<tr>" +
        "<td>" +
        data[i].username +
        "</td>" +
        "<td>" +
        data[i].country +
        "</td>" +
        "<td>" +
        data[i].message +
        "</td>" +
        "<td>" +
        data[i].date +
        "</td>" +
        "</tr>";
    }

    let print = document.getElementById("printloc");

    print.innerHTML = taulukko;
  });
});
