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
export async function ADD_RATING(values) {
    try {
        const rating = await sql`
            insert into rating (email, id_product, value) 
            values (${values.email}, ${values.id}, ${values.evaluation})
        `;
        return { status: 200, message: 'Rating added successfully' };
    } catch (error) {
        console.error('Error adding rating:', error);
        throw new Error('Failed to add rating');
    }
}
export async function CHECK(email,id){
    try {
        const rating = await sql.query('select * from rating where email = $1 and id_product = $2',[email,id])
        if(rating.rowCount === 1){
            return { status: 200, message: true}
        }else{
            return { status: 200, message: false }
        }
    } catch (error) {
        console.log(error);
    }
}
export async function GET_RATING(id){
    try{
        const moy = await sql.query('select avg(value) from rating where id_product = $1',[id])
        const count = await sql.query('select count(*) from rating where id_product = $1',[id])
        return {moy : moy.rows[0],count : count.rows[0]}
    }catch(error){
        console.log(error);
    }
}
export async function GET_AUTHOR(id){
    try{
        const author = await sql.query('select author.name from author,product where author_email = email and id_product = $1',[id])
        return author.rows[0]
    }catch(error){
        console.log(error);
    }
}

