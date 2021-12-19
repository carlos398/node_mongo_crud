import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderEditTask,
  editTask,
  deleteTask,
  toogleTask,
} from "../controllers/task.controller";

const router = Router();

// save and show tasks routes

router.get("/", renderTasks);

router.post("/task/add", createTask);

// Edit task routes

router.get("/task/:id/edit", renderEditTask);

router.post("/task/:id/edit", editTask);

// delete route

router.get("/task/:id/delete", deleteTask);

// update route

router.get("/task/:id/toggleDone", toogleTask);

export default router;
