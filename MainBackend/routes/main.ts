import express from 'express';
import bodyParser from 'body-parser';
import emoji from 'node-emoji';
import paymentsRouter from './payments';
import statusRouter from './status';

const app = express();
const PORT = 4320;

process.setMaxListeners(15);

app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT} and listening for requests.. ${emoji.get('coffee')}`));

app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Authorization, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Set up express.json middleware
app.use(express.json());

// Use the imported routers
app.use('/payments', paymentsRouter);
app.use('/status', statusRouter);
