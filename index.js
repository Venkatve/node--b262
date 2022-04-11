// const express = require("express");
import express from "express";
import dotenv from "dotenv";

import {managerRouter} from "./routes/manager.js";
import{usersRouter} from "./routes/user.js";
import{moviesRouter} from "./routes/movies.js";
import cors from "cors";
// import{
//     getManagers,
//     createManagers,
//     createUsers,
//     deleteUsers,
//     getUsers,
//     updateUserById,
//     deleteUserByID,
//     getUsersById,
//     createMovies,
//     getMovies
// } from "./helper.js"
const app = express();
import bcrypt from "bcrypt";


dotenv.config();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
const users = [
    {
    "createdAt": "2021-10-01T00:49:47.780Z",
    "name": "Bennie Aufderhar",
    "avatar": "https://cdn.fakercloud.com/avatars/d_kobelyatsky_128.jpg",
    "age": 59,
    "color": "silver",
    "id": "5"
    },
    {
    "createdAt": "2021-09-30T14:22:51.638Z",
    "name": "Lana Witting",
    "avatar": "https://cdn.fakercloud.com/avatars/afusinatto_128.jpg",
    "age": 77,
    "color": "olive",
    "id": "6"
    },
    {
    "createdAt": "2021-09-30T18:01:06.642Z",
    "name": "Vickie Brekke",
    "avatar": "https://cdn.fakercloud.com/avatars/carlyson_128.jpg",
    "age": 80,
    "color": "tan",
    "id": "7"
    },
    {
    "createdAt": "2021-09-30T09:39:22.586Z",
    "name": "Al Runolfsdottir",
    "avatar": "https://cdn.fakercloud.com/avatars/areus_128.jpg",
    "age": 28,
    "color": "orange",
    "id": "8"
    },
    {
    "createdAt": "2021-09-30T18:22:41.955Z",
    "name": "Sam Orn",
    "avatar": "https://cdn.fakercloud.com/avatars/itolmach_128.jpg",
    "age": 49,
    "color": "indigo",
    "id": "9"
    },
    {
    "createdAt": "2021-09-30T18:30:05.224Z",
    "name": "Grace Grimes",
    "avatar": "https://cdn.fakercloud.com/avatars/smalonso_128.jpg",
    "age": 72,
    "color": "yellow",
    "id": "10"
    },
    {
    "createdAt": "2021-09-30T11:26:57.667Z",
    "name": "Cindy Reinger",
    "avatar": "https://cdn.fakercloud.com/avatars/vimarethomas_128.jpg",
    "age": 30,
    "color": "yellow",
    "id": "11"
    },
    {
    "createdAt": "2021-10-01T06:26:55.203Z",
    "name": "Beth Koelpin",
    "avatar": "https://cdn.fakercloud.com/avatars/anatolinicolae_128.jpg",
    "age": 0,
    "color": "purple",
    "id": "12"
    },
    {
    "createdAt": "2021-09-30T12:28:17.426Z",
    "name": "Doug Mayer",
    "avatar": "https://cdn.fakercloud.com/avatars/nerrsoft_128.jpg",
    "age": 25,
    "color": "cyan",
    "id": "13"
    },
    {
    "createdAt": "2021-10-01T01:09:41.654Z",
    "name": "Mrs. Garrett Becker",
    "avatar": "https://cdn.fakercloud.com/avatars/increase_128.jpg",
    "age": 20,
    "color": "yellow",
    "id": "14"
    }
    ]
app.get("/",(request,response)=>{
    response.send("welcome from local environment");
});

app.use("/managers",managerRouter);
app.use("/users",usersRouter);
app.use("/movies",moviesRouter);
app.listen(PORT, ()=> console.log("started server"))


// if(!color && !ageGt){
//     response.send(users)
// }else if(color && !ageGt){
//     response.send(users.filter((user)=>user.color === color));
// }else if(!color && ageGt){
//     response.send(users.filter((user)=>user.age >= ageGt));
// }else{
//     response.send(users.filter((user)=>user.age >= ageGt && user.color === color));
// }
