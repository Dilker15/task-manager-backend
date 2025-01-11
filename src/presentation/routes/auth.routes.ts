

import { Router,Request,Response } from "express";
import { TaskController } from "../controllers/tasks.controller";
import { UserController } from "../controllers/users.controller";
import { AuthController } from "../controllers/auth.controller";


export class AuthRoutes{
    
    static startAuthRoutes():Router{
        const router = Router();
        const controllerAuth = new AuthController();

        router.post('/register',controllerAuth.register);
        router.post('/login',controllerAuth.login);
        router.get('/email-verification/:token',controllerAuth.emailVerification);

        return router;
    }
}