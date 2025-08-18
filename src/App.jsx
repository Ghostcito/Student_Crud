import { useState,useEffect } from "react";
import {getStudents} from "./service/studentService";

import EstudianteForm from "./components/EstudianteForm";
import EstudianteTable from "./components/EstudianteTable";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  const fetchEstudiantes = async () => {
      let data = await getStudents();
      if (data) setEstudiantes(data);
      console.log('FETCH ESTUDIANTES');
  };

  return (

    <div className="app">
      <div className="container">
        <div className="header">
          <h1>Gestión de Estudiantes</h1>
        </div>
        <div className="form-container">
          <EstudianteForm fetchEstudiantes={fetchEstudiantes}/>
        </div>
        <div className="table-container">
          <EstudianteTable dataStudents={estudiantes} fetchEstudiantes={fetchEstudiantes}/>
        </div>
      </div>
    </div>
  );
}

export default App;
