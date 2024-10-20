const deleteIceController = async (id_ice) => {
    const iceDelete = await iceModels.findByPk(id_ice)

    try {
        if (iceDelete){
            const ice = await ice.destroy({
                where: {
                    id_ice
                },
            })

            if (ice) {console.log({message: 'delete ice'});
            return ice}
            else {
                throw new Error('No se pudo eliminar el ice')
            }
            
        } 
        else {
            throw new Error('El ice no existe')
        }
    } catch (error) {
        console.log(error.message);
        throw new Error(`Error al eliminar el helado: ${error.message}`);
    }
}

module.exports = deleteIceController;