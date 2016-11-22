var express = require('express');
var router = express.Router();

router.get('/portfolio', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('portfolio', {
    pageTitle: 'Portfolio',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerList'
  });
});



module.exports = router;
