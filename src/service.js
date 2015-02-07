'use strict';

/**
 * @ngdoc service
 * @name rfx.rest
 * @description
 * # rest
 * Service to talk with backend api.
 */
angular.module('rfx')
  .service('rest', function () {

    /**
     * @ngdoc
     * @name rfx.rest#get
     * @methodOf rfx.rest
     *
     * @description
     * Method to get data form the backend api
     * @example
     * rest.get(id);
     * @param {int} entity id
     * @returns {httpPromise} resolve with fetched data, or fails with error description.
     */
    this.get = function () {
    };
  });
