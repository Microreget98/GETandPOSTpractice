// required system imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// constant vars
const app = express();
const port = 4000;

// configs
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true
}))
app.use(cors());
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allowed-Origin', '*');
    res.header('Access-Control-Allowed-Methods', 'PUT,GET ,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allowed-Headers', 'Content-Type');
    next();
})

// START ENDPOINTS
// ROOT

// Date
app.get('/date', (req, res) => {
    const formatedDate = new Date()
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }
    res.send(formatedDate.toLocaleDateString('es-MX', options))
})

// Full name
app.get('/fullname', (req, res) => {
    res.send('Angel Servando Quiñones Garcia');
})

// City
app.get('/city', (req, res) => {
    res.send('San Nicolas de los Garza, Nuevo Leon');
})

// School
app.get('/school', (req, res) => {
    res.send('Facultad de Ingenieria Mecanica y Electrica')
})

// Math operations
// ADD
app.post('/add', (req, res) => {
    let varsforAdd = req.body;
    varsforAdd = Object.values(varsforAdd)
    res.send(typeof varsforAdd)
    varsforAdd.forEach(number => {
        res.send(number)
        // try {
        //     element += element
        // } 
        // catch (error) {
        //     res.send('some of the vars are not a number')
        // }   
    });
    // res.send('The additions of given numbers is: ' + element)
})
// MULTIPLICATION
app.post('/timesby', (req, res) => {
    let varsforMult = req.body;
    varsforMult = varsforMult.values()
    varsforMult.forEach(element => {
        try {
            element += element
        } 
        catch (error) {
            res.send('some of the vars are not a number')
        }   
    });
    res.send('The multiplication of given numbers is: ' + element)
})
// SQUARE AREA
app.post('/squarearea', (req, res) => {
    let varsforSquareArea = req.body

})
// TRIANGLE AREA
app.post('/trianglearea', (req, res) => {
    let varsforTriangleArea = req.body
})

// END ENDPOINTS

app.listen(port, () => {

})

