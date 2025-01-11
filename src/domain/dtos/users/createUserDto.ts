




export class CreateUserDto{

    private email:string;
    private password:string;
    private name:string;

    constructor(name:string,email:string,password:string){
        this.email=email;
        this.password=password;
        this.name=name
    }



    static createDto(body:any):CreateUserDto{
        
        return new CreateUserDto(body.name,body.email,body.password);
    }


    getEmail():string{
        return this.email;
    }

    getName():string{
        return this.name;
    }

    getPassword():string{
        return this.password;
    }

    
    setPassword(password:string):void{
        this.password=password;
    }


    
}