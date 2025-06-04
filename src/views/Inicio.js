import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";

const Inicio = () => {
    const { t, i18n } = useTranslation();

    // Al cargar el componente, leer el idioma almacenado en el almacenamiento local y establecerlo
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage); // Cambiar el idioma al almacenado en el localStorage
        } else {
            // Si no hay idioma almacenado en el localStorage, usar el idioma por defecto
            i18n.changeLanguage("es");
        }
    }, [i18n]); // Dependencia vacía para ejecutar solo una vez al cargar el componente

    // Función para cambiar el idioma y almacenarlo en el almacenamiento local
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-white shadow-md rounded">
            <h1 className="text-5xl font-bold mb-6">{t("inicio")}</h1>
            <p className="text-lg">{t("pInicio")}</p>

            {/* Selector de idioma */}
            <div className="mt-4">
                {LANGUAGES.map((language) => (
                    <button key={language.code} onClick={() => changeLanguage(language.code)} className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                        {language.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Inicio;
