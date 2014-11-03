/**
 * Created by CY on 2014/11/3.
 */

require.config({
    paths: {
        jquery: 'jquery-2.0.3'
    }
});

require(['jquery'], function($) {
    alert($().jquery);
});