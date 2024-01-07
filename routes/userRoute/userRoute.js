import userController from '../../app/controllers/userController';
import auth_Middleware from "../../app/middlewares/auth_Middleware"
// Define the routes for each controller method

// GET /user - get all users 
const userRoute = (app) => {
    app.group("/user", (app) =>
        app
            .get("/a", userController().userTestController)
            .get("/profile", userController().userDetails, { beforeHandle: auth_Middleware })
    )
}

// Export the router
export default userRoute;
