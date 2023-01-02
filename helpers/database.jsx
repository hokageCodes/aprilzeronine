import mongoose from 'mongoose'
const connection = {};


export async function connectDB() {
    if(connection.isConnected) {
        console.log("Connected already. Please check");
        return;
    }
    if(mongoose.connections.length>0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1 ) {
            console.log("Use Previous connection to the database");
            return
        }
        await mongoose.disconnect(
        )
    }

    const db = await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("New connection to DB")
    connection.isConnected = db.connections[0].readyState;
}


export async function disconnectDb() {
    if(connection.isConnected) {
        if(process.env.NODE_END === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log('Not disconnecting oo');
        }
    }
}