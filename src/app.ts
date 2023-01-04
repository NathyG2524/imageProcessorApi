import express from 'express';
import route from './routes/index';

const app = express();

const port = 5000;

app.use('/api', route);

app.listen(port, () => {
  console.log('the server is started');
});

export default app;
