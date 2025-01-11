


export class LoginDto{

    private email:string;
    private password:string;

    constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }

    static loginCreateDto(data:{[key:string]:any}):LoginDto{
        return new LoginDto(data.email,data.password);
    }


    getEmail():string{
        return this.email;
    }

    getPassword():string{
        return this.password;
    }

}