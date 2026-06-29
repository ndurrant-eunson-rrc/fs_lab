import express, { Express } from "express";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import roleRoutes from "./api/v1/routes/roleRoutes";

const app: Express = express();
 
app.use(express.json());
 
// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/roles", roleRoutes);
 
export default app;
