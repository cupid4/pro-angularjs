// 현재 Express 사용을 독려하기 위해 connect 버전 사용이 불가하여 이전 버전의 connect 를 설치해야 한다.
// npm install connect@1.8.5

var connect = require('connect');
var serveStatic = require('serve-static');
connect.createServer( serveStatic("../pro-angularjs") ).listen( 5000);