import express from "express";
import { app } from "./modules/infra/http/app";


const server = express();
server.use(app)