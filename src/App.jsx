import { useState } from 'react'
import './App.css'

export default function App(){

const [arregloTareas, setArregloTareas] = useState([]) 

const agregarTarea = event => {
  event.preventDefault();
  const { value } = event.target.textotarea;
  if (!value) return;
  const nuevaTarea = {id: crypto.randomUUID(), tarea: document.querySelector
    ('input').value, completada: false}
  setArregloTareas([nuevaTarea, ...arregloTareas])
  event.target.reset();
}

const eliminarTareas = () => {
  const nuevoArreglo = arregloTareas.filter(item => !item.completada)
  setArregloTareas(nuevoArreglo)
}

const actualizarTarea = (id) => {
  const tareaActualizada = arregloTareas.find(item => item.id === id)
  tareaActualizada.completada = !tareaActualizada.completada
  setArregloTareas([...arregloTareas]) 
}

return(
    <div>
      <nav className='navbar'>
        <h1> To Do</h1>
      </nav>
      <form onSubmit={agregarTarea}>
        <input className="input" type="text" name="textotarea" placeholder="Nueva tarea" />
        <button type="submit">Añadir Tarea</button>
        <button type="button" onClick={eliminarTareas}>Eliminar Tareas Completadas</button>
    </form>
    <ul>
      {
      arregloTareas.map (item => {
        return <li key={item.id}>
          <p onClick={() => actualizarTarea(item.id)}
          className={item.completada ? 'check' : ''}
          >{item.tarea}</p>
          </li>
      })
    }
    </ul>
    </div>
  )
}