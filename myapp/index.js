import express from 'express';
const app = express();
const port = 3000;
// import user from './models/User.js';
import user from './src/models/User.js';

app.get('/', (req, res) => {
  try {
    user.findAll().then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

app.get('/insert', (req, res) => {
  user
    .create({
      username: 'Akbar Z',
      password: 'akbar1234',
      email: 'akbar@gmail.com',
    })
    .then((data) => {
      res.send(data);
    });
});

// app.get('/', (req, res) => {
//   sequelize
//     .authenticate()
//     .then(() => {
//       res.send('Connection has been established successfully.');
//     })
//     .catch((err) => {
//       res.send('Koneksi gagal : ' + err.message);
//     });
// });

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
