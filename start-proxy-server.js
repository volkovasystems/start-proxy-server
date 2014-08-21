var startProxyServer = function startProxyServer( port, handlerSet, boundProxyServerURL ){

	var options = { target: {
		host: host,
		port: port,
		protocol: "http:" }
	};

	var proxy = httpProxy.createProxyServer( options ).listen( proxyPort );

	proxy.on( "error", function onError( error, request, response ){
		console.log( error );
		response.writeHead( 500 );
		response.end( );
	} );

	return proxy;
};

var http = require( "http" );
var express = require( "express" ); 

module.exports = startProxyServer;
