import { NextResponse, NextRequest } from "next/server"
import prisma from "../../lib/prismadb";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateJWTToken } from "@/middleware/generateToken";
interface UserRequestBody {
    email: string;
    password: string;
}

export const POST = async (req: NextRequest) => {

    const body: UserRequestBody = await req.json();

    const { email, password } = body;

    // console.log(userName, password);

    if (!email || !password) {
        return NextResponse.json({ message: "Please enter all the fields", success: false }, { status: 400 });
    }
    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
        });

       
        if (!user) {
            return NextResponse.json({ success: false, "message": "User is not Present" }, { status: 500 });
        } else {
            const comparePassword = await bcrypt.compare(password, user.password);

            if (!comparePassword) {
                return NextResponse.json({ success: false, "message": "UserName or Password Invalid" }, { status: 500 });
            }

            const tokenData = {
                id: user.id,
                name: user.name,
                email: user.email
            }

            const token = await generateJWTToken(tokenData);
            
            const response = NextResponse.json({ success: true, "message": "User Logged in successfully", user: user, token: token }, { status: 201 });
            response.cookies.set("token", token, {httpOnly: true});

            return response;
        }


    } catch (err) {
        console.log(err);
        return NextResponse.json({ success: false, "message": err }, { status: 500 });
    }
}