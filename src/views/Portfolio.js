import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
import calmar from "../imagen/Captura.PNG";
import rackcanarias from "../imagen/RackCanarias.png";
import kiwoko from "../imagen/kiwoko.png";
const Portfolio = () =>{
        const { i18n, t} = useTranslation();
    return (
        <div>
            <h1>{t("proyectos")}</h1>

            {/* Sección 1 */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img src={calmar} alt="Foto 1" style={{ width: "100%" , marginLeft: "20px" }}/>
                </div>
                <div style={{ flex: 1, padding: "0 20px" }}>
                    <p style={{padding: "0 20px" }}>{t("textoImagen1")}
                    </p>
                </div>
            </div>

            {/* Sección 2 */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, padding: "0 20px" }}>
                    <p style={{padding: "0 20px" }}>{t("textoImagen2")}</p>
                </div>
                <div style={{ flex: 1 }}>
                    <img src={rackcanarias} alt="Foto 2" style={{ width: "100%", marginRight:"20px" }} />
                </div>
            </div>

            {/* Sección 3 */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, padding: "0 20px" }}>
                    <img src={kiwoko } alt="Foto 3" style={{ width: "100%" }} />
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{padding: "0 20px" }}>{t("textoImagen3")}</p>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;