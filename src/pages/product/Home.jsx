import { useEffect, useReducer ,  useState } from "react";
import Cards from "../../components/Cards";
import {reducer} from  "../../hooks/Reducer";
import {getAllProduct} from "../../services/productApi";
import "./product.css";
import Header from "../../components/Header";
import SideBarr from "../../components/SideBarr";
export default function Home()
{
    const [width , setWidth ] = useState(window.innerWidth);

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

useEffect(()=>{
  function changelargeur(){
    setWidth(window.innerWidth)
  }
window.addEventListener('resize', changelargeur);
return ()=>{
   return window.removeEventListener('resize',changelargeur);
}
},[])
let Allproduct = product.map((el)=>{

    return <Cards key={el.id} products = {el}/>
})
    return(
       <div className="container w-full bg-red" >
<Header/>
<div className="flex w-full p-2 bg-[#eeeeee] mt-20">
    <div className="side-bar">
  
</div>
    <SideBarr width={width}/>
<main className="main mt-10">
  {Allproduct}
</main>
</div>
       </div>
    )
}