import joearroyo from "../../../assets/img/joe.jpg";
import karolg from "../../../assets/img/karolg.jpg";
import diomedes from "../../../assets/img/diomedes.jpg";
import evanescence from "../../../assets/img/evanescence.jpg";

export const Inicio = () => {
    return (
        <div className="d-flex flex-wrap justify-content-around mt-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={joearroyo} className="card-img-top" alt="Joe Arroyo" />
                <div className="card-body">
                    <h5 className="card-title">Joe Arroyo</h5>
                    <p className="card-text">Álvaro Arroyo González, ​más conocido como Joe Arroyo, fue un cantante y compositor colombiano de música salsa y tropical. Es considerado como uno de los grandes intérpretes de música de Colombia.​​ La mayoría de los salseros aseguran, y pelean, porque el verdadero nombre de El Joe es Álvaro José</p>                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <img src={karolg} className="card-img-top" alt="Karol G" />
                <div className="card-body">
                    <h5 className="card-title">Karol G</h5>
                    <p className="card-text">Carolina Giraldo Navarro, conocida artísticamente como Karol G, es una cantante, compositora y empresaria colombiana. Su carrera se ha destacado por emplear los estilos de reguetón y pop urbano, aunque también ha incursionado con otros estilos musicales urbanos y latinoamericanos</p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <img src={diomedes} className="card-img-top" alt="Diomedes Díaz" />
                <div className="card-body">
                    <h5 className="card-title">Diomedes Díaz</h5>
                    <p className="card-text">Diomedes Díaz Maestre fue un cantautor y compositor colombiano de vallenato. En el aspecto musical, Diomedes, es el mayor vendedor de discos en la historia del vallenato, por lo que ha sido considerado uno de los máximos exponentes de dicho género.</p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <img src={evanescence} className="card-img-top" alt="Evanescence" />
                <div className="card-body">
                    <h5 className="card-title">Evanescence</h5>
                    <p className="card-text">Evanescence es una banda estadounidense de rock fundada en Little Rock, Arkansas, en 1994 por la cantante, pianista y compositora Amy Lee y el guitarrista Ben Moody</p>
                </div>
            </div>
        </div>
    );
};
