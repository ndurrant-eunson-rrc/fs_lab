import "dotenv/config";
import cors from "cors";
import corsOptions from "../config/cors";
import express, { Express } from "express";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import roleRoutes from "./api/v1/routes/roleRoutes";

const app: Express = express();

app.use(cors(corsOptions));

app.use(express.json());
 
// Routes
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/roles", roleRoutes);
 
export default app;
