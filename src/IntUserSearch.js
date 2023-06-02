import React, { useState } from "react";

const IntUserSearch=()=>{
    const [specialty, setSpecialty] = useState("");
    const [subSpecialty, setSubSpecialty] = useState("");
    const [experience, setExperience] = useState("");
    const [softwareSkills, setSoftwareSkills] = useState("");
  
    const handleSpecialtyChange = (e) => {
      setSpecialty(e.target.value);
    };
  
    const handleSubSpecialtyChange = (e) => {
      setSubSpecialty(e.target.value);
    };
  
    const handleExperienceChange = (e) => {
      setExperience(e.target.value);
    };
  
    const handleSoftwareSkillsChange = (e) => {
      setSoftwareSkills(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Lógica para realizar la búsqueda con los criterios seleccionados
  
      // Restablecer los valores de los campos de búsqueda
      setSpecialty("");
      setSubSpecialty("");
      setExperience("");
      setSoftwareSkills("");
    };
  
    const renderSubSpecialtyOptions = () => {
      switch (specialty) {
        case "Programacion":
          return (
            <select
              value={subSpecialty}
              onChange={handleSubSpecialtyChange}
              className="search-input"
            >
              <option value="">Seleccionar...</option>
              <option value="Unity">Unity</option>
              <option value="Unreal Engine">Unreal Engine</option>
              <option value="Godot">Godot</option>
            </select>
          );
        case "Diseño":
          return (
            <select
              value={subSpecialty}
              onChange={handleSubSpecialtyChange}
              className="search-input"
            >
              <option value="">Seleccionar...</option>
              <option value="Diseño de niveles">Diseño de niveles</option>
              <option value="Diseño de escenarios">Diseño de escenarios</option>
              <option value="Diseño de jefes">Diseño de jefes</option>
            </select>
          );
        case "Graficos":
          return (
            <select
              value={subSpecialty}
              onChange={handleSubSpecialtyChange}
              className="search-input"
            >
              <option value="">Seleccionar...</option>
              <option value="Ilustracion">Ilustración</option>
              <option value="Diseño de personajes">Diseño de personajes</option>
              <option value="Diseño de fondos">Diseño de fondos</option>
              <option value="Modelación 3D">Modelación 3D</option>
              <option value="Director de diseño">Director de diseño</option>
            </select>
          );
        case "Sonido":
          return (
            <select
              value={subSpecialty}
              onChange={handleSubSpecialtyChange}
              className="search-input"
            >
              <option value="">Seleccionar...</option>
              <option value="Diseño sonoro">Diseño sonoro</option>
              <option value="Compositor">Compositor</option>
              <option value="Productor musical">Productor musical</option>
            </select>
          );
        default:
          return null;
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="search-form">
        <label htmlFor="specialty">Especialidad:</label>
        <select
          id="specialty"
          value={specialty}
          onChange={handleSpecialtyChange}
          className="search-input"
        >
          <option value="">Seleccionar...</option>
          <option value="Programacion">Programación</option>
          <option value="Diseño">Diseño</option>
          <option value="Graficos">Gráficos</option>
          <option value="Sonido">Sonido</option>
        </select>
  
        <label htmlFor="subSpecialty">Subespecialidad:</label>
        {renderSubSpecialtyOptions()}
  
        <label htmlFor="experience">Experiencia:</label>
        <select
          id="experience"
          value={experience}
          onChange={handleExperienceChange}
          className="search-input"
        >
          <option value="">Seleccionar...</option>
          <option value="sin-experiencia">Sin experiencia</option>
          <option value="un-proyecto">Un proyecto</option>
          <option value="menos-de-5-proyectos">Menos de 5 proyectos</option>
          <option value="muchos-proyectos">Muchos proyectos</option>
        </select>
  
        <label htmlFor="softwareSkills">Conocimientos de software:</label>
        <input
          type="text"
          id="softwareSkills"
          value={softwareSkills}
          onChange={handleSoftwareSkillsChange}
          className="search-input"
        />
        
  
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    );

};
export default IntUserSearch;