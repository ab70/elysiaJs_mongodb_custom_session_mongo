import Session from "../../models/Session";
import UserSchema from "../../models/User"
function auth_Controller() {
    return {
        //Signup
        async SignUp(context) {
            try {
                const user = new UserSchema(context.body)
                const saveUser = await user.save()
                if (saveUser) {
                    context.set.status = 200;
                    return { success: true, message: "User saved successfully" }
                } else {
                    context.set.status = 400;
                    return { success: false, message: "User not saved" }
                }
            } catch (err) {
                context.set.status = 500;
                return { success: false, message: err.message }
            }
        },

        // SignIn
        async SignIn({ body, jwt, set, setCookie }) {
            try {

                const reqBody = body;
                const user = await UserSchema.findOne({ email: reqBody.email })
                console.log("User: " + user);
                if (user) {
                    const session = new Session({
                        user_Id: user?._id,
                        data: "session_Data"
                    })
                    const saveSession = await session.save()
                    setCookie("sessionId", await jwt.sign({ session_Id: saveSession?._id }), {
                        httpOnly: true,
                        maxAge: 7 * 86400
                    })
                    set.status = 200;
                    return { success: true, message: "User signed in successfully", data: user }
                } else {
                    set.status = 400;
                    return { success: false, message: "User signed in failed" }
                }

            } catch (err) {
                set.status = 500;
                return { success: false, message: err.message }
            }
        }
    }
}

export { auth_Controller }