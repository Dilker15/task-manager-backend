



export class LoginValidate{

    static validate(body:any):void{
        if(!body.email || !body.email.includes('@')){
            throw new Error('Email is missing or incorrect');
        }
        if(!body.password){
            throw new Error('Password is missing');
        }
    }
}