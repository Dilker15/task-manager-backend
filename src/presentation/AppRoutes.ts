import { Router } from "express";
import { TasksRoutes } from "./routes/task.routes";
import { UserRoutes } from "./routes/user.routes";
import { AuthRoutes } from "./routes/auth.routes";




export class AppRoutes{

    static startAppRoutes():Router{
        const router = Router();
        router.use('/api/users',UserRoutes.startUserRoutes());
        router.use('/api/tasks',TasksRoutes.startTasksRoutes());
        router.use('/api/auth',AuthRoutes.startAuthRoutes());
        return router;
    }
}