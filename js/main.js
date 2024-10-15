//Crear array para guardar las tareas
const tareas = [];

function agregarTarea(tarea) {
    //Crear el objeto con la tarea y su estado de completada o no
    const nuevaTarea = {
        tarea: tarea,
        completada: false
    }
    //Agregar el objeto al array de tareas
    tareas.push(nuevaTarea);

    //Mostrar un mensaje de confirmacion
    alert("Tarea " + tarea + " añadida exitosamente.")
}

function listarTareas() {
    //Condicional para verificar si hay tareas
    if (tareas.length === 0) {
        console.log("No hay tareas para mostrar.");
    } else {
        console.log("Tus tareas:");
        //Bucle for para recorrer las tareas
        for (let i = 0; i < tareas.length; i++) {
            console.log(i + 1 + "." + tareas[i].tarea + " - Completada: " + tareas[i].completada);
        }
    }
}

function completarTarea(indice) {
    //Verificar si el indice es válido
    if (indice >= 1 && indice <= tareas.length) {
        tareas[indice - 1].completada = true;
        alert ('Tarea completada');
    } else {
        alert ('Indice no válido');
    }
}

function eliminarTarea(indice) {
    //Verificar si el indice es valido
    if (indice > 0 && indice <= tareas.length) {
        const tarea = tareas.splice(indice - 1, 1);
        alert('Tarea eliminada');
    } else {
        alert('Indice no válido');
    }
}

function gestionarTareas() {
    let salir = false;

    while (!salir) {
        let accion = prompt(`¿Qué te gustaría hacer? 
            1. Agregar tarea 
            2. Lista de tareas 
            3. Completar tarea 
            4. Eliminar tarea 
            5. Salir`);

        switch(accion) {
            case '1':
                let nuevaTarea = prompt("Ingrese la tarea que desee:");
                agregarTarea(nuevaTarea);
                break;
            case '2':
                listarTareas();
                break;
            case '3':
                let tareaACompletar = parseInt(prompt("Ingresa el numero de la tarea a completar"));
                completarTarea(tareaACompletar);
                break;
            case '4':
                let tareaAEliminar = parseInt(prompt("Ingrese el numero de la tarea a eliminar"));
                eliminarTarea(tareaAEliminar);
                break;
            case '5':
                salir = true;
                alert("Vuelve Pronto!");
                break;
            default:
                alert("Opción inválida, intenta nuevamente");
        }
    }
}

gestionarTareas();