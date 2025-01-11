import { TaskCreateDto } from "../dtos/tasks/createTaskDto";
import { TaskUpdateDto } from "../dtos/tasks/updateTaskDto";
import { TaskEntity } from "../entities/TaskEntity";




export abstract class TaskDataSource{

    abstract createTask(dto:TaskCreateDto):Promise<TaskEntity>;
    abstract updateTask(dto:TaskUpdateDto,id_task:string):Promise<TaskEntity>;
    abstract getTasks(user_id:string):Promise<TaskEntity[]>;
    abstract getTaskById(user_id:string,task_id:string):Promise<TaskEntity>;



}