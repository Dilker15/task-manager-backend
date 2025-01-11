
export class TaskUpdateDto{

    public title:string;
    public description:string;
    public event_date:string;
    public status_type:number;
    public id_task:string;
    

    constructor(id_task:string,title:string,description:string,event_date:string,status_type:number){
        this.title=title;
        this.description=description;
        this.event_date=event_date;
        this.status_type=status_type;
        this.id_task=id_task;
    }



    static updateDto(body:{[key:string]:any}):TaskUpdateDto{
        return new TaskUpdateDto(body.id_task,body.title,body.deleteUser,body.event_date,body.status_type);
    }



}