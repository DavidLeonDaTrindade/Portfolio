import React, { useState, useMemo } from "react";
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
        { name: t("tituloProyecto1"), link: "https://www.calmartenerife.es" },
        { name: "RackCanarias", link: "https://rackcanarias.es"},
        { name: t("tituloProyecto3"), link: "https://github.com/DavidLeonDaTrindade/ControlCaducados"}
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

    return (
        <div>
            <h1>{t("proyectos")}</h1>
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder={t("buscadorProyectos")} />
            <ul style={{ listStyleType: 'none' }}>
                {filteredProjects.map(project => (
                    <li key={project.name} style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>
                        <a href={project.link} target="_blank">{project.name}</a>
                        {project.image && <img src={project.image} alt={project.name} style={{ maxWidth: '100px', marginLeft: '10px' }} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Proyectos;
