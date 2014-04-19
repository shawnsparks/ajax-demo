var express = require( 'express' );
var app = express();
app.use( express.cookieParser() );
app.use( express.session( { secret: 'whatever' } ) );
app.use( express.bodyParser() );
app.use( '/ajax', express.static( __dirname ) );

var server = app.listen( 8080, function() {
	console.log( 'Listening on port %d', server.address().port );
} );
