const app  = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('Conexión con la base de datos exitosa');
  const server = app.listen(3001, () => {
     console.log(`Listening http://localhost:${server.address().port}`);
  });
});