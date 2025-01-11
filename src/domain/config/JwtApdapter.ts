import { Payload } from '@prisma/client/runtime/library';
import jwt, { JwtPayload } from 'jsonwebtoken';


export class Jwtoken{


    static  generateToken(user_id:string):string{
        const key = process.env.TOKEN_SEED;
        if(!key){
            throw new Error('Error on server');
        }
        const token = jwt.sign({user_id},key,{expiresIn:'1h'});
        return token;
    }


    static decodeToken(token:string):JwtPayload{
        const key = process.env.TOKEN_SEED;
        if(!key){
            throw new Error('Error on server');
        }
        const payload = jwt.verify(token,key)as JwtPayload;
        return payload;
    }

    
}