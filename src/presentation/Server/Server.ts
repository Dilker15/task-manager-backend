import express,{Application, urlencoded} from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import { AppRoutes } from '../AppRoutes';
import { PostgresConnection } from '../../infraestructure/connection/postgresConnection';
dotenv.config();



export class Server{

    private app:Application;
    private port:number;


    constructor(){
        let nm = process.env.PORT;
        this.app = express();
        if(!nm){
            throw new Error("Port is not define");
        }
        this.port =parseInt(nm)||4000;
        this.startMiddlewares();
        this.startRoutes();
        this.startConnections();
       
    }


    startMiddlewares(){
        this.app.use(express.json());
        this.app.use(urlencoded({extended:true}));
        this.app.use(cors());
    }


    startRoutes(){
        this.app.use(AppRoutes.startAppRoutes());
    }

    async startConnections(){
        try{
            await PostgresConnection.starConnection();
            this.startServer();
        }catch(error){
            console.log(error);
        }
       
    }

    startServer(){
        this.app.listen(this.port,()=>{
            console.log('Server Listening on Post :',this.port);
        })
    }



}