// src/app/api/data/data.js
'use server'
import { sql } from "@vercel/postgres"

export async function GET(req) { 
    try {
        const formation = await sql.query('SELECT COUNT(*) FROM product');
        const authors = await sql.query('SELECT COUNT(*) FROM author');
        const users = await sql.query('select count(*) from users')
        return new Response(JSON.stringify({ formation: formation.rows[0].count, authors: authors.rows[0].count,users : users.rows[0].count }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}
