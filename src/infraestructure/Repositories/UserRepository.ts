import { PrismaClient } from "@prisma/client";
import { UserDataSource } from "../../domain/datasources/UserDataSource";
import { CreateUserDto } from "../../domain/dtos/users/createUserDto";
import { UpdateUserDto } from "../../domain/dtos/users/updateUserDto";
import { UserEntity } from "../../domain/entities/UserEntity";
import { LoginDto } from "../../domain/dtos/Auth/LoginDto";




export class UserRepository extends UserDataSource{

    private readonly prisma;
    constructor(){
        super();
        this.prisma =new PrismaClient();

    }   

    async createUser(data: CreateUserDto): Promise<UserEntity> {
        const user = await this.prisma.users.create({
            data:{
                name:data.getName(),
                email:data.getEmail(),
                password:data.getPassword(),

            }
        });
        return UserEntity.userEntityFromObject(user);
    }
    
    updateUser(data: UpdateUserDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    getUser(id: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }


    async login(dto:LoginDto):Promise<UserEntity>{
        const email:string=dto.getEmail();
        const user = await this.prisma.users.findFirst({
            where:{
                email,
            }
        });
        if(!user){
            throw new Error('emial not Found');
        }
        
        return UserEntity.userEntityFromObject(user);
    }

}