const app = require('./app');

require('./utils/database');

app.listen(process.env.PORT || 3000);
