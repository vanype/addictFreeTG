// Устанавливаем Express
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Отдаём статические файлы (HTML, CSS, JS)
app.use(express.static("public"));

// Обрабатываем корневой маршрут
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});