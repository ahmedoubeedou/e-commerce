import { useEffect, useReducer } from "react";
import Cards from "../../components/Cards";
import {reducer} from  "../../hooks/Reducer";
import {getAllProduct} from "../../services/productApi";
import "./product.css";
import { v4 as uuidv4 } from 'uuid';
export default function Home()
{
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
       <div className="container">
<header className="header">
   item1 
</header>
<div className="flex w-full p-2 bg-amber-500 parent-calc ">
    <div className="side-bar">
    item2
</div>
<main className="main">
  {Allproduct}
</main>
</div>

       </div>
    )
}