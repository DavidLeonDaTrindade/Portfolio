import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import calmar from "../imagen/Captura.PNG";
import rackcanarias from "../imagen/RackCanarias.png";
import kiwoko from "../imagen/kiwoko.png";

const Portfolio = () =>{
    const { i18n, t } = useTranslation();

    // Al cargar el componente, verificar si hay un idioma almacenado en el almacenamiento local y establecerlo
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    // Función para cambiar el idioma y almacenarlo en el almacenamiento local
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">{t("proyectos")}</h1>

            {/* Sección 1 */}
            <div className="md:flex items-center mb-8">
                <div className="md:w-1/2">
                    <img src={calmar} alt="Foto 1" className="rounded shadow-md md:ml-5 w-full" />
                </div>
                <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                    <p className="text-justify">{t("textoImagen1")}</p>
                </div>
            </div>

            {/* Sección 2 */}
            <div className="md:flex items-center mb-8">
                <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
                    <p className="text-justify">{t("textoImagen2")}</p>
                </div>
                <div className="md:w-1/2">
                    <img src={rackcanarias} alt="Foto 2" className="rounded shadow-md md:mr-5 w-full" />
                </div>
            </div>

            {/* Sección 3 */}
            <div className="md:flex items-center mb-8">
                <div className="md:w-1/2">
                    <img src={kiwoko} alt="Foto 3" className="rounded shadow-md md:ml-5 w-full" />
                </div>
                <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                    <p className="text-justify">{t("textoImagen3")}</p>
                </div>
            </div>

            {/* Selector de idioma */}
            <div className="mt-6">
                {LANGUAGES.map((language) => (
                    <button key={language.code} onClick={() => changeLanguage(language.code)} className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                        {language.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
