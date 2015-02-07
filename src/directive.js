/**
 * @ngdoc directive
 * @name rfx.directive:rAutogrow
 * @element textarea
 * @function
 *
 * @description
 * Resize textarea automatically to the size of its text content.
 *
 * @example
   <example module="rfx">
     <file name="index.html">
         <textarea ng-model="text" r-autogrow class="input-block-level"></textarea>
         <pre>{{text}}</pre>
     </file>
   </example>
 */
angular.module('rfx', []).directive('rAutogrow', function() {
  // add helper vor measurement to body
    var testObj = angular.element('<textarea id="autogrow-helper" style="height: 0; position: absolute; top: -999px"/>');
    angular.element(window.document.body).append(testObj);

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var adjustHeight = function() {
                var height, width = element[0].clientWidth;
                testObj.css('width', width + 'px').val(element.val());
                height = testObj[0].scrollHeight;
                element.css('height', height + 18 + 'px');
            };

            // adjust on model change.
            scope.$watch(attrs.ngModel, adjustHeight);

            // model value is trimmed so adjust on enter, space, delete too
            element.bind('keyup', function(event) {
                var key = event.keyCode;
                if (key === 13 || key === 32 || key === 8 || key === 46) {
                    adjustHeight();
                }
            });
            // insert only returns & spaces and delete per context menu is not covered;
        }
    };
});
