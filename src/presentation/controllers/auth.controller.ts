import { Request,response,Response } from "express"
import { ValidateCreateUser } from "../../domain/services/auth/ValidateCreateUser";
import { UserRepository } from "../../infraestructure/Repositories/UserRepository";
import { CreateUserDto } from "../../domain/dtos/users/createUserDto";
import { UserEntity } from "../../domain/entities/UserEntity";
import { Bcrypt } from "../../domain/config/Bcrypt";
import { LoginValidate } from "../../domain/services/auth/LoginValidate";
import { LoginDto } from "../../domain/dtos/Auth/LoginDto";
import { Jwtoken } from "../../domain/config/JwtApdapter";


export class AuthController{

    readonly UserRepo:UserRepository

    constructor(){
        this.UserRepo=new UserRepository();
    }


    login = async(req:Request,res:Response)=>{
       try{
        LoginValidate.validate(req.body);
        const dto:LoginDto=LoginDto.loginCreateDto(req.body);
        const user:UserEntity=await this.UserRepo.login(dto);
        const match:boolean = await Bcrypt.verifyPassword(dto.getPassword(),user.getPassword());
         if(!match){
            throw new Error('Passwor or email is Wrong');
         }
        const token = Jwtoken.generateToken(user.getId());
        const {password,...userFound} = user
        res.status(200).json({
            "result":true,
            data:userFound,
            token,
        })
       }catch(error){
        //console.log(error);
        res.status(400).json({
            "result":false,
            "message":error,
            "data":[],
        })

       }
    }


    register = async(req:Request,res:Response)=>{
        try{
            ValidateCreateUser.validate(req.body);
            const dto:CreateUserDto=CreateUserDto.createDto(req.body);
            const hashedPass = Bcrypt.hashPassword(dto.getPassword());  
            dto.setPassword(hashedPass);
            const user :UserEntity = await this.UserRepo.createUser(dto);
            res.json({
                response:true,
                data:user});
        }catch(error){
            res.status(400).json({
                "response":"false",
                "message":error,
                "data":{},
            });
        }
      
    }


    emailVerification = (req:Request,res:Response)=>{
        //const token:string = req.params.token;      // it must be a token to verify the email
        res.status(200).json({
            "message":"Email Verification",
            "data":"updated"
        });
    }

}