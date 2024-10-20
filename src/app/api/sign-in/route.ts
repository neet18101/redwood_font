// creating sign in route

import executeQuery from "../../../utils/executeQuery.js";
import bcrypt from "bcrypt";

export async function POST(request: Request) {


    try {
        const { email, password } = await request.json();
        const existingUser = await executeQuery(
            "SELECT * FROM admin WHERE email = ?",
            [email]
        );
        console.log(password);
        const hashedPassword = existingUser[0].password;
        if (existingUser?.length === 0) {
            return new Response(JSON.stringify({ success: false, message: "User not found" }),
                {
                    status: 400,
                }
            );
        }
        const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
        if (isPasswordCorrect) {
            return Response.json({ success: true, message: "User logged in successfully", data: { username: existingUser[0].username, email: existingUser[0].email } }, { status: 200 });
        }
        else {
            return new Response(JSON.stringify({ success: false, message: "Wrong password" }),
                {
                    status: 400,
                }
            );
        }
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ success: false }),
            {
                status: 500,
            }
        );
    }
}
