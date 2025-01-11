


export class StatusEntity{

    public id:string;
    public name:string;

    constructor(id:string,name:string){
        this.id=id;
        this.name=name;
    }

    static fromObjectoToStatusEntity(data:{[key:string]:any}):StatusEntity{
        return new StatusEntity(data.id,data.name);
    }
}