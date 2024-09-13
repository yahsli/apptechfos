'use server'
import { sql } from "@vercel/postgres";

export async function GET(){
    const products = await sql.query('select * from product')
    return products.rows
}
export async function GET_ONE_PRODUCT(id){
    const product = await sql.query('select * from product where id_product = $1',[Number(id)])
    return product.rows[0]
}
export async function GET_TEACHER(email){
    console.log(email);
    const teacher = await sql.query('select * from author where email = $1',[email])
    return teacher.rows[0]
}