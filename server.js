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
app.get('/', (req, res)=>{
    let directions = "<p>This is the root route</p><p>With get method you can write in the direction bar: /date , /fullname , /city , /school</p><p>And with post method you can write in the direction bar: /add , /squarearea , /trianglearea</p>"
    res.send(directions);
})

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
    let numbertoAdd = 0;
    varsforAdd = Object.values(varsforAdd)
    varsforAdd.forEach(number => {
        numbertoAdd = numbertoAdd + parseFloat(number)
    });
    if (numbertoAdd){
        res.send('The additions of given numbers is: ' + numbertoAdd)
    }else{
        res.send('Some of the vars are not a number')
    }
    
})

// MULTIPLICATION
app.post('/timesby', (req, res) => {
    let varsforMult = req.body;
    let numbertoMultiply = 1
    varsforMult = Object.values(varsforMult)
    varsforMult.forEach(number => {
        numbertoMultiply = numbertoMultiply * number
    });

    if (numbertoMultiply){
        res.send('The multiplication of given numbers is: ' + numbertoMultiply)
    }else{
        res.send('Some of the vars are not a number')
    }
})

// SQUARE AREA
app.post('/squarearea', (req, res) => {
    let varsforSquareArea = req.body
    let calc = varsforSquareArea.side1 * varsforSquareArea.side2

    if (calc){
        if (varsforSquareArea.side1 === varsforSquareArea.side2) {
            res.send('This is the area of th square: ' + calc)
        }else{
            res.send('This is not a square, here is the area: ' + calc)
        }
    }else{
        res.send('Some of the vars are not a number')
    }
})

// TRIANGLE AREA
app.post('/trianglearea', (req, res) => {
    let varsforTriArea = req.body
    let calc = (varsforTriArea.base * varsforTriArea.height)/2
    if (calc){
        res.send('This is the area of the triangle: ' + calc)
    }else{
        res.send('Some of the vars are not a number')
    }
    
})

// END ENDPOINTS

app.listen(port, () => {

})

