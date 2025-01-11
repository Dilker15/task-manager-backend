





export class ValidateCreateUser{



    static validate(body:any):void{
        if(!body.email || !body.email.includes('@')){
            throw new Error('Email is not correct');
        }
        if(!body.name || body.name.length<=3){
            throw new Error('Name is too short or not exist');
        }
        if(!body.password || body.password.length<=8){
            throw new Error("Password is required or is too short ,it must be at least 8 characters");
        } 
    }
}