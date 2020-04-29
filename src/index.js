import cors from "cors";
import express from "express";
import connect from "./database";
import compression from "compression";
import helmet from "helmet";
import { routes as mylinks } from "./links";
require("dotenv").config();

const app = express();

// Application Level Middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/link", mylinks);

// Database Connection with host
connect()
  .then(async () =>
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`)
    )
  )
  .catch(error => {
    console.log(`Error is found ${error}`);
  });
