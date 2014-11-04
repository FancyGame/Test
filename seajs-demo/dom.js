define(['event'], function(require, exports, module) {
	console.log(module)
    exports.getById = function(id) {
        return document.getElementById(id);
    }
});

