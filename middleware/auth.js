import jwt from "jsonwebtoken";

export const auth = (request,response,next)=>{
   try{
    const token = request.header("x-auth-token");
    jwt.verify(token,process.env.SECRET_KEY);
    console.log(token);
    next();
   } catch(err){
       response.status(401);
       response.send({error : err.message})

   }
    
}