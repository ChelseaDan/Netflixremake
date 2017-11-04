const path = require('path');

var mongoose = require('mongoose');

var Media = require('../models/Media');

module.exports.getFavourites = function(req, res) {
  Media.find({}, function(err, results){
    res.json(results);
  });
}

module.exports.addToFavourites = function(req, res) {
  console.log(req);
  // if (req.params.add === 'true') {
  //   var Med = new Media();
  //   Med.save(function(err, result) {
  //     res.json(result);
  //   });
  // } else {
  //   Media.findOneAndRemove({name: req.params.id}, function(err, result) {
  //     res.json(result);
  //   })
  // }
}

// module.exports.getImage = function(req, res) {
//   mongoose.connection.db.collection('locphoto').findOne({_id: mongoose.Types.ObjectId(req.params.id)}, function(err, result){
//     if (result === null) {
//       console.log("SENDING 404");
//       res.sendStatus(404);
//       return;
//     }
//     if (result === undefined) {
//       console.log("ALSO 404");
//       res.sendStatus(404);
//       return;
//     }
//     filepath = path.join(__dirname, "..", path.normalize(result.image));
//     res.sendFile(filepath);
//   });
// }
//
// module.exports.getGalleryPictures = function(req, res) {
//   mongoose.connection.db.collection('locphoto').find({challengeId: req.params.id, main: (req.params.main === 'true')}, function(err, cursor){
//     cursor.toArray(function(err, data){
//       res.json(data);
//     });
//   });
// }
