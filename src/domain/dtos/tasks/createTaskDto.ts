

export class TaskCreateDto{

    public title:string;
    public description:string;
    public date_event:Date;
    public status_id:string;
    public user_id:string;

    constructor(title:string,description:string,event_date:Date,status_id:string,user_id:string){
        this.title=title;
        this.description=description;
        this.date_event=event_date;
        this.status_id=status_id;
        this.user_id=user_id;
    }



    static createDto(body:{[key:string]:any}):TaskCreateDto{
        return new TaskCreateDto(body.title,body.description,body.event_date,body.status_id,body.user_id);
    }



}