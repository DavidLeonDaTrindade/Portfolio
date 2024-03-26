import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const { t } = useTranslation();
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        // Al montar el componente, intenta obtener el contador de visitas del almacenamiento local
        const storedVisitCount = parseInt(localStorage.getItem('visitCount')) || 0;
        setVisitCount(storedVisitCount); // Establece el estado del contador de visitas

        // Incrementa el contador de visitas en el estado local y en el estado de React
        const newVisitCount = storedVisitCount + 1;
        localStorage.setItem('visitCount', newVisitCount.toString());
        setVisitCount(newVisitCount);
    }, []); // El array de dependencias está vacío, por lo que el efecto se ejecuta solo una vez al montar el componente

    return (
        <div>
            <h1>{t("footer")}</h1>
            <p>La página ha sido visitada {visitCount} veces.</p>
            <div>
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginRight: "10px" }} />
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginRight: "10px" }} />
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: "10px" }} />
            </div>
        </div>
    );
};

export default Footer;
