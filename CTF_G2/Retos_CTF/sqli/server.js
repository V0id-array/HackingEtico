const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Database connection
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error("Database connection error: " + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log('Request body:', req.body);
    next();
});

app.get('/article', (req, res) => {
    let id = req.query.id;
    let query = `SELECT * FROM articles WHERE id = ${id}`;

    db.all(query, [], (err, results) => {
        if (err) {
            console.error(err.message);
            res.json({ error: err.message, query: query });
        } else {
            res.json({ results: results, query: query });
        }
    });
});

app.use(express.json()); // Middleware to parse JSON bodies

const flags = {
    question1: "flag{kn0w_your_pr3y}",
    question2: "flag{Sc4nn1ng_Th3_H0r1z0n}",
    question3: "flag{t3_3nc0ntr3}",
    question4: "flag{DB_0v3rl0rd}"
};

app.post('/submitAnswer', (req, res) => {
    const { question, answer } = req.body;

    if (!question || !answer) {
        return res.status(400).json({ error: "Missing question or answer" });
    }

    let correctAnswer = "";
    if (question === "question1") {
        correctAnswer = "sqlite3";
    } else if (question === "question2") {
        correctAnswer = "3";
    } else if (question === "question3") {
        correctAnswer = "staff_users";
    } else if (question === "question4") {
        correctAnswer = "Bl4ck_s4bbath";
    }

    if (answer === correctAnswer) {
        const flag = flags[question];
        if (flag) {
            return res.json({ flag: flag });
        } else {
            return res.status(500).json({ error: "Flag not found for this question" });
        }
    } else {
        return res.status(400).json({ error: "Respuesta incorrecta" });
    }
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});