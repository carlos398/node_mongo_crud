import Task from "../models/task";

// show tasks
export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

// create tasks
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaverd = await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// edit tasks view render
export const renderEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.message);
  }
};

// put edit task
export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

// delete a task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

// change de tooglebutton 
export const toogleTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
