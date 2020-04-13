const server = require("./api/server.js");
const PORT = process.env.PORT || 5000;
const accountsRouter = require('./api/accounts/accountsRouter');
const customersRouter = require('./api/customers/customersRouter');

server.use('/api/accounts', accountsRouter)
server.use('/api/customers', customersRouter)

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});