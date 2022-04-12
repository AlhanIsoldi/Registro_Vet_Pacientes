import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente }) => {
  //Los hooks se colocan en la parte superior de los componentes
  //No se colocan dentro de condicionales ni despues de un return
  //Se colocan dentro de la función
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
      
    }
  }, [paciente])


  const generarId = () => {
   return Math.random().toString(36).substring(2) + Date.now().toString(36)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      console.log('Hay un campo vacio')

      setError(true)
      return
    }

    setError(false)

    //Objeto con los datos del paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      
    }

    //Editar los datos del paciente
    if(paciente.id){
      //Editar registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //Agregar registro
      objetoPaciente.id= generarId()
      setPacientes([...pacientes, objetoPaciente])
    }


    //console.log(objetoPaciente));

    

    //Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        {' '}
        Seguimineto pacientes{' '}
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        añade pacientes y {''}
        <span className="text-indigo-600 font-bold"> Administralos </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase fontbold"
          >
            Nombre mascota
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase fontbold"
          >
            Nombre dueño
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase fontbold"
          >
            Correo
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase fontbold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase fontbold "
          >
            Sintomas
          </label>
          <textarea
            className="w-full"
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          className="bg-indigo-600 w-full p-3 text-white uppercase fontbold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  )
}

export default Formulario
