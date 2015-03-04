'use strict';

/**
 * @ngdoc filter
 * @name rfx.filter:checkmark
 * @description
 * Filter that returns ✓ for true; and ✘ for false input.
 */
angular.module('rfx')
  .filter('checkmark', function () {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
