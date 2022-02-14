import Paper from "@mui/material/Paper";
import data from "../data/data.json";
import time from "../data/ultima_sem_epi.json";
import "../App.css";

const Results = ({ age, vaccine }) => {
  const result = data[age][vaccine];
  return (
    <Paper
      elevation={3}
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      style={{ backgroundColor: "#e8f8f5" }}
    >
      <b> 1 de cada {result} personas </b> de tu categoría se contagiaron en los
      últimos 3 meses* en Chile.
      <br />
      <p className="asterisk">
        {" "}
        (*) Desde la semana epidemiológica N°{time.week} del año {time.year}
      </p>
    </Paper>
  );
};
export default Results;
