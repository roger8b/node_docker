const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;
const user = process.env.USER_NAME || "World!";

app.get('/', ((req, res) => {
    res.send(`Hello ${user}`);
}))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

