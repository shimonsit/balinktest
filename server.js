// server.js
const express = require('express');
// create new express app and save it as "app"
const app = express();
// server configuration
const PORT = 3000;
// serve static assets
app.use(express.static('dist'));
// create a route to serve index.html
app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname + '/dist/' });
});
app.post('/user', (req, res) => {
  res.send("OK");
});

app.get('/countries', (req, res)=> {
  res.json(["France","United States","Canada","Mexico","United Kingdom","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua,and,Barbuda","Argentina","Armenia","Armenia","Aruba","Australia","Austria","Azerbaijan","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire","Bosnia,and,Herzegovina","Botswana","Bouvet,Island,(Bouvetoya)","Brazil","British,Indian,Ocean,Territory,(Chagos,Archipelago)","British,Virgin,Islands","Brunei,Darussalam","Bulgaria","Burkina,Faso","Burundi","Cambodia","Cameroon","Cape,Verde","Cayman,Islands","Central,African,Republic","Chad","Chile","China","Christmas,Island","Cocos,(Keeling),Islands","Colombia","Comoros","Congo","Congo","Cook,Islands","Costa,Rica","Cote,d'Ivoire","Croatia","Cuba","Curaçao","Cyprus","Cyprus","Czech,Republic","Denmark","Djibouti","Dominica","Dominican,Republic","Ecuador","Egypt","El,Salvador","Equatorial,Guinea","Eritrea","Estonia","Ethiopia","Falkland,Islands,(Malvinas)","Faroe,Islands","Fiji","Finland","French,Guiana","French,Polynesia","French,Southern,Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard,Island,and,McDonald,Islands","Holy,See,(Vatican,City,State)","Honduras","Hong,Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle,of,Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kazakhstan","Kenya","Kiribati","Korea","Korea","Kuwait","Kyrgyz,Republic","Lao,People's,Democratic,Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan,Arab,Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall,Islands","Martinique","Mauritania","Mauritius","Mayotte","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands,Antilles","New,Caledonia","New,Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk,Island","Northern,Mariana,Islands","Norway","Oman","Pakistan","Palau","Palestinian,Territory","Panama","Papua,New,Guinea","Paraguay","Peru","Philippines","Pitcairn,Islands","Poland","Portugal","Puerto,Rico","Qatar","Reunion","Romania","Russian,Federation","Rwanda","Saint,Barthelemy","Saint,Helena","Saint,Kitts,and,Nevis","Saint,Lucia","Saint,Martin","Saint,Pierre,and,Miquelon","Saint,Vincent,and,the,Grenadines","Samoa","San,Marino","Sao,Tome,and,Principe","Saudi,Arabia","Senegal","Serbia","Seychelles","Sierra,Leone","Singapore","Sint,Maarten,(Netherlands)","Slovakia,(Slovak,Republic)","Slovenia","Solomon,Islands","Somalia","South,Africa","South,Georgia,&,S.,Sandwich,Islands","Spain","Sri,Lanka","Sudan","Suriname","Svalbard,&,Jan,Mayen,Islands","Swaziland","Sweden","Switzerland","Syrian,Arab,Republic","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad,and,Tobago","Tunisia","Turkey","Turkey","Turkmenistan","Turks,and,Caicos,Islands","Tuvalu","U.S.,Virgin,Islands","U.S.,Minor,Outlying,Islands","Uganda","Ukraine","United Arab Emirates","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Wallis and Futuna","Western,Sahara","Yemen","Zambia","Zimbabwe"])
})
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

