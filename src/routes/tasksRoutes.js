const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get("/add", TaskController.renderCreateForm)
router.post("/add", TaskController.create)
router.get("/all", TaskController.findAll)
router.post("/remove", TaskController.delete)
router.get("/done/:id", TaskController.setTaskDone)
router.post("/update", TaskController.update)
router.get("/update/:id", TaskController.findToUpdate)



module.exports = router;