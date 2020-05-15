const express = require('express');
const app = express();
const port = 8800;
//variable to hold the res
data ={}

//middleware
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'))

// app.get('/',(req, res)=>{
//     res.send('../../dist/index.html')
// })

//if departure is in a week
app.post('/current', (req, res)=>{
    data = {
        'temp' : req.body.temp,
        'dis' : req.body.dis,
        'des' : req.body.des
    }
    res.send(data)
})

//if departure is after on week
app.post('/future', (req, res)=>{
    data = {
        'low_temp': req.body.low_temp,
        'max': req.body.max_temp,
        'dis': req.body.dis,
        'des': req.body.des
    }
    res.send(data)
})

app.listen(port, () => {console.log(`Server is running on port: ${port}` )})