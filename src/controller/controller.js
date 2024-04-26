const model = require('../models/model')

const controller = async (_, res) => {
    const [data] = await model.queryAll()

    res.status(200).json(data)
}

module.exports = { controller }