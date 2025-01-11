import { TaskRepository } from "../../../infraestructure/Repositories/TaskRepository";
import { Jwtoken } from "../../config/JwtApdapter";
import { TaskEntity } from "../../entities/TaskEntity";




export class UseCaseGetTasks{

    private readonly taskRepo:TaskRepository;
    constructor(){
        this.taskRepo=new TaskRepository();
    }


    async execute(body:{[key:string]:any},token:string):Promise<TaskEntity[]>{
        const payload = Jwtoken.decodeToken(token);
        const tasks:TaskEntity[]=await this.taskRepo.getTasks(payload.user_id);
        return tasks;
    }


}
