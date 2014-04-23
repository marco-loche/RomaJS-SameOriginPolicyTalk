var express, fs;
express = require('express');
fs = require('fs');

var main, wwwSite1, storeSite1, site2;
main = express();
wwwSite1 = express();
storeSite1 = express();
apiSite2 = express();


main.set('title', 'Cassys Client Development Environment');

main.use(logErrors);
main.use(clientErrorHandler);
main.use(errorHandler);

main.use(express.bodyParser());

main.use(function (req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.send(500, { error: 'Something blew up!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

wwwSite1.set('title', 'wwwSite1');
wwwSite1.use(express.static('./www.site1'));

storeSite1.set('title', 'storeSite1');
storeSite1.use(express.static('./store.site1'));

apiSite2.set('title', 'Site2');
apiSite2.use(express.static('./site2'));



main.use(express.vhost('www.site1.local', wwwSite1)); // Serves all subdomains via Redirect app
main.use(express.vhost('store.site1.local', storeSite1)); // Serves all subdomains via Redirect app
main.use(express.vhost('api.site2.local', site2)); // Serves top level domain via Main site2 app
main.listen(3000, function () {
  console.log('===========');
  console.log('RomaJS 23/04/2014 - Relaxing the Same Origin Policy ');
  console.log('Marco Loche ( @netamorfose )');
  console.log('===========');
  console.log('Servers are running');
  console.log('Start here http://www.site1.local:3000');
});