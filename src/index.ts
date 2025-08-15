import expresss from 'express';
import router from './routes/api';
import bodyParser from 'body-parser';
import sequelize from './utils/db';
import cors from 'cors';
import docs from './docs/route';

async function init() {
  try {
    const app = expresss();
    const PORT = 3000;
    await sequelize.sync();

    app.use(cors());
    app.use(bodyParser.json());
    
    // app.use('/', (req, res) => {
    //   res.status(200).json({
    //     message: 'Selamat Datang di Urban Farming Management System API! Server is running...',
    //     data: null,
    //   })
    // });
    
    app.use('/api', router);
    docs(app);
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  } catch(err) {
    console.log(err);
  }
}

init();