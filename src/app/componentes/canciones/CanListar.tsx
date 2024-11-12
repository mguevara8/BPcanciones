import { useState } from "react"
import { Cancion } from "../../modelos/Cancion";
import { ARREGLO_CANCION } from "../../mocks/Cancion-mocks";
import { ARREGLO_CANCION_GENERO } from "../../utilidades/dominios/DomGenero";
 
export const CanListar = () => {
  const [arrCanciones] = useState<Cancion[]>(ARREGLO_CANCION);
 
  const nombreGnero = (valor : string ) => {
    for(const objGenero of ARREGLO_CANCION_GENERO){
        if(objGenero.codGenero == valor) {
            return objGenero.nombreGenero;
        }
    }
  };

    return (
        <>
        <div className="pt-5 d-flex justify-content-center">
            <div className="col-md-8">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Título Canción</th>
                        <th>Cantante</th>
                        <th>Género</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
 
                {arrCanciones.map((miCan:Cancion)=>(
                    <tr key={miCan.codCancion}>
                        <td>{miCan.codCancion}</td>
                        <td>{miCan.tituloCancion}</td>
                        <td>{miCan.cantanteCancion}</td>
                        <td>{nombreGnero(miCan.codGeneroCancion)}</td>
                        <td>
                        <img src="{miCan.ImagenCancionBase64}" alt="" className="ImagenListado" />
                        <br />
                        {miCan.imagenCancion}
                        </td>
                    </tr>
                ))}
 
                   
                </tbody>
            </table> 
            </div>
            </div>
        </>
    )
}