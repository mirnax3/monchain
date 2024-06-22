import express, { Express, Request, Response } from "express";
import mint from "./routes/mint";

const app: Express = express();
const port = 3001;

app.use(express.json());
app.use(mint);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
