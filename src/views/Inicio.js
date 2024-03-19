import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";
const Inicio = () =>{
    const { i18n, t} = useTranslation();
    return (
        <div>
            <h1>{t("inicio")}</h1>
            <p>{t("pInicio")}</p>
        </div>
    )
}
export default Inicio;