import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";

const Contacto = () => {
    const { i18n, t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes añadir la lógica para enviar el formulario
        console.log(formData);
        // También puedes resetear el formulario después de enviarlo
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div style={{ backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "8px", maxWidth: "400px", margin: "0 auto" }}>
            <h1>{t("contacto")}</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>{t("nombreContacto")}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>{t("mensajeContacto")}</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "14px 20px", margin: "8px 0", border: "none", borderRadius: "4px", cursor: "pointer", width: "100%" }}>
                    {t("enviar")}
                </button>
            </form>
        </div>
    );
};

export default Contacto;
