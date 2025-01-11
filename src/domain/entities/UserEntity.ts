


export class UserEntity{


    public id:string;
    public name:string;
    public email:string;
    public password:string;
    public state:boolean;
    public email_verified:boolean;


    constructor(id:string,name:string,email:string,password:string,state:boolean=false,email_verified:boolean=false){
        this.id=id;
        this.email=email;
        this.name=name;
        this.password=password;
        this.state=state;
        this.email_verified=email_verified;
    }
    

    getId():string{
        return this.id;
    }

    getName():string{
        return this.name;
    }


    getState():boolean{
        return this.state;
    }

    getEmailVerified():boolean{
        return this.email_verified;
    }


    getEmail():string{
        return this.email;
    }

    getPassword():string{
        return this.password;
    }

    setId(id: string): void {
        this.id = id;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    setState(state: boolean): void {
        this.state = state;
    }
    
    setEmailVerified(email_verified: boolean): void {
        this.email_verified = email_verified;
    }
    
    setEmail(email: string): void {
        this.email = email;
    }
    
    setPassword(password: string): void {
        this.password = password;
    }

    static userEntityFromObject(data:{[key:string]:any}):UserEntity{
        return new UserEntity(data.id,data.name,data.email,data.password,data.state,data.email_verified);
    }





}


