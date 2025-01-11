import { Router,Request,Response } from "express";
import { TaskController } from "../controllers/tasks.controller";
import { UserController } from "../controllers/users.controller";


export class UserRoutes{
    
    static startUserRoutes():Router{
        const router = Router();
        const controllerUser = new UserController();

        router.get('/:id',controllerUser.getUserById);
        router.put("/:id",controllerUser.updateUser);
        router.delete('/:id',controllerUser.deleteUser);
        
        return router;
    }
}