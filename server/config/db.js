const mongoose = require("mongoose")

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://Mirob43:Slovensko11@cluster0.m7j6p2n.mongodb.net/mgmt_db?retryWrites=true&w=majority')

    console.log(`MongoDB is connected: ${conn.connection.host}`)
}

module.exports = connectDB