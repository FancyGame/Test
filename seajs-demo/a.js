define(function(require) {
    console.log('### a.js ###');

	var cache = require('cache');
	
	function ad() {
		//...
	}
	
	// 使用返回值导出接口
	return ad;
});