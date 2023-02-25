import express from "express";
import { app } from "./app/modules/infra/http/app";


const server = express();
server.use(app)