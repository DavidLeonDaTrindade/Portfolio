import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Contacto = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isValid, setIsValid] = useState({
        name: true,
        email: true,
        message: true
    });
    
    const inputNombreRef = useRef(null); // Ref para el input de nombre

    useEffect(() => {
        // Al cargar la página, establece el foco en el input de nombre
        inputNombreRef.current.focus();
    }, []); // El array de dependencias está vacío, por lo que el efecto se ejecuta solo una vez al cargar la página

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setIsValid({
            ...isValid,
            [name]: true // Al cambiar el valor del input, se restablece el estado de validación a verdadero
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, message, email } = formData;
        const correoDestino = "example@example.com";
        const mensaje = `Hola ${name}. Se ha enviado satisfactoriamente el siguiente mensaje: ${message}. Nos pondremos en contacto contigo en el correo ${email} lo antes posible.`;
        alert(mensaje);
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
                        aria-invalid={!isValid.name ? "true" : "false"} // Agrega aria-invalid según el estado de validación
                        ref={inputNombreRef} // Asigna la referencia al input de nombre
                        style={{width: "100%", padding: "10px", borderRadius: "4px", border: `1px solid ${!isValid.name ? "red" : "#ccc"}` }} // Cambia el color del borde si el valor es inválido
                    />
                </div>
                <div style={{marginBottom: "15px" }}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-invalid={!isValid.email ? "true" : "false"} // Agrega aria-invalid según el estado de validación
                        style={{ width: "100%", padding: "10px", borderRadius: "4px", border: `1px solid ${!isValid.email ? "red" : "#ccc"}` }} // Cambia el color del borde si el valor es inválido
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>{t("mensajeContacto")}</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-invalid={!isValid.message ? "true" : "false"} // Agrega aria-invalid según el estado de validación
                        style={{ width: "100%", padding: "10px", borderRadius: "4px", border: `1px solid ${!isValid.message ? "red" : "#ccc"}` }} // Cambia el color del borde si el valor es inválido
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>{t("select")}</label>
                    <select
                        name={t("select")}
                        value={formData.selectOption}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "10px", borderRadius: "4px", border: `1px solid ${!isValid.message ? "red" : "#ccc"}` }}>
                        <option value="option1">{t("opcion1")}</option>
                        <option value="option2">{t("opcion2")}</option>
                        <option value="option3">{t("opcion3")}</option>
                    </select>
                </div>
                <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "14px 20px", margin: "8px 0", border: "none", borderRadius: "4px", cursor: "pointer", width: "100%" }}>
                    {t("enviar")}
                </button>
            </form>
        </div>
    );
};

export default Contacto;
