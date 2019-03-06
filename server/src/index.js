import { join } from 'path';
import express from 'express';

const app = express();

let p = join(__dirname, '../../client');
console.log(p);

app.use(express.static(p));
app.use(express.json());

app.use('*', (req, res, next) => {
    res.sendFile(join(__dirname, '../client/index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});