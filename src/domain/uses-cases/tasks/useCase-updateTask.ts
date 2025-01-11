import { TaskRepository } from "../../../infraestructure/Repositories/TaskRepository";
import { TaskUpdateDto } from "../../dtos/tasks/updateTaskDto";
import { TaskEntity } from "../../entities/TaskEntity";
import { TaskUpdate } from "../../services/tasks/TaskUpdate";





export class UseCaseUpdateTask{

    private readonly taskRepo:TaskRepository;
    constructor(){
        this.taskRepo=new TaskRepository();
    }


    async execute(data:{[key:string]:any},id_task:string):Promise<TaskEntity>{
        TaskUpdate.validate(data);
        const dto:TaskUpdateDto=TaskUpdateDto.updateDto(data);
        const taskUpdated:TaskEntity=await this.taskRepo.updateTask(dto,id_task);
        return taskUpdated;
    }

}