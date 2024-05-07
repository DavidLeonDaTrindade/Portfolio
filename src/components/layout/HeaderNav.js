import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/langs.ts";

const HeaderNav = () => {
    const { i18n, t } = useTranslation();

    // Función para cambiar el idioma
    const onChangeLang = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        // Almacena el idioma seleccionado en el almacenamiento local
        localStorage.setItem('selectedLanguage', selectedLanguage);
    };

    useEffect(() => {
        // Recupera el idioma seleccionado del almacenamiento local al cargar el componente
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            i18n.changeLanguage(storedLanguage);
        }
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    return (
        <div className="bg-gray-800 text-white py-4 px-6">
            <h1 className="text-2xl mb-4">{t("titleHeader")}</h1>
            <div className="flex items-center">
                <label htmlFor="languageSelect" className="mr-4">Select language:</label>
                <select
                    id="languageSelect"
                    value={i18n.language} // Usa el idioma actual del objeto i18n
                    onChange={onChangeLang}
                    className="py-1 px-2 rounded bg-gray-700 text-white"
                >
                    {LANGUAGES.map(({ code, label }) => (
                        <option key={code} value={code}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
            <ul className="list-none mt-4">
                <li className="inline-block mr-4">
                    <a href="/inicio" className="text-white hover:text-gray-400">{t("inicioNav")}</a>
                </li>
                <li className="inline-block mr-4">
                    <a href="/portfolio" className="text-white hover:text-gray-400">{t("portfolioNav")}</a>
                </li>
                <li className="inline-block mr-4">
                    <a href="/contacto" className="text-white hover:text-gray-400">{t("contactoNav")}</a>
                </li>
                <li className="inline-block mr-4">
                    <a href="/curriculum" className="text-white hover:text-gray-400">{t("curriculumNav")}</a>
                </li>
                <li className="inline-block mr-4">
                    <a href="/proyectos" className="text-white hover:text-gray-400">{t("proyectosNav")}</a>
                </li>
                <li className="inline-block">
                    <a href="/servicios" className="text-white hover:text-gray-400">{t("serviciosNav")}</a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderNav;
