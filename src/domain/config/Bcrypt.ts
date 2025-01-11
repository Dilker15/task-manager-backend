import bcrypt from 'bcrypt'


export class Bcrypt{


    static hashPassword(password:string):string{
        const hash = bcrypt.hashSync(password,12);
        return hash;
    }


    static async verifyPassword(currentPassword:string,hashPassword:string):Promise<boolean>{
        const match =await bcrypt.compare(currentPassword,hashPassword);
        return match;
    }
}