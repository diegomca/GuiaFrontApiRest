export const actualizarTareaEstado = async (id, callback) => {
  try {
    const response = await fetch(
      `http://localhost:4000/tareas/update_estado/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          estado: "Completada",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const dataIn = await response.json();
    console.log(dataIn);
    callback(true);
  } catch (error) {
    console.error("There was an error fetching data:", error);
  }
};

export const borrarTarea = async (id, callback) => {
  try {
    const response = await fetch(`http://localhost:4000/tareas/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const dataIn = await response.json();
    console.log(dataIn);
  } catch (error) {
    console.error("There was an error fetching data:", error);
  }
};

export const crearTarea = async (callback) => {
  try {
    const response = await fetch(`http://localhost:4000/tareas/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: "Tarea 1",
        descripcion: "Descripcion tarea 1",
        estado: "Pendiente",
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const dataIn = await response.json();
    console.log(dataIn);
  } catch (error) {
    console.error("There was an error fetching data:", error);
  }
};
