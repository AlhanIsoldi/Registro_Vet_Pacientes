//Los componentes se pueden crear todos en un solo archivo o puede ser uno por archivo
//Los componentes son funciones

function Header(){
    
    return(
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto"> 
            Seguimiento pacientes {" "}
            <span className="text-indigo-600">Veterinaria</span>
        </h1>
    )
}

export default Header