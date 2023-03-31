const express = require("express");
const router = require("./router/index");
const cors = require("cors");

const PORT = 5050;

const startHttpServer = async () => {
    try {
        const app = express();

        app.use(express.json());
        app.use(
            cors({
                origin: "*",
            })
        );
        app.use(router);

        app.listen(PORT, () => console.log(`CHAT SERVICE STARTED AT PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

startHttpServer();
