import { Application, Express, Request, Response } from "express";
import * as express from "express";

const server = express();
server.use(express.static("static/"))

server.get("/", (req: Request, res: Response) => {
    res.sendFile("static/index.html");
});

server.listen(8080);
console.log("Server listening on port 8080!");
