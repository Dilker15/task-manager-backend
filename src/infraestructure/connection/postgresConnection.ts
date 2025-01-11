import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime/library";




export class PostgresConnection{


    static async starConnection():Promise<void>{
        const prisma = new PrismaClient();
        await prisma.$connect();
        console.log("Postgres Connection succes");
    }

}

