import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { text } from "../data/text";
import "../App.css";

const Questions = ({ formik }) => {
  return (
    <Fragment>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={8} marginTop={1}>
          <b>¿A qué rango de edad perteneces?</b>
          {formik.values.age ? (
            <p>{formik.values.age}</p>
          ) : (
            <TextField
              fullWidth
              select
              id="age"
              onChange={formik.handleChange("age")}
              value={formik.values.age}
              variant="standard"
              margin="dense"
            >
              <MenuItem
                value="12 - 20 años"
                style={{ fontFamily: "Montserrat" }}
              >
                12 - 20 años
              </MenuItem>
              <MenuItem
                value="21 - 30 años"
                style={{ fontFamily: "Montserrat" }}
              >
                21 - 30 años
              </MenuItem>
              <MenuItem
                value="31 - 40 años"
                style={{ fontFamily: "Montserrat" }}
              >
                31 - 40 años
              </MenuItem>
              <MenuItem
                value="41 - 50 años"
                style={{ fontFamily: "Montserrat" }}
              >
                41 - 50 años
              </MenuItem>
              <MenuItem
                value="51 - 60 años"
                style={{ fontFamily: "Montserrat" }}
              >
                51 - 60 años
              </MenuItem>
              <MenuItem
                value="61 - 70 años"
                style={{ fontFamily: "Montserrat" }}
              >
                61 - 70 años
              </MenuItem>
              <MenuItem
                value="71 - 80 años"
                style={{ fontFamily: "Montserrat" }}
              >
                71 - 80 años
              </MenuItem>
              <MenuItem
                value="80 años o más"
                style={{ fontFamily: "Montserrat" }}
              >
                80 años o más
              </MenuItem>
            </TextField>
          )}
        </Grid>
        {formik.values.age && (
          <Grid item xs={8} marginTop={1}>
            <b>¿En qué etapa del esquema de vacunación te encuentras? </b>
            {formik.values.vaccine ? (
              <p>{text[formik.values.vaccine]}</p>
            ) : (
              <TextField
                fullWidth
                select
                id="vaccine"
                onChange={formik.handleChange("vaccine")}
                value={formik.values.vaccine}
                variant="standard"
                margin="dense"
              >
                <MenuItem
                  value="sin esquema completo"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Sin esquema completo
                </MenuItem>
                <MenuItem
                  value="con esquema completo"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Con esquema completo
                </MenuItem>
                <MenuItem
                  value="con dosis refuerzo > 14 dias"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Con dosis de refuerzo ({">"} 14 días)
                </MenuItem>
              </TextField>
            )}
            <input className="dispnon" name="field_name" type="text"></input>
          </Grid>
        )}
      </Grid>
      {formik.values.vaccine && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 3, ml: 1 }}
            style={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              backgroundColor: "#45b39d",
            }}
            onClick={formik.handleSubmit}
          >
            Consultar
          </Button>
        </Box>
      )}
    </Fragment>
  );
};

export default Questions;
