import mongoose from "mongoose";
import Session from "../models/Session"
import UserSchema from "../models/User";

const auth_Middleware = async ({ set, jwt, cookie: { sessionId } }) => {
    try {
        console.log("Middleware dalled");
        const sessionInfo = await jwt.verify(sessionId)
        // console.log("sessionInfo", sessionInfo);
        if (sessionInfo) {
            // new mongoose.Types.ObjectId
            const sessionData = await Session.findById(sessionInfo?.session_Id)
            if (!sessionData) {
                set.status = 401;
                return { success: false, message: "Session Auth failed" }
            } else {
                const userInfo = await UserSchema.findById(sessionData?.user_Id)
                if (userInfo) {
                    console.log("user found", userInfo);
                    set.userInfo = userInfo

                } else {
                    set.status = 401;
                    return { success: false, message: "Session Auth failed" }
                }

            }
        }
    } catch (err) {
        console.log(err);
        set.status = 200;
        return { success: false, message: err.message }
    }
}

export default auth_Middleware