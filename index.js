const http = require("http");
const PORT = process.env.PORT || 8080;

let express = require("express"); // express käyttöön
let fs = require("fs"); // fs tiedoston kirjoitusta varten

let app = express();
let bodyParser = require("body-parser"); // body-parser module http post datan lukua varten
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./main/")); // appille tiedostojen sijainti

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/main/index.html"); // pää sivun sijainti
});

app.get("/guestbook", (req, res) => {
  res.sendFile(__dirname + "/main/guestbook.html"); // vieraskirja
});

app.get("/ajaxmessage", (req, res) => {
  res.sendFile(__dirname + "/main/ajaxmessage.html"); //ajaxmessage
});

app.post("/ajaxmessage", (req, res) => {
  addDetails(req);
  // lähetetään tiedot html:lle sivulle.
  let username = req.body.username;
  let country = req.body.country;
  let message = req.body.message;
  res.send(
    "Käyttäjänimi: " +
      username +
      "<br>" +
      " Kotoisin: " +
      country +
      "<br>" +
      " Viesti: " +
      message
  );
  console.log(username + country + message);
});

app.get("/newmessage", (req, res) => {
  // newmessage sivun sijainti.
  res.sendFile(__dirname + "/main/newmessage.html");
});

app.post("/newmessage", (req, res) => {
  // newmessage sivuille tietojen lähettäminen ja redirect guestbook sivulle.
  addDetails(req);
  res.redirect("/guestbook");
});

function addDetails(req, res) {
  // newmessage sivua varten apu functio.
  let data = require("./main/data.json");
  let date_ob = new Date();

  let day = date_ob.getDay();

  // current year
  let year = date_ob.getFullYear();

  // current month
  let month = date_ob.getMonth() + 1;

  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes() + " GMT";

  date_ob =
    "Time " + day + "/" + month + "/" + year + " " + hours + ":" + minutes;

  data.push({
    username: req.body.username,
    country: req.body.country,
    message: req.body.message,
    date: date_ob,
  });

  let jsonStr = JSON.stringify(data);

  fs.writeFile("./main/data.json", jsonStr, (err) => {
    if (err) throw err;
  });
}

app.listen(PORT, () => {
  console.log("Kuunnellaan porttia 8080!");
});
