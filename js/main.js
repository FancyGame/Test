/**
 * Created by CY on 2014/11/3.
 */

require.config({
    baseUrl: 'js',
//    paths: {
//        jquery: 'jquery-2.0.3'
//    }
    _end_:null
});

require(['selector', 'event'], function($, E) {
    var els = $('p');
    for (var i=0; i<els.length; i++) {
        E.bind(els[i], 'click', function() {
            alert(this.innerHTML);
        });
    }
});

//require(['selector','jquery'], function(query,j) {
//    var els = query('.wrapper');
//    console.log(els)
//    console.log(j('.wrapper').html());
//});

//require(['selector'], function(query) {
//    var els = query('.wrapper');
//    console.log(els)
//});

//require(['jquery'], function($) {
//    alert($().jquery);
//});