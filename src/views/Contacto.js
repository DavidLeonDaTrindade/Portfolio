import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/langs.ts";

const Contacto = () => {
    const { i18n, t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        selectOption: "option1" // Agregado para mantener el estado del select
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
        
        // Cargar idioma seleccionado del localStorage al cargar la página
        const selectedLanguage = localStorage.getItem("selectedLanguage");
        if (selectedLanguage) {
            i18n.changeLanguage(selectedLanguage);
        }
    }, [i18n]); // Dependencia i18n para reaccionar a los cambios de idioma

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
        const { name, message, email, selectOption } = formData;
        const correoDestino = "example@example.com";
        const mensaje = `Hola ${name}. Se ha enviado satisfactoriamente el siguiente mensaje: ${message}. Nos pondremos en contacto contigo en el correo ${email} lo antes posible. Opción seleccionada: ${selectOption}`;
        alert(mensaje);
        setFormData({
            name: "",
            email: "",
            message: "",
            selectOption: "option1" // Reiniciar el estado del select
        });
    };

    const onChangeLang = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        // Guardar el idioma seleccionado en el localStorage
        localStorage.setItem("selectedLanguage", selectedLanguage);
    };

    return (
        <div className="bg-gray-200 py-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">{t("contacto")}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700">{t("nombreContacto")}</label>
                    <input
                        id="nombre"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-invalid={!isValid.name ? "true" : "false"} // Agrega aria-invalid según el estado de validación
                        ref={inputNombreRef} // Asigna la referencia al input de nombre
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!isValid.name ? "border-red-500" : ""}`} // Cambia el color del borde si el valor es inválido
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">{t("email")}</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-invalid={!isValid.email ? "true" : "false"} // Agrega aria-invalid según el estado de validación
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!isValid.email ? "border-red-500" : ""}`} // Cambia el color del borde si el valor es inválido
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mensaje" className="block text-gray-700">{t("mensajeContacto")}</label>
                    <textarea
                        id="mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-invalid={!isValid.message ? "true" : "false"} // Agrega aria-invalid según el estado de validación
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!isValid.message ? "border-red-500" : ""}`} // Cambia el color del borde si el valor es inválido
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="select" className="block text-gray-700">{t("select")}</label>
                    <select
                        id="select"
                        name="selectOption"
                        value={formData.selectOption}
                        onChange={handleChange}
                        required
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${!isValid.message ? "border-red-500" : ""}`} // Cambia el color del borde si el valor es inválido
                    >
                        <option value="option1">{t("opcion1")}</option>
                        <option value="option2">{t("opcion2")}</option>
                        <option value="option3">{t("opcion3")}</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="languageSelect" className="block text-gray-700">{t("selectLanguage")}</label>
                    <select
                        id="languageSelect"
                        defaultValue={i18n.language}
                        onChange={onChangeLang}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        {LANGUAGES.map(({ code, label }) => (
                            <option key={code} value={code}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">{t("enviar")}</button>
            </form>
        </div>
    );
};

export default Contacto;
