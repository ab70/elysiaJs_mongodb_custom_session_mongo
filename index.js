import { Elysia } from "elysia";
import initialRoutes from "./routes/api";
import mongoose from "mongoose";
import { cookie } from '@elysiajs/cookie'
import { jwt } from "@elysiajs/jwt";

const app = new Elysia()
const connection = mongoose
  .connect(process.env.Mongoose_connect)
  .then((response) => {
    console.log('MongoDb connected');
  });


app.use(
  jwt({
    name: 'jwt',
    secret: 'Fischl-von-Luftschloss-Narfidort'
  })
)
app.use(cookie())


initialRoutes(app)
app.listen(3000);
// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );
/* Connecting to the mongodb database. */
