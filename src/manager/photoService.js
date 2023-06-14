const Photo = require('../models/Photo')


exports.create = async (name,age,description,location,imageUrl,owner) => {
   const photo = await Photo.create({name,age,description,location,imageUrl,owner})
   return photo
}

exports.getAll = () => Photo.find()
exports.findById = (photoId) => Photo.findById(photoId).lean()

exports.deletePhotoById = (photoId) => Photo.findByIdAndDelete(photoId)
exports.update = (id, name, age, description, location, imageUrl) => Photo.findByIdAndUpdate(id, name, age, description, location, imageUrl)