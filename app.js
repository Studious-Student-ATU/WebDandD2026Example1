// Load Express
const express = require('express');
// Load Handlebars
const exphbs = require('express-handlebars');

// Create the Express application
const app = express();

// Tell Express to use Handlebars for .hbs files
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'default',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', 'views');

// Make files in the public folder available to the website
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
    res.render('index', {
        state: { home: true },
        head: { title: 'Forge Fitness - Home' }
    });
});

// Muscle growth page
app.get('/hypertrophy', (req, res) => {
    res.render('hypertrophy', {
        state: { hypertrophy: true },
        head: { title: 'Forge Fitness - Muscle Growth' }
    });
});

// Recovery page
app.get('/recovery', (req, res) => {
    res.render('recovery', {
        state: { recovery: true },
        head: { title: 'Forge Fitness - Recovery' }
    });
});

// Contact page
app.get('/contact', (req, res) => {
    res.render('contact', {
        state: { contact: true },
        head: { title: 'Forge Fitness - Contact' }
    });
});

// Sources page
app.get('/validation', (req, res) => {
    res.render('validation', {
        state: { validation: true },
        head: { title: 'Forge Fitness - Sources' }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Forge Fitness is running on http://localhost:3000');
});