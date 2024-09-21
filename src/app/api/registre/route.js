'use server';
import { sql } from "@vercel/postgres";
import { hash } from "bcryptjs";

export default async function CREATE_ACCOUNT(values) {
    try {
        const hash_password = await hash(values.password, 10);
        const addUser = await sql`
            insert into users (email, firstname, lastname, password) 
            values (${values.email}, ${values.firstname}, ${values.lastname}, ${hash_password})
        `;

        return {status: 200, title: 'Votre compte est créé',message : 'vous pouvez connecter maintnant à votre compte dans la page login'};
    } catch (error) {
        console.error('Error adding user:', error); 
        throw new Error('le compte est déja existé');
    }
}
