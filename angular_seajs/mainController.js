/**
 * Created by CY on 2014/11/23.
 */
define(function(require,exports,modules){
    console.log('main controller init log');
    exports.ctrl = function($rootScope,$scope) {
        console.log('main controller ctrl log');
        $scope.text = "个人主页";
    };
});
