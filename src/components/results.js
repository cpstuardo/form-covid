import Paper from "@mui/material/Paper";
import data from "../data/data.json";
import time from "../data/ultima_sem_epi.json";
import "../App.css";

const Results = ({ age, vaccine }) => {
  const casos_confirmados = data["p_casos_confirmados"][age][vaccine];
  const casos_uci = data["p_casos_uci"][age][vaccine];
  const casos_def = data["p_casos_def"][age][vaccine];
  return (
    <div>
      {casos_confirmados === "NaN" ? (
        <Paper
          elevation={3}
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 2 } }}
          style={{ backgroundColor: "#e8f8f5" }}
        >
          No hubo personas de tu categoría contagiadas en los últimos 3 meses*
          en Chile.
        </Paper>
      ) : (
        <Paper
          elevation={3}
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 2 } }}
          style={{ backgroundColor: "#e8f8f5" }}
        >
          <b> 1 de cada {casos_confirmados} personas </b> de tu categoría se
          contagiaron en los últimos 3 meses* en Chile.
        </Paper>
      )}
      {casos_uci === "NaN" ? (
        <Paper
          elevation={3}
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 2 } }}
          style={{ backgroundColor: "#a2d9ce" }}
        >
          No hubo personas de tu categoría que estuvieron en UCI por COVID en
          los últimos 3 meses* en Chile.
        </Paper>
      ) : (
        <Paper
          elevation={3}
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 2 } }}
          style={{ backgroundColor: "#a2d9ce" }}
        >
          <b> 1 de cada {casos_uci} personas </b> de tu categoría estuvieron en
          UCI por COVID en los últimos 3 meses* en Chile.
        </Paper>
      )}
      {casos_def === "NaN" ? (
        <Paper
          elevation={3}
          sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
          style={{ backgroundColor: " #73c6b6" }}
        >
          No hubo personas de tu categoría fallecidas por COVID en los últimos 3
          meses* en Chile.
        </Paper>
      ) : (
        <Paper
          elevation={3}
          sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 2 } }}
          style={{ backgroundColor: " #73c6b6" }}
        >
          <b> 1 de cada {casos_def} personas </b> de tu categoría fallecieron
          por COVID en los últimos 3 meses* en Chile.
        </Paper>
      )}
      <p className="asterisk">
        {" "}
        (*) Desde la semana epidemiológica N°{time.week} del año {time.year}
      </p>
    </div>
  );
};
export default Results;
