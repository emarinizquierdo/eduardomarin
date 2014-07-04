'use strict';

describe('Service: Lang', function () {

  // load the service's module
  beforeEach(module('eduardomarinFsApp'));

  // instantiate service
  var Lang;
  beforeEach(inject(function (_Lang_) {
    Lang = _Lang_;
  }));

  it('should do something', function () {
    expect(!!Lang).toBe(true);
  });

});
