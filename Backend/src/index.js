import express from 'express';
import connectDb from './config/db.js';
import authRouter from './routes/authRouter.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());    
app.use("/",authRouter)

connectDb().then(
    () => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server Started at port ${PORT}`);
        })
    }
).catch((err) => {
    console.log("Error in starting the server." + err)
})
