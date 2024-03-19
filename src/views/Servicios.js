import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import html from "../imagen/htmlcss.png";
import java from "../imagen/java.jpg";
import react from "../imagen/react-logo.jpg";

const Servicios = () =>{
    const { i18n, t} = useTranslation();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, textAlign: 'center', width: '30%', height: '90%' }}>
                <img src={html}style={{ width: '100%', height: '100%' }} />
                <p style={{ fontWeight: 'bold', fontSize: '16px', margin:"20px" }}>{t("descripcion1")}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center', width: '30%', height: '355px' }}>
                <img src={java}style={{ width: '100%', height: '90%' }} />
                <p style={{ fontWeight: 'bold', fontSize: '16px', margin:"20px" }}>{t("descripcion2")}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center', width: '30%', height: '322px' }}>
                <img src={react}style={{ width: '100%', height: '100%' }} />
                <p style={{ fontWeight: 'bold', fontSize: '16px', margin:"20px" }}>{t("descripcion3")}</p>
            </div>
        </div>
    )
}

export default Servicios;
