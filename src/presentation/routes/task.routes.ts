import { Router,Request,Response } from "express";
import { TaskController } from "../controllers/tasks.controller";


export class TasksRoutes{
    
    static startTasksRoutes():Router{
        const router = Router();
        const controllerTask = new TaskController();

        router.get('/:token',controllerTask.getTasks);
        router.post('/',controllerTask.createTask);
        router.put("/:id",controllerTask.updateTask);
       // router.delete('/:id',controllerTask.deleteTask);
        //router.get('/:id',controllerTask.getTaskById);
        
        return router;
    }
}