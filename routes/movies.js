import express from "express";
import {auth} from "../middleware/auth.js";

import {createconnection,getUsers,getUsersById,createUsers,updateUserById,deleteUsers,deleteUserByID,createMovies,
    getMovies
} from "../helper.js";

const router = express.Router()

router.get("/",async (request,response)=>{
    const client = await createconnection();
    const users = await getMovies(client);
    response.send(users);
});

// router.get("/:id", auth , async(request,response)=>{
//     const { id } = request.params;
//     const client = await createconnection();
//     const user = await getUsersById(client, id);
//     response.send(user);
// });

router.post("/",async (request,response)=>{
    const client = await createconnection();
    const addMovies = request.body;
    const result = await createMovies(client, addMovies);
    response.send(result);
});

// router.patch("/:id", auth ,async(request,response)=>{
//     const { id } = request.params;
//     const client = await createconnection();
//     const newData=request.body;
//     const user = await updateUserById(client, id, newData);
//     response.send(user);
    
// });

// router.delete("/", auth ,async (request,response)=>{
//     const client = await createconnection();
//     const users = await deleteUsers(client);
//     response.send(users);
// });

// router.delete("/users/:id", auth ,async(request,response)=>{
//     const { id } = request.params;
//     const client = await createconnection();
//     const user = await deleteUserByID(client, id);
//     response.send(user);
// });

export const moviesRouter = router;