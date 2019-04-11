"use strict";

module.exports = {
    "plugins": [
		"@babel/plugin-transform-runtime"
	],
	"presets": [
		[
			"@babel/preset-env",
			{	
				"targets": {
              				"chrome": "49"
            			},
				"useBuiltIns": "usage"
			}
		]
	],
	"only": [
		"src/*.js"
	],
	"minified": true,
	"comments": false
};
