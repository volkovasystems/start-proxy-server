var startProxyServer = function startProxyServer( host, port, proxyPort, handlerSet ){

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

var httpProxy = require( "http-proxy" );

exports.startProxyServer = startProxyServer;
