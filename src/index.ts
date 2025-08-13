import expresss from 'express';
import router from './routes/api';

const app = expresss();
const PORT = 3000;


app.use('/api', router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})