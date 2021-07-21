import { Destination } from '../models/destination.js'

export {
    newDestination as new,
    create,
    index, 
    deleteDestination as delete
}


function deleteDestination(req,res){
    Destination.findByIdAndDelete(req.params.id, function(err, destination){
        res.redirect('/destinations')
    })
}

function index(req,res){
    Destination.find({}, function(err, destinations){
        res.render('destinations/new', {
            destinations
        })
    })
}
function create(req,res){
    console.log(req.body)
    const newDest=new Destination(req.body)
    newDest.save(function(err){
        if (err) return res.redirect('/destinations/new')
        res.redirect('/destinations')
    })
}

function newDestination(req,res){
    Destination.find({}, function(err, destinations){
        res.render('destinations/new', {
            title: 'Add Destination',
            destinations: destinations
        })
    })
}