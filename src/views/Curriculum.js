
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
const Curriculum = () =>{
    const { i18n, t} = useTranslation();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        experience: "",
        education: "",
        skills: ""
    });
    useEffect(() => {
        // Al cargar la página, restaura el idioma seleccionado desde el localStorage
        const selectedLanguage = localStorage.getItem("selectedLanguage");
        if (selectedLanguage) {
            i18n.changeLanguage(selectedLanguage);
        }
    }, []); // El efecto se ejecuta solo una vez al cargar la página

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            firstName: "",
            lastName: "",
            experience: "",
            education: "",
            skills: ""
        });
    };

    return (
        <div className="bg-white shadow-md p-6 rounded max-w-lg mx-auto text-left">
            <h1 >{t("curriculum")}</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <span style={{ fontWeight: "bold" }}>{t("nombreCurriculum")}:</span> Jesús David 
                </p>
                <p>
                <span style={{ fontWeight: "bold" }}>{t("apellidoCurriculum")}</span> león Da Trindade
                </p>
                <p>
                <span style={{ fontWeight: "bold" }}>{t("experiencia")}</span> <br/>
                    Ejercito de Tierra: 2009-2016.<br/>
                    Carnicero: 2016-2019.<br/>
                    Mozo de almacen: 2019-2024.<br/>
                </p>
                <p>
                <span style={{ fontWeight: "bold" }}>{t("estudios")}</span>  <br/>
                    Educacion secundaria obligatoria <br/>
                    Ciclo de grado medio en Electricidad y Electronica.<br/>
                    Ciclo de grado medio en instalacion de equipos de frio y calor.
                </p>
                <p>
                <span style={{ fontWeight: "bold" }}>{t("habilidades")}</span> <br/>
                {t("textoHabilidades")}
                </p>
                
            </form>
        </div>
    );
};
export default Curriculum;