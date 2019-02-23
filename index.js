require('dotenv').config();
// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const server = require('./server');

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`)
});