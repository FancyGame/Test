/**
 * Created by CY on 2014/11/23.
 */
define(function(require,exports,modules){
    console.log('profile controller init log');
    exports.ctrl = function($rootScope,$scope) {
        console.log('profile controller ctrl log');
        $scope.text = "Profile";
        $scope.number = 1;
        $scope.incremental = function(){
            $scope.number++;
        };
    };
});
