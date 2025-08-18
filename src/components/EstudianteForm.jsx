import { useState } from "react";
import {addStudent} from "../service/studentService";



function EstudianteForm({fetchEstudiantes}) {
  const [nuevo, setNuevo] = useState({
    Nombre: "",
    Direccion: "",
    Telefono: "",
    Observacion: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nuevo) return;
    await addStudent(nuevo);
    fetchEstudiantes();
    setNuevo({ Nombre: "", Direccion: "", Telefono: "", Observacion: "" });
  };

  return (

<div className="form-container">
          <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nuevo.Nombre}
                  onChange={(e) => setNuevo({ ...nuevo, Nombre: e.target.value })}
                />
                <input
                  
                  type="text"
                  placeholder="Direccion"
                  value={nuevo.Direccion}
                  onChange={(e) => setNuevo({ ...nuevo, Direccion: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Telefono"
                  value={nuevo.Telefono}
                  onChange={(e) => setNuevo({ ...nuevo, Telefono: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Observacion"
                  value={nuevo.Observacion}
                  onChange={(e) => setNuevo({ ...nuevo, Observacion: e.target.value })}
                />
                <button type="submit" className="add-btn">Registrar</button>
            </form>
          </div>
        </div>
  );
}

export default EstudianteForm;
