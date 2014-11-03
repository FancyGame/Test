/**
 * Created by CY on 2014/11/3.
 */

require.config({
    paths: {
        jquery: 'jquery-1.7.2'
    }
});

require(['jquery'], function($) {
    alert($().jquery);
});