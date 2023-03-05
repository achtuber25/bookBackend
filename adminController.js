const family = require('./family')

exports.login = async (req, res) => {
    let user = await family.findOne({
        name: req.body.name
    })
    if (!user) {
        return res.status(404).json({
            message: 'not found',
        });
    }
    return res.status(200).json({
        message: 'success',
        data: user
    });
}

exports.updateProfile = async (req, res) => {
    let user = await family.findOneAndUpdate({
        name: req.body.name
    }, req.body)
    if (!user) {
        return res.status(404).json({
            message: 'not found',
        });
    }
    return res.status(200).json({
        message: 'success',
        data: user
    });
}