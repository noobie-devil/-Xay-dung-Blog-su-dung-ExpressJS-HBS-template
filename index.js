const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');


const app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hbs");

app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

// app.use('/message', require('./routes/messages'));
// app.use('/', require('./routes/students'));
app.use('/', require('./routes/index'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));