import {deleteStudent} from "../service/studentService";

function EstudianteTable({  dataStudents, fetchEstudiantes }) {


  const eliminarEstudiante = async (id) => {
    await deleteStudent(id);
    fetchEstudiantes();
  };
  return (
      <table>
        <thead>
          <tr>
            <th >Nombre</th>
            <th >Dirección</th>
            <th >Teléfono</th>
            <th >Observacion</th>
            <th >Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataStudents.map((est) => (
            <tr key={est.id} className="hover:bg-gray-50">
              <td >{est.Nombre}</td>
              {/* <td>
                    {editando === estudiante.id ? (
                      <input
                        type="text"
                        value={estudianteEditado.nombre}
                        onChange={(e) => setEstudianteEditado({ ...estudianteEditado, nombre: e.target.value })}
                      />
                    ) : (
                      estudiante.nombre
                    )}
                  </td> */}
              <td >{est.Direccion}</td>
              <td >{est.Telefono}</td>
              <td >{est.Observacion}</td>
              <td className="actions">
                 <button className="edit-btn">✏️ Editar</button>
                <button
                  onClick={() => eliminarEstudiante(est.id)}
                  className="delete-btn"
                >
                  🗑️ Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default EstudianteTable;
