import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const { t } = useTranslation();
    const [visitCount, setVisitCount] = useState(parseInt(localStorage.getItem('visitCount')) || 0);

    useEffect(() => {
        // Incrementa el contador de visitas en el estado local y en el estado de React
        const newVisitCount = visitCount + 1;
        localStorage.setItem('visitCount', newVisitCount.toString());
        setVisitCount(newVisitCount);
    }, []); // El array de dependencias está vacío, por lo que el efecto se ejecuta solo una vez al montar el componente

    return (
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 text-white py-4 px-6 mt-8">
            <h1 className="text-2xl mb-4">{t("footer")}</h1>
            <p className="mb-4">La página ha sido visitada {visitCount} veces.</p>
            <div>
                <FontAwesomeIcon icon={faTwitter} size="2x" className="mr-4" />
                <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-4" />
                <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-4" />
            </div>
        </div>
    );
};

export default Footer;
