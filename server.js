// Устанавливаем Express
const express = require("express");
const path = require("path");

const pool = require("./db"); // Импорт модуля с БД

const app = express();
const PORT = process.env.PORT || 3000;

// Отдаём статические файлы (HTML, CSS, JS)
app.use(express.static("public"));

// Обрабатываем корневой маршрут
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW();");
        res.json({ message: "База данных работает!", time: result.rows[0].now });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});