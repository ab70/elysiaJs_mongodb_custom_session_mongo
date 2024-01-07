import { auth_Controller } from '../../app/controllers/auth_Controllers/auth_Controller';

// Define the routes for each controller method

// /auth route group methods
const authRoute = (app) => {
    app.group("/auth", (app) =>
        app
            .post("/signup", auth_Controller().SignUp)
            .post("/signin", auth_Controller().SignIn)
    )
}

// Export the router
export default authRoute;