const { default: mongoose } = require("mongoose");
const { default: Session } = require("../models/Session");

function userController() {
    return {
        //userController
        userTestController({ set }) {
            const bard = {
                name: "Bard",
                age: 2,
                species: "large language model",
                created_at: new Date("2023-07-20T09:34:14+06:00"),
                updated_at: new Date("2023-07-20T09:34:14+06:00"),
                knowledge: [
                    {
                        id: 1,
                        subject: "math",
                        content: "2 + 2 = 4"
                    },
                    {
                        id: 2,
                        subject: "science",
                        content: "The earth is round"
                    },
                    {
                        id: 3,
                        subject: "history",
                        content: "The French Revolution was a major turning point in world history"
                    }
                ],
                skills: ["writing", "translation", "coding", "data analysis"]
            };
            return { success: true, message: "Fetched.", data: bard }
        },
        //Get user details
        async userDetails({ jwt, set, cookie: { sessionId } }) {
            try {
                const sessionInfo = await jwt.verify(sessionId)
                // console.log("sessionInfo", sessionInfo);
                if(sessionInfo){
                    const sessionData = await Session.findById(new mongoose.Schema.Types.ObjectId(sessionInfo?.session_Id))

                }
                
                set.status = 200;
                return { success: true, message: "Done", data: sessionInfo }

            } catch (err) {
                set.status = 500;
                return { success: false, message: err.message }
            }
        }
    }
}

module.exports = userController