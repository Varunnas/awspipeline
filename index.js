const express = require('express');
const app = express();

// The port MUST match the port in the Dockerfile (EXPOSE 8080)
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('This is the new integration to the pipeline for testing brrr ');
    
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});