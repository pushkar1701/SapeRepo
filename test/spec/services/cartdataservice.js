'use strict';

describe('Service: CartDataService', function () {

  // load the service's module
  beforeEach(module('sapientApp'));

  // instantiate service
  var CartDataService;
  beforeEach(inject(function (_CartDataService_) {
    CartDataService = _CartDataService_;
  }));

  it('should do something', function () {
    expect(!!CartDataService).toBe(true);
  });

});
