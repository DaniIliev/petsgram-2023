const photoService = require('../manager/photoService')


exports.create = (req,res) => {
    const {name, age,description,location,imageUrl} = req.body

    const owner = req.user

    photoService.create(name, age,description,location,imageUrl, owner)
    res.redirect('/catalog')
}


exports.getEditPage = async (req,res) => { 
    const photoId = req.params.id
    const photo = await photoService.findById(photoId)
    res.render('edit', photo)
}

exports.editPhoto = async (req,res) => {
    const {name, age, description, location, imageUrl} = req.body
    const id = req.params.id
    await photoService.update(id, {name, age, description, location, imageUrl})
    res.redirect(`/details/${id}`)
}

exports.getComment = async (req,res) => {
    const photoId = req.params.id
    const photo = await photoService.findById(photoId)
    const comments = req.body.comment
    photo.commentars.push(comments)

    res.redirect(`/details/${photoId}`)
}
