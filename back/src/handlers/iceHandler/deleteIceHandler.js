const deleteIceHandler = async (req,res) => {
    const {id_ice} = req.params
    try {
        const response = await deleteIceController(id_ice)
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
        throw new Error(`Error al eliminar el helado en handler: ${error.message}`);
    }
}

module.exports = deleteIceHandler;