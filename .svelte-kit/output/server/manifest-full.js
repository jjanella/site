export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.XpYumUTw.js",app:"_app/immutable/entry/app.BQgSTnW6.js",imports:["_app/immutable/entry/start.XpYumUTw.js","_app/immutable/chunks/BHfX2tkW.js","_app/immutable/chunks/w9TiaPO3.js","_app/immutable/chunks/B3yT6szo.js","_app/immutable/entry/app.BQgSTnW6.js","_app/immutable/chunks/w9TiaPO3.js","_app/immutable/chunks/Dp6gZg7-.js","_app/immutable/chunks/CEUsAAFn.js","_app/immutable/chunks/Zxz7OfLJ.js","_app/immutable/chunks/B3yT6szo.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
