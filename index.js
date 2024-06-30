const express = require('express');
const app = express();
const port = 3000;

// Import layers
const UserRepository = require('./src/repository/userRepository');
const AuthService = require('./src/services/authService');
const AuthHandler = require('./src/handler/authHandler');
const UserHandler = require('./src/handler/UserHandler');
const UserService = require('./src/services/userService');

const ItemRepository = require('./src/repository/itemRepository');
const ItemService = require('./src/services/itemService');
const ItemHandler = require('./src/handler/itemHandler');

const StatusRepository = require('./src/repository/statusRepository');
const StatusService = require('./src/services/statusService');
const StatusHandler = require('./src/handler/statusHandler');

const CategoryRepository = require('./src/repository/categoryRepository');
const CategoryService = require('./src/services/categoryService');
const CategoryHandler = require('./src/handler/categoryHandler');

const OrderRepository = require('./src/repository/orderRepository');
const OrderService = require('./src/services/orderService');
const OrderHandler = require('./src/handler/orderHandler');
app.use(express.json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const authService = new AuthService(userRepository);
const userHandler = new UserHandler(userService);
const authHandler = new AuthHandler(authService);

const itemRepository = new ItemRepository();
const itemService = new ItemService(itemRepository);
const itemHandler = new ItemHandler(itemService);

const statusRepository = new StatusRepository();
const statusService = new StatusService(statusRepository);
const statusHandler = new StatusHandler(statusService);

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryHandler = new CategoryHandler(categoryService);

const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);
const orderHandler = new OrderHandler(orderService);

app.get('/users', userHandler.getAll);
app.post('/login', authHandler.login);
app.post('/register', authHandler.register);

app.get('/item', itemHandler.getAll);
app.post('/item', itemHandler.create);
app.put('/item', itemHandler.update);
app.delete('/item', itemHandler.delete);
app.get('/item/:id', itemHandler.getById);

app.get('/status', statusHandler.getAll);
app.post('/status', statusHandler.create);
app.put('/status', statusHandler.update);
app.delete('/status', statusHandler.delete);
app.get('/status/:id', statusHandler.getById);

app.get('/category', categoryHandler.getAll);
app.post('/category', categoryHandler.create);
app.put('/category', categoryHandler.update);
app.delete('/category', categoryHandler.delete);
app.get('/category/:id', categoryHandler.getById);

app.get('/order', orderHandler.getAll);
app.post('/order', orderHandler.create);
app.put('/order', orderHandler.update);
app.delete('/order', orderHandler.delete);
app.get('/order/:id', orderHandler.getById);

app.use((req, res, next) => {
  res.status(404).send({
    status: 'fail',
    message: 'not found',
  });
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
