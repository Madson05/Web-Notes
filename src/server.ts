import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";


const port = 3000;
const app = express();

const currentPath = url.fileURLToPath(import.meta.url);
const dirPublic = path.join(currentPath, "../../public");
app.use(express.static(dirPublic));

const serverHttp = http.createServer(app);

serverHttp.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const io = new Server(serverHttp)

export default io;