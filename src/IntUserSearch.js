import React, { useState } from "react";

const IntUserSearch=()=>{
  const [especialidad, setEspecialidad] = useState("");
  const [subespecialidad, setSubespecialidad] = useState("");
  const [generosMusicales, setGenerosMusicales] = useState([]);
  const [experiencia, setExperiencia] = useState("");

  const handleEspecialidadChange = (e) => {
    setEspecialidad(e.target.value);
    setSubespecialidad("");
  };

  const handleGeneroMusicalChange = (e) => {
    const selectedGenero = e.target.value;
    if (generosMusicales.includes(selectedGenero)) {
      setGenerosMusicales(generosMusicales.filter((genero) => genero !== selectedGenero));
    } else {
      setGenerosMusicales([...generosMusicales, selectedGenero]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Especialidad:", especialidad);
    console.log("Subespecialidad:", subespecialidad);
    console.log("Generos Musicales:", generosMusicales);
    console.log("Experiencia:", experiencia);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Especialidad:</td>
            <td>
              <select value={especialidad} onChange={handleEspecialidadChange}>
                <option value="">Seleccionar</option>
                <option value="programacion">Programación</option>
                <option value="diseno">Diseño</option>
                <option value="graficos">Gráficos</option>
                <option value="sonido">Sonido</option>
              </select>
            </td>
            <td>Subspecialidad:</td>
            <td>
              {especialidad && (
                <select value={subespecialidad} onChange={(e) => setSubespecialidad(e.target.value)}>
                  {especialidad === "programacion" && (
                    <>
                      <option value="">Seleccionar</option>
                      <option value="unity">Unity</option>
                      <option value="unreal">Unreal Engine</option>
                      <option value="godot">Godot</option>
                    </>
                  )}
                  {especialidad === "diseno" && (
                    <>
                      <option value="">Seleccionar</option>
                      <option value="niveles">Diseño de Niveles</option>
                      <option value="escenarios">Diseño de Escenarios</option>
                      <option value="jefes">Diseño de Jefes</option>
                    </>
                  )}
                  {especialidad === "graficos" && (
                    <>
                      <option value="">Seleccionar</option>
                      <option value="ilustracion">Ilustración</option>
                      <option value="diseno-personajes">Diseño de Personajes</option>
                      <option value="diseno-fondos">Diseño de Fondos</option>
                      <option value="modelacion-3d">Modelación 3D</option>
                      <option value="director-diseno">Director de Diseño</option>
                    </>
                  )}
                  {especialidad === "sonido" && (
                    <>
                      <option value="">Seleccionar</option>
                      <option value="diseno-sonoro">Diseño Sonoro</option>
                      <option value="compositor">Compositor</option>
                      <option value="productor-musical">Productor Musical</option>
                    </>
                  )}
                </select>
              )}
            </td>
          </tr>

          {especialidad === "sonido" && (subespecialidad === "compositor" || subespecialidad === "productor-musical") && (
            <tr>
              <td>Géneros Musicales:</td>
              <td colSpan="2">
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      value="Rock"
                      checked={generosMusicales.includes("rock")}
                      onChange={handleGeneroMusicalChange}
                    />
                    Rock
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value=""
                      checked={generosMusicales.includes("pop")}
                      onChange={handleGeneroMusicalChange}
                    />
                    Pop
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="electro"
                      checked={generosMusicales.includes("electro")}
                      onChange={handleGeneroMusicalChange}
                    />
                    Electro
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="jazz"
                      checked={generosMusicales.includes("jazz")}
                      onChange={handleGeneroMusicalChange}
                    />
                    Jazz
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="hip-hop"
                      checked={generosMusicales.includes("hip-hop")}
                      onChange={handleGeneroMusicalChange}
                    />
                    Hip Hop
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="reggae"
                      checked={generosMusicales.includes("reggae")}
                      onChange={handleGeneroMusicalChange}
                    />
                    Reggae
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      value="reggae"
                      checked={generosMusicales.includes("reggae")}
                      onChange={handleGeneroMusicalChange}
                    />
                    Reggae
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value=""
                      checked={generosMusicales.includes("")}
                      onChange={handleGeneroMusicalChange}
                    />
                    Reggae
                  </label>
                </div>
              </td>
            </tr>
          )}

          <tr>
            <td>Experiencia:</td>
            <td colSpan="2">
              <select value={experiencia} onChange={(e) => setExperiencia(e.target.value)}>
                <option value="">Seleccionar</option>
                <option value="sin-experiencia">Sin Experiencia</option>
                <option value="un-proyecto">Un Proyecto</option>
                <option value="menos-de-5-proyectos">Menos de 5 Proyectos</option>
                <option value="muchos-proyectos">Muchos Proyectos</option>
              </select>
            </td>
          </tr>

          <tr>
            <td colSpan="3">
              <button type="submit">Buscar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};


export default IntUserSearch;