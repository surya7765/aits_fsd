import Express from "express";
import 'dotenv/config'
import bodyParser from "body-parser";
import { connectToDB } from "./models/db.js";
import router from "./routes/router.js";
import cors from 'cors';
const app = Express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 5001

app.use('/api/v1/', router);

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening on port " + PORT);
    })
}).catch(err => {
    console.log("Error: " + err);
    process.exit(0);
})