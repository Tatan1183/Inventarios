import getConnection from "./../db/database.js"

const getServicios = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, descripcion, precio FROM servicios");
        res.json(result[0]);
    } catch(error){
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getServicios
}
