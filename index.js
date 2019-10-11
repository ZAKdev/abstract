import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getAssetsList } from './routes/projects';

const app = express();

app.use(cors());

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/api/getAssetsList', getAssetsList);

app.listen(2000, () => {
    console.log('App is running on port 2000');
});