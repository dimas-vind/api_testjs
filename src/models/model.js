const { db } = require("../config/db")

const queryAll = async () => {
    const QUERY = `SELECT nama_peserta AS nama, nama_perusahaan AS perusahaan
                   FROM peserta 
                   INNER JOIN perusahaan 
                   ON peserta.id_perusahaan=perusahaan.id`


    return (await db).execute(QUERY)
}

module.exports = {
    queryAll
}