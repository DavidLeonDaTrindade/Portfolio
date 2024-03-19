import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import calmar from "../imagen/Captura.PNG";
import rackcanarias from "../imagen/RackCanarias.png";
import kiwoko from "../imagen/kiwoko.png";
const Proyectos = () =>{
    const { i18n, t} = useTranslation();
    return (
        <div>
            <h1>{t("proyectos")}</h1>
            <ul style={{ listStyleType: 'none' }}>
                <li style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}><a href="https://www.calmartenerife.es" target="_blank">{t("tituloProyecto1")}</a></li>
                <li style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}><a href="https://rackcanarias.es" target="_blank">RackCanarias</a></li>
                <li style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}><a href="https://github.com/DavidLeonDaTrindade/ControlCaducados" target="_blank">{t("tituloProyecto3")}</a></li>
            </ul>
           
        </div>
    )
}
export default Proyectos;