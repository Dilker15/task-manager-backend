import { Request,Response } from "express"
import { UseCaseCreateTask } from "../../domain/uses-cases/tasks/useCase-createTask";
import { TaskRepository } from "../../infraestructure/Repositories/TaskRepository";
import { UseCaseUpdateTask } from "../../domain/uses-cases/tasks/useCase-updateTask";
import { TaskEntity } from "../../domain/entities/TaskEntity";
import { UseCaseGetTasks } from "../../domain/uses-cases/tasks/useCase-getTasks";


export class TaskController{

// for injections
    private readonly createUseCase:UseCaseCreateTask;
    private readonly updateUseCase:UseCaseUpdateTask;
    private readonly getTaskUseCase:UseCaseGetTasks;
    constructor(){
        this.createUseCase=new UseCaseCreateTask();
        this.updateUseCase=new UseCaseUpdateTask();
        this.getTaskUseCase=new UseCaseGetTasks();

    }


    getTasks =async(req:Request,res:Response)=>{
        const token:string=req.params.token;
        try{
            const tasks = await this.getTaskUseCase.execute(req.body,token);
            res.json({
                "result":true,
                "message":"ok",
                "data":tasks,
            });
        }catch(error){
            console.log(error);
            res.status(400).json({
                "result":false,
                "message":error,
                "data":{},
            })
        }
    }

    createTask = async(req:Request,res:Response)=>{
       try{
         const task = await this.createUseCase.execute(req.body);
         res.status(200).json({
            result:true,
            "data":task,
            "message":"task created",
         });
       }catch(error){
        console.log(error);
        res.json({
            "result":false,
            "data":{},
            "message":error,
        })
       }
    }


    updateTask = async(req:Request,res:Response)=>{
        const id_task = req.params.id;
       try{ 
        const data = await this.updateUseCase.execute(req.body,id_task);
        res.status(200).json({
            "result":true,
            "message":"ok",
            "data":data
        });

       }catch(error){
        console.log(error);
         res.status(400).json({
            "result":false,
            "message":"bad request",
            "data":{},
         })
       }
    }


}