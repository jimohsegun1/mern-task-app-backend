const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const { createTask, getTasks, getTask, deleteTask, updateTask, updateTaskPatch } = require("../controllers/taskControllers");

// router.route("/").get(getTasks).post(createTask)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask).patch(updateTaskPatch);
//The above route is also the same as thw one below

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.patch("/:id", updateTaskPatch);


module.exports = router;
