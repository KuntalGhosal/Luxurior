#!/usr/bin/env node

var http = require('http')
  , webapp = require('./webapp');

http.createServer(webapp.bind([])).listen(8000);
//                ^^^^^^^^^^^^^^^
//                       |            (x)
//                  ROFLSCALE DEQUE ---/

// http://localhost:8000/push/1    -> 1
// http://localhost:8000/push/2/3  -> 3
// http://localhost:8000/unshift/4 -> 4

// http://localhost:8000/          -> [ "4", "1", "2", "3" ]

// http://localhost:8000/pop       -> "3"
// http://localhost:8000/shift     -> "4"

function Thing() { }
Thing.prototype.set = function(k, v) { return this[k] = v; };
Thing.prototype.get = function(k) { return this[k]; };
http.createServer(webapp.bind(new Thing())).listen(8001);
//                ^^^^^^^^^^^^^^^^^^^^^^^^
//                            |               (x)
//                       ROFLSCALE NOSQL DB ---/

// http://localhost:8001/set/name/joe -> "joe"
// http://localhost:8001/set/age/30   -> "30"

// http://localhost:8001/          -> {"name":"joe","age":"30"}

// http://localhost:8001/get/age   -> "30"
