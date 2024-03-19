import React from "react";  
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/langs.ts";

const HeaderNav = () => {

    const { i18n, t} = useTranslation();
    
    const onChangeLang = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };
    return(
        <div>
            <h1>{t("titleHeader")}</h1>
            <select defaultValue={i18n.language} onChange={onChangeLang} style={{ position: "absolute", top: "20px", right: "20px" }}>
                {LANGUAGES.map(({ code, label }) => (                                
                    <option key={code} value={code}>
                    {label}
                    </option>
            ))}
            </select>
            <ul style={{ listStyleType: "none", margin: 0, padding: 0, textAlign: "left" }}> {/* Lista de elementos de navegación */}
                <li style={{ display: "inline", marginLeft: "20px" }}>
                    <a href="/inicio" style={{ textDecoration: "none", color: "inherit" }}>{t("inicioNav")}</a> 
                </li>
                <li style={{ display: "inline", marginLeft: "20px" }}>
                    <a href="/portfolio" style={{ textDecoration: "none", color: "inherit" }}>{t("portfolioNav")}</a> 
                </li>
                <li style={{ display: "inline", marginLeft: "20px" }}>
                    <a href="/contacto" style={{ textDecoration: "none", color: "inherit" }}>{t("contactoNav")}</a>
                </li>
                <li style={{ display: "inline", marginLeft: "20px" }}>
                    <a href="/curriculum" style={{ textDecoration: "none", color: "inherit" }}>{t("curriculumNav")}</a> 
                </li>
                <li style={{ display: "inline", marginLeft: "20px" }}>
                    <a href="/proyectos" style={{ textDecoration: "none", color: "inherit" }}>{t("proyectosNav")}</a> 
                </li>
                <li style={{ display: "inline", marginLeft: "20px" }}>
                    <a href="/servicios" style={{ textDecoration: "none", color: "inherit" }}>{t("serviciosNav")}</a> 
                </li>
            </ul>
        </div>
    )
}
export default HeaderNav;