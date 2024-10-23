const {Ice} = require('../../db');

const updateIceDataController = async (id_ice, newDataIce) => {
    try {
        const data = await Ice.findByPk(id_ice)
        if (!data) {
            throw new Error('El helado no existe');
        }

        await data.update(newDataIce);
        await data.reload()

        return { message: "Datos actualizado exitosamente", data };
    } catch (error) {
        console.error("Error al actualizar Helado:", error.message);
      return { message: "Error al actualizar Heleado" };
    }
}

module.export = updateIceDataController;