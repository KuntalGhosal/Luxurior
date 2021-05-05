module.exports = function webapp(req, res) {
  var s = 200, path = req.url.split('/'), r;
  try { r = path[1] === '' ? this : this[path[1]].apply(this, path.slice(2)); }
  catch(e) { s = 500; r = e; }
  res.writeHead(s, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(r));
};
