import { config } from "dotenv";
import Server from "./server/index.js";

config();

const server = new Server();
