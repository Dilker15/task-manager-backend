import { StatusEntity } from "./StatusEntity";



export class TaskEntity{

    public id:string;
    public title:string;
    public description:string;
    public date_event:Date;
    public created_on:Date;
    public updated_on:Date;
    public type:number;
    public status:StatusEntity;


    constructor(id:string,title:string,description:string,date_event:Date,created_on:Date,update_on:Date,status:StatusEntity,type:number){
        this.id=id;
        this.title=title;
        this.description=description;
        this.date_event=date_event;
        this.created_on=created_on;
        this.updated_on=update_on;
        this.status=status;
        this.type=type;
    }


    static fromObjectToTaskEntity(data:{[key:string]:any}):TaskEntity{
        return new TaskEntity(data.id,data.title,data.description,data.date_event,data.created_on,data.updated_on,data.status,data.type);
    }


    
}