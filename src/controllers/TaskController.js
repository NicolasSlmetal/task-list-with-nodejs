
const Task = require('../models/Task');


module.exports = class TaskController {

    static async findAll(req, res) {
        const tasks = await Task.findAll({raw: true, order: [['done', 'DESC']]});
        res.render("all", {pageName: "Todas as tarefas", tasks})
    }

    static async setTaskDone(req, res) {

        const id = req.params.id;
        const task = await Task.findOne({raw: true, where: {id: id}})
        task.done = !task.done;

        await Task.update(task, {where: {id: id}})
        res.redirect("/")
    }

    static renderCreateForm(req, res) {
        res.render('create', {pageName: "Inserir tarefa"});
    }

    static async create(req, res) {
        const task =
            {
                title:req.body.title,
                description:req.body.description,
                done: false
            };
        await Task.create(task)
        res.redirect("/")
    }

    static async findToUpdate(req, res) {
        const id = req.params.id;

        const task = await Task.findOne({raw: true, where: {id: id}})
        res.render("edit", {pageName: "Editar tarefa", task})
    }

    static async update(req, res) {
        const id = req.body.id
        const task = {
            title: req.body.title,
            description: req.body.description,
        };
        await Task.update(task, {where: {id:id}})

        res.redirect("/")

    }

    static async delete(req, res) {
        const id = req.body.id
        await Task.destroy({where: {id: id}})

        res.redirect("/")
    }

}