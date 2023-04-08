import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import dallroutes from './routes/dalle.routes.js'


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit: "50mb"}));

app.use('/api/v1/dalle', dallroutes )

app.get('/', (req, res) =>{
    res.status(200).json({message: "Hello world"})
})

app.listen(8080, ()=>{
    console.log('Server has started om port 8080');
})
