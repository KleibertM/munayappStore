const updateIceHandler = async (req, res) => {
    const {id_ice} = req.params
    const {newDataIce} =req.body
    try {
        const response = await updateIceDataController(id_ice, newDataIce)
        res.status(200).json(response)
    } catch (error) {
        console.error("Error al actualizar Helado handler:", error.message);
      return { message: "Error al actualizar Heleado handler" };
    }
}
module.exports = updateIceHandler;