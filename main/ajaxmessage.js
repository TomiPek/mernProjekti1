window.onload = (event) => {
  var nappi = document.getElementById("nappi");

  nappi.addEventListener("click", () => {
    var nimi = document.getElementById("username2").value;
    var maa = document.getElementById("country2").value;
    var viesti = document.getElementById("message2").value;
    console.log(nimi, maa, viesti);
    if (nimi == "" || maa == "" || viesti == "") {
      alert("Text field is empty!");
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("location").innerHTML = this.responseText;
        console.log(this.responseText);
      }
    };

    xmlhttp.open("POST", "/ajaxmessage", true);
    xmlhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xmlhttp.send(
      "username2=" + nimi + "&country2=" + maa + "&message2=" + viesti
    );
  });
};
