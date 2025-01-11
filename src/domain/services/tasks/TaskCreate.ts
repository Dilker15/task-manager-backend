



 export class TaskCreateValidate{

    static async validate(body:{[key:string]:string}){
        if(!body.title) throw new Error('Title is missing');
        if(!body.description) throw new Error('Description is missing');
        if(!body.event_date || !(new Date(body.event_date) instanceof Date)) throw new Error('invalid Event Date');
        if(!body.status_id) throw new Error('status is missing');
        if(!body.user_id) throw new Error('user is required');

    }
 }