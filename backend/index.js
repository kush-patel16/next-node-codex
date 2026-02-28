const express = require('express');
const cors = require('cors');

const healthRouter = require('./routes/health');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/health', healthRouter);

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`);
});
