import express from "express";
import { json } from "body-parser";
import { RegisterRoutes } from "./router/routes";

export const app = express();

app.use(json());


RegisterRoutes(app);