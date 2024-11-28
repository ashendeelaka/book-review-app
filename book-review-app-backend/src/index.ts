import express, { Express, Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/route';
import { ReviewModel } from './db/ReviewModel';
import 'dotenv/config'

const app: Express = express();
const port = process.env.PORT!;
const MONGO_URL = process.env.MONGO_PATH!

app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
mongoose.connect(process.env.MONGO_PATH!)
    .then(() => {
        console.log("Connect to DB");
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((err) => console.log(err))


app.use('/api', router);

