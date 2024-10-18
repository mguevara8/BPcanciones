import {Route , Routes} from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { CanCrear } from "../../componentes/canciones/CanCrear";
import { CanListar } from "../../componentes/canciones/CanListar";
import { CanAdmin } from "../../componentes/canciones/CanAdmin";
import { CanActualizar } from "../../componentes/canciones/CanActualizar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Acerca } from "../../componentes/otros/Acerca";


export const Ruteo = ()=>{
    return(
       <Routes>
        <Route path="/" element={<Inicio />}/>

        <Route path="/Cancre" element={<CanCrear />}/>
        <Route path="/Canlis" element={<CanListar />}/>
        <Route path="/Canadmin" element={<CanAdmin />}/>

        <Route path="/canact/: codigo" element={<CanActualizar />}/>
        
        <Route path="/acer" element={<Acerca/>}/>

        <Route path="*" element={<NoEncontrado />}/>
       </Routes>
    )
}