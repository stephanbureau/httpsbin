const app = require('express')();
const selfSignedHttps = require('self-signed-https');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    const msg = `GET: ${new Date()}`;
    console.log(msg);
    res.send(msg);
});

app.post('/', function (req, res) {
    const msg = `POST: ${new Date()}`;
    console.log(`${msg} - ${JSON.stringify(req.body)}`);
    res.send(msg);
});

const PORT = process.env.PORT || 3000;
selfSignedHttps(app).listen(PORT, '0.0.0.0', null, () => {
    console.log(`server running on https://localhost:${PORT}/`);
});
