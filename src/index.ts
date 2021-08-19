import express from  "express";
import routes from "./routing";

const app = express();

const port = 3000;

app.listen(port,() => {
    console.log(`Listening to port: ${port}`);
});
//must be before app.use(routes);
app.use(express.json());
app.use(routes);
