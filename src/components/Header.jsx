//import fichier css
import { Link } from "react-router-dom";
import  CustomizedInputBase from "./componentHeadr/BareRecherche";
import "./component.css";
export default function Header()
{
    return (
<header className="header flex items-center justify-between">
   <div>
    <div className="m-2">
        <img src="/public/logo/ecommerce-logo-design-vector.jpg" className="w-16 "/>
    </div>

   </div>
   <div>
    < CustomizedInputBase/>
   </div>
   <nav className="nav">
    <ul className="flex gap-2">
       <Link to="/"><li className="hover">All Product</li></Link> 
        <Link to="/"><li className="hover" >Filter Products</li></Link>
        <Link to="/"><li className="hover">Categories</li></Link>
        <Link to="/"><li className="hover">Users</li></Link>
    </ul>
   </nav>
</header>
    )
}