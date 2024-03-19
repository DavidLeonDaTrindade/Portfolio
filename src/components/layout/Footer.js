import React from "react";  
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/langs.ts";
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    const { i18n, t} = useTranslation();
    return(
        <div>
            <h1>{t("footer")}</h1>
            <div>
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginRight: "10px" }} />
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginRight: "10px" }} />
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: "10px" }} />
            </div>
        </div>
    )
}
export default Footer;