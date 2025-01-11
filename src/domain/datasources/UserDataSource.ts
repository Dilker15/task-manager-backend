import { CreateUserDto } from "../dtos/users/createUserDto";
import { UpdateUserDto } from "../dtos/users/updateUserDto";
import { UserEntity } from "../entities/UserEntity";





export abstract class UserDataSource{

    abstract createUser(data:CreateUserDto):Promise<UserEntity>
    abstract updateUser(data:UpdateUserDto):Promise<UserEntity>
    abstract deleteUser(id:string):Promise<UserEntity>
    abstract getUser(id:string):Promise<UserEntity>;

}