import express from "express";
import homepageController from "../controllers/homepageController";
const { isLoggedIn } = require('../middleware');

/*
init all web routes
 */

let router = express.Router();

let initAllWebRoutes = (app) =>{
    router.get("/", homepageController.getHomepage);
    router.get("/start", isLoggedIn, homepageController.getAdminPage);
    router.get("/all-users", isLoggedIn, homepageController.getAllUsersPage);
    router.get("/forgot", homepageController.getForgotPage);

    return app.use("/", router);
};

module.exports = initAllWebRoutes;
