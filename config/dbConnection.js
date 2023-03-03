import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://jiarr:jiarr@cluster0.v0jdcr3.mongodb.net/mycontacts-backend?retryWrites=true&w=majority")
        console.log(
            'Database connected: ',
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}