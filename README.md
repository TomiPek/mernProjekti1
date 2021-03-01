# mernProjekti1 : https://mernprojekti1.herokuapp.com/index.html
Main repositoriossa on index.js mikä toimii pohjana apille.
Package.jsonissa on Herokua varten luotua toiminnallisuutta ja heroku osoite on: https://mernprojekti1.herokuapp.com/index.html
index sivun ylälaidassa on välilehdet projektin muille sivuille. Guestbookista löytyy data.jsoniin new message välilehden kautta tallennetut tiedostot.
Ajax message ei tallenna tietoja data.json tiedostoon, mutta lähettää express backendin kautta tiedot takaisin ajax message välilehdelle form laatikon alapuolelle.

Main kansiossa on muut projektiin olennaisesti liittyvät html, javascript ja tyylitiedostot. Kullakin html sivulla on esimerkiksi oma javascript tiedosto lukuunottamatta
new messagea, joka toimii index.js:n kautta.
