import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import html from "../imagen/htmlcss.png";
import java from "../imagen/java.jpg";
import react from "../imagen/react-logo.jpg";

const Servicios = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">{t("h1servicios")}</h1>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex-1 text-center md:max-w-xs mb-8 md:mb-0">
                    <img src={html} alt="HTML y CSS" className="mx-auto h-32 object-contain" />
                    <p className="font-bold text-sm mt-4">{t("descripcion1")}</p>
                </div>
                <div className="flex-1 text-center md:max-w-xs mb-8 md:mb-0">
                    <img src={java} alt="Java" className="mx-auto h-32 object-contain" />
                    <p className="font-bold text-sm mt-4">{t("descripcion2")}</p>
                </div>
                <div className="flex-1 text-center md:max-w-xs">
                    <img src={react} alt="React" className="mx-auto h-32 object-contain" />
                    <p className="font-bold text-sm mt-4">{t("descripcion3")}</p>
                </div>
            </div>
            <div className="mt-6 text-center">
                {LANGUAGES.map((language) => (
                    <button key={language.code} onClick={() => i18n.changeLanguage(language.code)} className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                        {language.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Servicios;
