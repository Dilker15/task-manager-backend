import { PrismaClient } from "@prisma/client";
import { TaskDataSource } from "../../domain/datasources/TaskDataSource";
import { TaskCreateDto } from "../../domain/dtos/tasks/createTaskDto";
import { TaskUpdateDto } from "../../domain/dtos/tasks/updateTaskDto";
import { TaskEntity } from "../../domain/entities/TaskEntity";




export class TaskRepository extends TaskDataSource{
    
    private readonly prisma:PrismaClient;
    constructor(){
        super();
        this.prisma=new PrismaClient();
    }


    async createTask(dto: TaskCreateDto): Promise<TaskEntity> {
        const task = await this.prisma.tasks.create({
            data:{
                title:dto.title,
                description:dto.description,
                date_event:dto.date_event,
                status_id:dto.status_id,
                user_id:dto.user_id,
            }
        });
        return TaskEntity.fromObjectToTaskEntity(task);
    }

    async updateTask(dto: TaskUpdateDto,id_task:string): Promise<TaskEntity> {
        const task = await this.prisma.tasks.findFirst({
            where:{
                id:id_task
            }
        });
        const statusFound = await this.prisma.status.findFirst({
            where:{
                type:dto.status_type,
            }
        });
        
        if(!task || !statusFound){
            throw new Error('Tasks not found');
        }
        
        const updatedTask = await this.prisma.tasks.update({
            where:{
                id:id_task
            },
            data:{
                description:dto.description,
                title:dto.title,
                date_event:dto.event_date,
                updated_on:new Date(),
                status_id:statusFound.id,
            },
            include:{
                status:true,
            }
        });
        
        return TaskEntity.fromObjectToTaskEntity(updatedTask);
    }

    async getTasks(user_id: string): Promise<TaskEntity[]> {
       const tasks = await this.prisma.tasks.findMany({
        where:{
            user_id
        },
        include:{
            status:true,
        }
       });
       return tasks.map(data=>{
        return TaskEntity.fromObjectToTaskEntity(data);
       })
    }

    async getTaskById(user_id: string, task_id: string): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }




}