'use client'
import { useEffect } from "react";
import Desc from "./Desc";
import Detail from "./detail";
import Head from "./Head";
import Last from "./Last";


export default function Seconde({item,loading}) {

  return (
    <div className="w-full lg:w-8/12 pt-10">
         <Head 
            name = {item.name} 
            new_price = {item.new_price} 
            old_price = {item.old_price} 
            sous_category={item.sous_category}
            loading = {loading}
            />
         <Desc 
            small_desc = {item.small_desc}
            big_desc = {item.big_desc}
            loading = {loading}/>
         <Detail
            date = {item.date}
            n_page = {item.n_page}
            n_cours = {item.n_cours}
            language = {item.language}
            author = {item.author_name}
            category = {item.category}
            loading = {loading}/>
         <Last teacher_email = {item.author_email} loading = {loading}/>
    </div>
  )
}
