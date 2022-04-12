export const Paciente = ( {paciente, setPaciente, eliminarPaciente} ) => {
  //console.log(paciente.id)
  const {nombre, propietario, email, alta, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente')

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 bg-gray-100 shadow-md p-5 rounded-md">
          <p className="font-bold mb-3 text-gray-700 uppercase" > Nombre: {" "}
            <span className="font-normal normal-case"> {nombre} </span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase" > Dueño: {" "}
            <span className="font-normal normal-case">{propietario} </span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase" > Email: {" "}
            <span className="font-normal normal-case">{email}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase" > Fecha alta: {" "}
            <span className="font-normal normal-case">{alta}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase" > Sintomas: {" "}
            <span className="font-normal normal-case">{sintomas}</span>
          </p>

          <div className="mt-10">
            <button 
            type="button" 
            className="py-2 px-7 mr-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            onClick={() => setPaciente(paciente)}
            >
              Editar
            </button>

            <button 
            type="button" 
            className="py-2 px-7 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
            onClick={handleEliminar}
            >
              Eliminar
            </button>
          </div>
    </div>
  )
}
