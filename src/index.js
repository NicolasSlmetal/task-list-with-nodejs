const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');
const Task = require('./models/Task');
const taskRoutes = require('./routes/tasksRoutes');
const path = require('path');
const staticPath = path.join(__dirname, '/public');


app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set('views', 'src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(express.static(staticPath))
app.use("/tasks",taskRoutes)

app.get("/", async (req, res) => {
    res.redirect("/tasks/all")
})

conn.sync().then(() => {
    app.listen(3000);
}).catch(err => console.log(err));