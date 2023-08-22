import express from 'express';
import bookRouter from './routers/Book.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server UP!')
});
app.get('/health',(req,res) => {
    res.send('ok');
})

app.use('/book', bookRouter);

app.use((req, res) => {
    res.status(404).send('YOU requested sth I don`t have :( ')
});

app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT} `);
});
