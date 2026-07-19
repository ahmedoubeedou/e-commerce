import { useEffect, useReducer , useRef } from "react";
import Cards from "../../components/Cards";
import {reducer} from  "../../hooks/Reducer";
import {getAllProduct} from "../../services/productApi";
import "./product.css";
import { v4 as uuidv4 } from 'uuid';
import Header from "../../components/Header";
import SideBarr from "../../components/SideBarr";
export default function Home()
{
    const element = useRef(null)
const [product , dispatch ] = useReducer(reducer , []) ;
useEffect(()=>{
    async function getAll()
{
const response = await getAllProduct();
dispatch({type:"getAll",payload:{response:response}})
}
getAll();

}
,[])


let Allproduct = product.map((el)=>{
    return <Cards key={uuidv4()} products = {el}/>
})
    return(
       <div className="container w-full bg-red" ref={element}>
<Header/>
<div className="flex w-full p-2 bg-[#eeeeee] mt-20">
    <div className="side-bar">
  <SideBarr/>
</div>
<main className="main mt-10">
  {Allproduct}
</main>
</div>
       </div>
    )
}