import { TaskRepository } from "../../../infraestructure/Repositories/TaskRepository";
import { UserRepository } from "../../../infraestructure/Repositories/UserRepository";
import { TaskCreateDto } from "../../dtos/tasks/createTaskDto";
import { TaskEntity } from "../../entities/TaskEntity";
import { TaskCreateValidate } from "../../services/tasks/TaskCreate";




export class UseCaseCreateTask{
    private readonly taskRepo:TaskRepository;
    constructor(){
        this.taskRepo=new TaskRepository();
    }

    async execute(data:{[key:string]:any}):Promise<TaskEntity>{
        TaskCreateValidate.validate(data);
        const dto:TaskCreateDto =TaskCreateDto.createDto(data);
        const task:TaskEntity = await this.taskRepo.createTask(dto); 
        return task;
        
    }
}
