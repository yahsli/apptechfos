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
    const teacher = await sql.query('select * from author where email = $1',[email])
    return teacher.rows[0]
}
export async function ADD_RATING(value, email, id) {
    try {
        if (!email || !id || !value) {
            throw new Error('Invalid input: email, id, or value is missing');
        }

        console.log("Inserting rating with email:", email);
        const rating = await sql`
            insert into rating (email, id_product, value) 
            values (${email}, ${id}, ${value})
        `;
        return { status: 200, message: 'Rating added successfully' };
    } catch (error) {
        console.error('Error adding rating:', error);
        throw new Error('Failed to add rating');
    }
}
