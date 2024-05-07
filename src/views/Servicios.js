import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import html from "../imagen/htmlcss.png";
import java from "../imagen/java.jpg";
import react from "../imagen/react-logo.jpg";

const Servicios = () => {
    const { t } = useTranslation();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ flex: 1, textAlign: 'center', maxWidth: '30%', height: '100%' }}>
                <img src={html} alt="HTML y CSS" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <p style={{ fontWeight: 'bold', fontSize: '16px', margin: "20px" }}>{t("descripcion1")}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center', maxWidth: '30%', height: '100%' }}>
                <img src={java} alt="Java" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <p style={{ fontWeight: 'bold', fontSize: '16px', margin: "20px" }}>{t("descripcion2")}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center', maxWidth: '30%', height: '100%' }}>
                <img src={react} alt="React" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <p style={{ fontWeight: 'bold', fontSize: '16px', margin: "20px" }}>{t("descripcion3")}</p>
            </div>
        </div>
    )
}

export default Servicios;
