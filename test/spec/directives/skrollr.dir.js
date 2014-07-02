'use strict';

describe('Directive: skrollr.dir', function () {

  // load the directive's module
  beforeEach(module('eduardomarinFsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<skrollr.dir></skrollr.dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the skrollr.dir directive');
  }));
});
