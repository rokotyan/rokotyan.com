const Express = require( 'express' );
const http = require( 'http' );

const port = process.env.PORT || 3090;
const app = new Express();
const server = new http.Server(app);
const dist = Express.static(`${__dirname}/dist/`);

// Static directory for express
app.use('/public', Express.static(`${__dirname}/public/`));
// Serve precompressed JavaScript when the client supports it and the build emitted it.
app.get(/\.js$/, (req, res, next) => {
  if (!req.get('Accept-Encoding') || !req.acceptsEncodings('gzip')) return next();
  const originalUrl = req.url;
  req.url = `${req.path}.gz`;
  res.set('Content-Encoding', 'gzip');
  res.type('js');
  res.vary('Accept-Encoding');
  dist(req, res, err => {
    req.url = originalUrl;
    res.removeHeader('Content-Encoding');
    res.removeHeader('Content-Type');
    next(err);
  });
});
app.use('/', dist);

// A missing asset must not be returned as the single-page application HTML.
app.get(/\.[^/]+$/, (req, res) => res.sendStatus(404));

// Set up routes
app.get(/.*/, (req, res) => {
  console.log( req.get('host'), req.url );
  // const domain = req.get('host').replace(/:.*/, '');
  res.sendFile(`${__dirname}/dist/index.html`);
});

// Listen
server.listen(port, process.env.HOST, () => {
  const host = server.address().address;
  console.log('Server is listening on http://%s:%s', host, port);
});
