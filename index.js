import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import groupRoutes from './routes/groups.js';
//import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: '5mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
app.use(cors());
app.get('/',(req,res)=>{
    res.json({
        status:"success",
        messge:"Welcome"
    })
})
app.use('/groups', groupRoutes);

const CONNECTION_URL ="mongodb+srv://admin:admin123@cluster0.nyyhl.mongodb.net/test?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);