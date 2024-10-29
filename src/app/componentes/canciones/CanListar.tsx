export const CanListar = () => {
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
                        <th>Duración</th>
                        <th>Género</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>La noche</td>
                        <td>Joe Arroyo</td>
                        <td>4.5</td>
                        <td>Salsa</td>
                    </tr>
                    <tr>
                        <td>2</td>                    
                        <td>Mi ex tenía razón</td>
                        <td>Karol G</td>
                        <td>3.5</td>
                        <td>Reguetón</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sin medir distancia</td>
                        <td>Diomedes Díaz</td>
                        <td>4.8</td>
                        <td>Vallenato</td>
                    </tr>
 
                    <tr>
                        <td>4</td>
                        <td>Loba</td>
                        <td>Shakira</td>
                        <td>3.1</td>
                        <td>Pop</td>
                    </tr>
 
                </tbody>
            </table>
            </div>
            </div>
        </>
    )
}
