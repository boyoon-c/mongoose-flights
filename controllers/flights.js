import {Flight} from '../models/flight.js'

export{
    newFlight as new,
    create,
    index
    //redirect
}

function newFlight(req, res){
    res.render('flights/new')
}


function create(req,res){
    console.log(req.body)
    const Doesthiswork = new Flight(req.body)
    Doesthiswork.save(function(err){
        if (err) return res.redirect('/flights/new')
        res.redirect('/flights')
    })
 }

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
            flights
        })
    })
}

// function redirect(req,res){
//     res.redirect('/')
// }