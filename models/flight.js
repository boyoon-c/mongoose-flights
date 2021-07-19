import mongoose from 'mongoose'

export{
    Flight
}

const Schema = mongoose.Schema

const flightSchema = new Schema({
    // enum to include American, southwest and united
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"]
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            //newDate=new Date()
            //newYear=newDate.getFullYear()+1
            //newDate.setFullYear(newYear)
            //return newDate
            return new Date().setFullYear(new Date().getFullYear()+1)
        }
        
    }
}, {
    timestamps: true
})

const Flight=mongoose.model('Flight', flightSchema)