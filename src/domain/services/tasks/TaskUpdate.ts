



export class TaskUpdate{


    static validate(body:{[key:string]:any}):void{
        if(!body.title || body.title.length<=2)throw new Error('title is missing or too short');
        if(!body.description || body.description.length<=2) throw new Error('Description is missing or to short');
        if(!body.date_event || !(new Date(body.date_event) instanceof Date)) throw new Error('Date Event is not valid');
        if(!body.status_type)throw new Error('Status is required');
    }

}