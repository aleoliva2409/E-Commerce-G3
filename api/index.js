const app  = require('./src/app');
const { conn } = require('./src/db');
const PORT = process.env.PORT || 3001;


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('Successful database connection!!');
  const server = app.listen(PORT, () => {
     console.log(`Listening http://localhost:${server.address().port}`);
  });
});