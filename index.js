import express from 'express';
const app = express();
const port = 3000;
// import user from './src/models/User.js';

// Import layers
import UserRepository from './src/repository/userRepository.js';
import AuthService from './src/services/authService.js';
import AuthHandler from './src/handler/authHandler.js';
import UserHandler from './src/handler/UserHandler.js';
import UserService from './src/services/userService.js';

app.use(express.json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const authService = new AuthService(userRepository);
const userHandler = new UserHandler(userService);
const authHandler = new AuthHandler(authService);

app.get('/users', userHandler.getAll);
app.post('/login', authHandler.login);
app.post('/register', authHandler.register);
// app.get('/', (req, res) => {
//   try {
//     user.findAll().then((data) => {
//       res.send(data);
//     });
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// });

// app.get('/insert', (req, res) => {
//   user
//     .create({
//       username: 'Akbar Z',
//       password: 'akbar1234',
//       email: 'akbar@gmail.com',
//     })
//     .then((data) => {
//       res.send(data);
//     });
// });

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
