'use strict';

describe('facebook.checkStatus', function () {
  var facebook, deferredFacebookCheckStatus, deferredOauthCallback;
  beforeEach(inject(function ($q, $injector, $cordovaFacebook, OauthCallback) {
    deferredFacebookCheckStatus = $q.defer();
    spyOn($cordovaFacebook, 'getLoginStatus');
    $cordovaFacebook.getLoginStatus.and.returnValue(deferredFacebookCheckStatus.promise);

    deferredOauthCallback = $q.defer();
    spyOn(OauthCallback, 'authenticate');
    deferredOauthCallback.$promise = deferredOauthCallback.promise;
    OauthCallback.authenticate.and.returnValue(deferredOauthCallback);

    facebook = $injector.get('facebook');
  }));

  it('fails the promise when facebook is disconnected', inject(function ($rootScope) {
    var fails = jasmine.createSpy();

    facebook.checkStatus().then(null, fails);
    deferredFacebookCheckStatus.reject();
    $rootScope.$digest();

    expect(fails).toHaveBeenCalled();
  }));

  it('fails the promise when givdo oauth fails', inject(function ($rootScope) {
    var fails = jasmine.createSpy();

    facebook.checkStatus().then(null, fails);
    deferredFacebookCheckStatus.resolve({authResponse: {}});
    deferredOauthCallback.reject();
    $rootScope.$digest();

    expect(fails).toHaveBeenCalled();
  }));

  it('authenticates on oauth and returns the token', inject(function ($rootScope, OauthCallback) {
    var succeeds = jasmine.createSpy();

    facebook.checkStatus().then(succeeds);
    deferredFacebookCheckStatus.resolve({authResponse: {userID: '123', accessToken: 'facebook access token', expiresIn: '123'}});
    deferredOauthCallback.resolve({token: 'my token'});
    $rootScope.$digest();

    expect(OauthCallback.authenticate).toHaveBeenCalledWith({uid: '123', access_token: 'facebook access token', provider: 'facebook', expires_in: '123'});
    expect(succeeds).toHaveBeenCalledWith({token: 'my token'});
  }));
});
