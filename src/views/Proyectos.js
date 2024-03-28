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

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>{t("proyectos")}</h1>
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder={t("buscadorProyectos")} />
            <summary>{t("summary")}</summary>
            <table style={{ margin: "0 auto", width: "80%" }}>
                <caption style={{ fontSize: "20px", fontWeight: "bold" }}>{t("listaProyectos")}</caption>
                <thead>
                    <tr>
                        <th scope="col" style={{ width: "33%" }}>{t("nombreTabla")}</th>
                        <th scope="col" style={{ width: "33%" }}>{t("enlaceTabla")}</th>
                        <th scope="col" style={{ width: "33%" }}>{t("imagenTabla")}</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProjects.map(project => (
                        <tr key={project.name}>
                            <td scope="row">{project.name}</td>
                            <td><a href={project.link} target="_blank">{project.link}</a></td>
                            <td><img src={project.image} alt={project.name} style={{ width: '150px', height: '100px' }} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Proyectos;
