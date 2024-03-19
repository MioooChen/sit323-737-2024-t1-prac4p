const express = require('express');
const app = express();

app.use(express.json()); // Used to parse JSON request body

// Addtion endpoint
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input numbers' });
    }
    const result = num1 + num2;
    res.json({ result });
});

// Subtraction endpoint
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input numbers' });
    }
    const result = num1 - num2;
    res.json({ result });
});

// Multiplication endpoint
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input numbers' });
    }
    const result = num1 * num2;
    res.json({ result });
});

// Division endpoint
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input numbers' });
    }
    if (num2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = num1 / num2;
    res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
