import mongoose from 'mongoose'

export{
    Flight,
    //Ticket
}

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat:{
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price:{
        type: Number,
        min: 0
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    // enum to include American, southwest and united
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"],
        required: true
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function(){
            return new Date().setFullYear(new Date().getFullYear()+1)
        }
        
    },
    tickets: [ticketSchema],
    destination: [{type: Schema.Types.ObjectId, ref:'Destination'}]
}, {
    timestamps: true
})



const Flight=mongoose.model('Flight', flightSchema)