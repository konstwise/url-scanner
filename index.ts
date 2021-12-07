import * as express from 'express';
import routes from './src/routes/routes';

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.text());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

