import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import calmar from "../imagen/Captura.PNG";
import rackcanarias from "../imagen/RackCanarias.png";
import kiwoko from "../imagen/kiwoko.png";

const Proyectos = () => {
    const { i18n, t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

    // Lista de proyectos
    const proyectos = [
        { name: t("tituloProyecto1"), link: "https://www.calmartenerife.es", image: calmar },
        { name: "RackCanarias", link: "https://rackcanarias.es", image: rackcanarias },
        { name: t("tituloProyecto3"), link: "https://github.com/DavidLeonDaTrindade/ControlCaducados", image: kiwoko }
    ];

    // Utilizamos useMemo para memoizar la lista filtrada de proyectos basada en el término de búsqueda
    const filteredProjects = useMemo(() => {
        return proyectos.filter(project =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, proyectos]); // La lista de dependencias incluye el término de búsqueda y la lista completa de proyectos

    // Función para manejar cambios en el término de búsqueda
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

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
        <div className="text-center">
            <h1 className="text-2xl font-bold">{t("proyectos")}</h1>
            <label htmlFor="searchInput" className="block">{t("buscadorProyectos")}</label>
            <input
                id="searchInput"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={t("buscadorProyectos")}
                className="border border-gray-300 rounded-md p-2 mt-2 mb-4"
            />
            <table className="w-4/5 mx-auto">
                <caption className="text-lg font-bold">{t("listaProyectos")}</caption>
                <thead>
                    <tr>
                        <th className="w-1/3">{t("nombreTabla")}</th>
                        <th className="w-1/3">{t("enlaceTabla")}</th>
                        <th className="w-1/3">{t("imagenTabla")}</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProjects.map(project => (
                        <tr key={project.name}>
                            <td>{project.name}</td>
                            <td><a href={project.link} target="_blank" className="text-blue-500 underline">{project.link}</a></td>
                            <td><img src={project.image} alt={project.name} className="mx-auto mt-2 w-32 h-auto" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

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

export default Proyectos;
