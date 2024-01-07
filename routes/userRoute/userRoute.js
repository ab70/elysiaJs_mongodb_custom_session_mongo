// userRoute.js
// This file defines the routes for the user resource

// import { Elysia } from 'elysia';
// const app = Elysia;

import userController from '../../app/controllers/userController';

// Define the routes for each controller method

// GET /user - get all users 
const userRoute = (app) => {
    app.group("/user", (app) =>
        app
            .get("/a", userController().userTestController)
            .get("/profile", userController().userDetails)
    )
}

// Export the router
export default userRoute;
