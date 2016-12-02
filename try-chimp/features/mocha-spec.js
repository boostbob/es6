describe('Chimp Mocha', function() {

  describe('Page title', function () {
    it('should be set by the Meteor method @watch', function (done) {
      browser.url('http://www.baidu.com');
      expect(browser.getTitle()).to.equal('百度一下，你就知道');
      done();
    });
  });

});
