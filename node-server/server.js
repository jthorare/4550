import express from 'express';
import cors from "cors";
import helloController from './controllers/hello-controller.js';
import userController from './controllers/user-controller.js';
import tuitsController from './controllers/tuits-controller.js';
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://whiskey:wetdog12@cluster0.0om9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const app = express();
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 3000);