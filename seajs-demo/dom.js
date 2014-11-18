define(['event'], function(require, exports, module) {
    console.log('### dom ###');
    exports.getById = function(id) {
        return document.getElementById(id);
    }
});

