'use server'
import { sql } from "@vercel/postgres";
export default async function GET_USER(email){
    try {
        const user = await sql`select * from users where email = ${email}`
        if(user.rowCount === 0){
            throw new Error('User not found')
        }
        return user.rows[0]
    } catch (error) {
        console.log(error);
    }
}