



export class UpdateUserDto{

    private name:string;
    private email:string;
    private password:string;

    constructor(name:string,email:string,password:string){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    static UpdateUserD(data:{[key:string]:any}):UpdateUserDto{
        return new UpdateUserDto(data.name,data.email,data.password);
    }

    getName():string{
        return this.name;
    }

    getEmail():string{
        return this.email;
    }

    getPassword():string{
        return this.password;
    }

    
}