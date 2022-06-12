import express from "express";
import cors from "cors";
import usersRoutes from "../routes/users.js";

class Server {
  constructor() {
    this.app = express();
    this.paths = {
      users: "/api/users",
    };

    this.middlewares();
    this.listenPort();
    this.router();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  router() {
    this.app.use(this.paths.users, usersRoutes);
  }

  listenPort() {
    this.app.listen(process.env.PORT, () => {
      console.log(`🌎 the server is running on port: ${process.env.PORT}`);
    });
  }
}

export default Server;
