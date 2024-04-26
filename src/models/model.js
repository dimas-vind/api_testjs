const { db } = require("../config/db")

const queryAll = async () => {
    const QUERY = `SELECT nama_peserta, nama_perusahaan 
                   FROM peserta 
                   INNER JOIN perusahaan 
                   ON peserta.id_perusahaan=perusahaan.id`


    return (await db).execute(QUERY)
}

module.exports = {
    queryAll
}