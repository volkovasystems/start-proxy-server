var startProxyServer = function startProxyServer( host, proxyPort, serverPort, handlerSet ){

	app.use( function onUse( error, request, response ){
		// all request is sent back to the server.
		// proxy server is not exposed to public..
		var newUrl = url.resolve( "http://"+ host + ":" + serverPort + "", "command" );
		proxy.web( request, response, { target: newUrl  } );
	} );

	// all socket requests are handled by mainServer
	server.listen( proxyPort, host,
		function onListen( ){
			//console.log("@:/=./|");
		} );

	// prevent timeout
	server.setTimeout ( 0,
		function onTimeout( ){
			response.writeHead( 200, { "Content-Type": "text/plain" } );
			response.end( "Server timed out!" );
		} );
};

var app = require( "express" )( );
var server = require( "http" ).Server( app );
var httpProxy = require( "http-proxy" );
var proxy = httpProxy.createProxyServer({});
var url = require( "url" );
var io = require( "socket.io" )( server );

exports.startProxyServer = startProxyServer;