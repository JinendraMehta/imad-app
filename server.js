var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'JMehta | Article #1 ',
        heading: 'Article One',
        date: 'Aug 15 2017',
        content:`<p>
                    This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
                </p>`
    },
    'article-two': {
    title: 'JMehta | Article #2 ',
    heading: 'Article One',
    date: 'Aug 15 2017',
    content:`<p>
                This is my secon article. This is my second article. This is my second article. This is my second article. This is my second article. This is my second article. This is my second article. This is my second article.
            </p>`
    },
    'article-three': {
    title: 'JMehta | Article #3 ',
    heading: 'Article ',
    date: 'Aug 15 2017',
    content:`<p>
                This is my third article. This is my third article. This is my third article. This is my third article. This is my third third. This is my third article. This is my third article. This is my third article.
            </p>`
    }
}

function createTemplate(data){
    var title =  data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmltemplate =`
    <html>
        <head>
           <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${data}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',fuction(req, res) {
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one',function(req,res){
    res.send('Article one is requested and will be served soon.');
});

app.get('/article-two',function(req,res){
    res.send('Article two is requested and will be served soon.');
});

app.get('/article-three',function(req,res){
    res.send('Article three is requested and will be served soon.');
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
