import app from './app.js';
import {connectDB} from './db.js';

connectDB();

const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
