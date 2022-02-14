import pandas as pd
import numpy as np
import requests
import datetime
import json
import pytz

# Recuperar los datos del Min Ciencia
url = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto89/incidencia_en_vacunados_edad.csv"
res = requests.get(url, allow_redirects=True)

with open("dosis.csv", "wb") as file:
    file.write(res.content)

df = pd.read_csv("dosis.csv")

ult_sem = df.semana_epidemiologica.unique()[-12:]
df12 = df[df.semana_epidemiologica.isin(ult_sem)] # filtrar 12 ultimas semanas

df12 = df12[df12.grupo_edad != "06 - 11 años"]

df12["p_casos_confirmados"] = df12.poblacion / df12.casos_confirmados
df12["p_casos_uci"] = df12.poblacion / df12.casos_uci
df12["p_casos_def"] = df12.poblacion / df12.casos_def

df12["p_casos_confirmados"] = df12["p_casos_confirmados"]
df12["p_casos_uci"] = df12["p_casos_uci"]
df12["p_casos_def"] = df12["p_casos_def"]

df12 = df12.groupby(["grupo_edad", "estado_vacunacion"]).mean()["p_casos_confirmados"].to_dict()

dict_casos={}
for k in df12.keys():
    if not(k[0] in dict_casos.keys()):
        dict_casos[k[0]] = {}
    dict_casos[k[0]][k[1]] = round(df12[k],0)

with open(f"../src/data/data.json", "w") as file:
    json.dump(dict_casos, file, indent=4)


# Última semana epidemiológica
ultima = df.semana_epidemiologica.unique()[-1:][0]
dataTime = {
    "week": ultima[-2:],
    "year": ultima[:4],
}
with open(f"../src/data/ultima_sem_epi.json", "w") as file:
    json.dump(dataTime, file, indent=4)

# Última actualización
country_time_zone = pytz.timezone("Chile/Continental")
country_time = datetime.datetime.now(country_time_zone)
string_date = country_time.strftime("%d-%m-%y %H:%M")
dataTime = {
    "datetime": string_date
} 
with open(f"../src/data/ultima_actualizacion.json", "w") as file:
    json.dump(dataTime, file, indent=4)