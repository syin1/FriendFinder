var path = require('path');

var friends = require(path.join(__dirname, '../data/friends.js'));

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    // initialization
    var lowestscore = 100; // cannot be higher or equal to this number
    name = '';
    photo = '';

    for (var i = 0; i < friends.length; i++) {
      var individualscore = 0;
      for (var j = 0; j < req.body.scores.length; j++) {
        individualscore += Math.abs(friends[i].scores[j] - req.body.scores[j]);
      }

      if (individualscore < lowestscore) {
        name = friends[i].name;
        photo = friends[i].photo;
        lowestscore = individualscore;
      }
    }

    friends.push(req.body);
    res.json({ status: 'OK', name: name, photo: photo });
  });
};
