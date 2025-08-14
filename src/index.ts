import expresss from 'express';
import router from './routes/api';
import bodyParser from 'body-parser';
import sequelize from './utils/db';

const app = expresss();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})