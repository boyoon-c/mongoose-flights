import {Flight, Ticket} from '../models/flight.js'


export{
    newFlight as new,
    create,
    index,
    createTicket,
    show
    //redirect
}

function show(req,res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {
            title: 'Flight Detail',
            flight: flight
        })
    })
}
function createTicket(req,res){
    Flight.findById(req.params.id, function(err,flight){
        flight.tickets.push(req.body)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function newFlight(req, res){
    res.render('flights/new')
}


function create(req,res){
    console.log(req.body)
    for (let key in req.body){
        console.log(key)
        if (req.body[key]===''){
            delete req.body[key]
        }
    }
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