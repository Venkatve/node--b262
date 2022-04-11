import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {createconnection,createManagers,getManagers,genPassword} from "../helper.js";

const router = express.Router();

router.get("/",async (request,response)=>{
    // const { color , age: ageGt } = request.query;
    const client = await createconnection();
    const managers = await getManagers(client);
    response.send(managers);
    console.log(managers);

});

router.post("/signup",async (request,response)=>{
    const client = await createconnection();
    const {username,password} = request.body;
    const hashedPassword =await genPassword(password);
    const result = await createManagers(client, username, hashedPassword);
    response.send(result); 
});

router.post("/login",async (request,response)=>{
    const client = await createconnection();
    const {username,password} = request.body;
    
    const result = await client.db("users").collection("managers").findOne({username : username});

    const storedDbPassword = result.password;
    const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);   

    if(isPasswordMatch){
        const token = jwt.sign({id : result._id},process.env.SECRET_KEY)
        response.send({message : "successful login" ,token : token})
    }else{
        response.send({message : "invalid login"})
    }
     
});

export const managerRouter = router;