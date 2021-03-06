import {Flight} from '../models/flight.js'
import {Destination} from '../models/destination.js'

export{
    newFlight as new,
    create,
    index,
    createTicket,
    show,
    addToDestination,
    deleteFlight as delete,
    edit,
    update
}

function update(req,res){
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    Flight.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, flight) {
      res.redirect(`/flights/${flight._id}`)
    })
  }

function edit(req,res){
    Flight.findById(req.params.id, function(err,flight){
        res.render('flights/edit', {
            flight,
            err,
            title: "Edit Flight"
        })
    })
}

function deleteFlight(req,res){
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
        res.redirect('/flights')
    })
}

function addToDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.destination.push(req.body.destinationId)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }

function show(req,res){
    Flight.findById(req.params.id).
    populate('destination').exec(function(err, flight){
        Destination.find({_id: {$nin: flight.destination}}, function(err, destinations){
            res.render('flights/show', {
            title: 'Flight Detail',
            flight: flight,
            destinations: destinations
        })
        
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
        res.redirect(`/flights`)
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