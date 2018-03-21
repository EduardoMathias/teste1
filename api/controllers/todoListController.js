var mongoose = require('mongoose'),
  Fam = mongoose.model('Fam');

exports.list_all_fam = function(req, res) {
  Fam.find({}, function(err, fam) {
    if (err)
      res.send(err);
    res.json(fam);
  });
};




exports.create_a_fam = function(req, res) {
  var new_fam = new Fam(req.body);
  new_fam.save(function(err, fam) {
    if (err)
      res.send(err);
    res.json(fam);
  });
};


exports.read_a_fam = function(req, res) {
  Fam.findById(req.params.famId, function(err, fam) {
    if (err)
      res.send(err);
    res.json(fam);
  });
};


exports.update_a_fam = function(req, res) {
  Fam.findOneAndUpdate({_id: req.params.famId}, req.body, {new: true}, function(err, fam) {
    if (err)
      res.send(err);
    res.json(fam);
  });
};


exports.delete_a_fam = function(req, res) {


  Fam.remove({
    _id: req.params.famId
  }, function(err, fam) {
    if (err)
      res.send(err);
    res.json({ message: 'Member successfully deleted' });
  });
};