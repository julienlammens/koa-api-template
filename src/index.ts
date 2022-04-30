import app from "./server";

process.env.TZ = "UTC";

require("dotenv").config();
require("dotenv-defaults").config();

const port = process.env.port || 3000;
console.info(`Listening to port ${port}`);
app.listen(port);
