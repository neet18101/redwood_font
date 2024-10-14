
import executeQuery from "../../../utils/executeQuery.js";
import connectDB from "../../../utils/connectDB.js";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    await connectDB();
    try {
        const { username, email, password } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await executeQuery(
            'SELECT * FROM admin WHERE email = ?',
            [email]
        );

        if (Array.isArray(existingUser) && existingUser.length > 0) {
            return Response.json({ success: false, message: "User already exists" }, { status: 409 });
        }
        else {
            const result = await executeQuery('INSERT INTO admin (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
            return Response.json({ success: true, message: "User created successfully" }, { status: 201 });
        }

    } catch (error) {
        console.log(error);
        return Response.json(error);

    }

}