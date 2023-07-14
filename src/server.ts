import express from "express";
import url from "url";
import path from "path";


const port = 3000;
const app = express();

const currentPath = url.fileURLToPath(import.meta.url);
const dirPublic = path.join(currentPath, "../../public");
app.use(express.static(dirPublic));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
