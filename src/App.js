import "./App.css";
import React, { Fragment, useState, useEffect } from "react";
import { useFormik } from "formik";
import Questions from "./components/questions";
import Results from "./components/results";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const connectionURL =
  "https://sheet.best/api/sheets/3932d4f5-7a72-4a3e-844a-6cbf3d4993b0";

function App() {
  const [ip, setIP] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [showResult, setShowResult] = useState(false);
  let date = new Date();
  let strTime = date.toLocaleString("en-US", {
    timeZone: "Chile/Continental",
  });
  const formik = useFormik({
    initialValues: {
      age: "",
      vaccine: "",
    },
    onSubmit: async (values) => {
      setShowResult(true);
      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          IP: ip,
          timestamp: strTime,
          country,
          city,
          latitude,
          longitude,
          age: values.age,
          vaccine: values.vaccine,
        }),
      };
      await fetch(connectionURL, requestOptions);
    },
  });

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };
    fetch("https://geolocation-db.com/json/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setIP(data.IPv4);
        setCountry(data.country_name);
        setCity(data.city);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      });
  }, []);

  return (
    <div className="App">
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper elevation={0} sx={{ my: { xs: 2, md: 2 }, p: { xs: 2, md: 3 } }}>
          <h1>Formulario COVID-19</h1>
          <Fragment>
            <Questions formik={formik} />
            {showResult ? (
              <div className="results">
                <Results
                  age={formik.values.age}
                  vaccine={formik.values.vaccine}
                />
                <Button
                  type="submit"
                  sx={{ mt: 3, ml: 1 }}
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    color: "#45b39d",
                    marginTop: -30,
                  }}
                  onClick={() => {
                    setShowResult(false);
                    formik.handleReset();
                  }}
                >
                  Reiniciar
                </Button>
              </div>
            ) : (
              <div />
            )}
          </Fragment>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
