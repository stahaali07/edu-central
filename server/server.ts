import { app } from "./app";
import ConnectDB from "./utils/db";
require("dotenv").config();

// SERVER CREATION
app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
    ConnectDB();
});
