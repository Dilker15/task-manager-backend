



# STEPS TO RUN TODO-LIST APP

1. npm install
2. create a postgres dataBase. Tables : users,tasks,status
3. put url connection in .env.example , jtw_seed and port,
4. execute: npx prisma db pull 
5. execute: npx prisma generate


# HOW USE.
0. npm run dev
1. register an user                     : localhost:port/api/auth/register 
2. loging with email,password           : localhost:port/api/auth/login           this method will give you a JWToken: claims: user_id
4. create task with user_token on url
5. getTask with user_token
....
