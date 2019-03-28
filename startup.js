var express = require('express')
var fs = require("fs")
var app = express()

app.use('/css', express.static('src/css'))

app.use('/favicon', express.static('src/favicon'))

app.use('/fonts', express.static('src/fonts'))

app.use('/images', express.static('src/images'))

app.use('/js', express.static('src/js'))

app.use('/vendors', express.static('src/vendors'))

app.get('/', function (req, res) {
    fs.readFile(__dirname + "/src/index.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})

app.get('/home2', function (req, res) {
    fs.readFile(__dirname + "/src/index-2.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})

app.get('/news.html', function (req, res) {
    fs.readFile(__dirname + "/src/news.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})
app.get('/news-details.html', function (req, res) {
    fs.readFile(__dirname + "/src/news-details.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})
app.get('/aboutus.html', function (req, res) {
    fs.readFile(__dirname + "/src/aboutus.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})
app.get('/activities.html', function (req, res) {
    fs.readFile(__dirname + "/src/activities.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})

app.get('/room1.html', function (req, res) {
    fs.readFile(__dirname + "/src/room1.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})
app.get('/single-room.html', function (req, res) {
    fs.readFile(__dirname + "/src/single-room.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})
app.get('/room2.html', function (req, res) {
    fs.readFile(__dirname + "/src/room2.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})


app.get('/booking.html', function (req, res) {
    fs.readFile(__dirname + "/src/booking.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})
app.get('/contact.html', function (req, res) {
    fs.readFile(__dirname + "/src/contact.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})
app.get('/offers.html', function (req, res) {
    fs.readFile(__dirname + "/src/offers.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})
app.get('/family-fun.html', function (req, res) {
    fs.readFile(__dirname + "/src/family-fun.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})


app.get('/home3', function (req, res) {
    fs.readFile(__dirname + "/src/index-3.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})

app.get('/booking', function (req, res) {
    fs.readFile(__dirname + "/src/booking.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})


app.get('/*.html', function (req, res) {
    fs.readFile(__dirname + "/src/index.html", function (err, html) {
        if (err) throw err;
        res.end(html);
    });
})

app.listen(3000, function () {
    console.log("server start port 3000");
})