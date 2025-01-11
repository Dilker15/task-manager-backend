import { Request,Response } from "express"
import { UserRepository } from "../../infraestructure/Repositories/UserRepository";
import { CreateUserDto } from "../../domain/dtos/users/createUserDto";
import { UserEntity } from "../../domain/entities/UserEntity";



export class UserController{

    readonly UserRepo:UserRepository

    constructor(){
        this.UserRepo=new UserRepository();
    }


    getUserById =(req:Request,res:Response)=>{
        const {id} = req.params;
        res.status(200).json({
            "message":"user by id",
            "data":id,
        });
    }





    updateUser = (req:Request,res:Response)=>{
        res.status(200).json({
            "message":"update User",
            "data":"updated"
        });
    }


    deleteUser= (req:Request,res:Response)=>{
        res.status(200).json({
            "message":"Delete User",
            "data":"Deleted"
        });
    }

}