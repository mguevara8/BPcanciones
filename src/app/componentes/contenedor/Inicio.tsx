import joearroyo from "../../../assets/img/joe.jpg";
import karolg from "../../../assets/img/karolg.jpg";
import diomedes from "../../../assets/img/diomedes.jpg";
import evanescence from "../../../assets/img/evanescence.jpg";
 
export const Inicio = () => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={joearroyo} alt="Inicio" />
                <div className="card-body">
                    <h5 className="card-title">Artista #1</h5>
                    <p className="card-text">JOE ARROYO</p>
                </div>
            </div>
 
 
            <div className="card" style={{ width: "18rem" }}>
              <img src={karolg} alt="Inicio" />
              <div className="card-body">
                  <h5 className="card-title">Artista #2</h5>
                  <p className="card-text">KAROL G</p>
              </div>
            </div>
 
 
            <div className="card" style={{ width: "18rem" }}>
              <img src={diomedes} alt="Inicio" />
              <div className="card-body">
                  <h5 className="card-title">Artista #3</h5>
                  <p className="card-text">DIOMEDES DIAZ</p>
              </div>
            </div>
 
            <div className="card" style={{ width: "18rem" }}>
              <img src={evanescence} alt="Inicio" />
              <div className="card-body">
                  <h5 className="card-title">Artista #4</h5>
                  <p className="card-text">EVANESCENCE</p>
              </div>
            </div>
 
        </>
    );
}