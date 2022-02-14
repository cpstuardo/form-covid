import "../App.css";
import time from "../data/ultima_actualizacion.json";

const BottomText = () => (
  <p className="bottom-text">
    Última actualización: {time.datetime} <br />
    Creado por{" "}
    <a
      className="link"
      href="https://www.yachaydata.cl/"
      target="_blank"
      rel="noreferrer"
    >
      Yachay Data
    </a>
    .
    <br />
    Calculado a partir de los datos del{" "}
    <a
      className="link"
      href="https://github.com/MinCiencia/Datos-COVID19/tree/master/output/producto89"
      target="_blank"
      rel="noreferrer"
    >
      Producto 89
    </a>{" "}
    disponibilizados por la iniciativa{" "}
    <a
      className="link"
      href="https://github.com/MinCiencia/Datos-COVID19"
      target="_blank"
      rel="noreferrer"
    >
      Datos-COVID19
    </a>{" "}
    del Ministerio de Ciencia.
  </p>
);

export default BottomText;
