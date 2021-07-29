import {Server} from "./server/Server";
import {config} from "dotenv";
import {Sandbox} from "./server/sandbox/Sandbox";

config();
Sandbox.SandboxTest();
new Server();