var chai = require('chai'),
    chaip = require('../lib/chai-param'),
    expect = chai.expect,
    util = require('chai/lib/chai/utils');

param = chaip.param;

chai.use(chaip);

var flag = util.flag;

describe('chai-param', function(){
  describe('param method', function(){
    it('should return an assertion at the `should` property', function() {
      expect(param('', 'aparam', 'afunc').should).to.be.instanceOf(chai.Assertion);
    })

    it('should set the parameter metadata', function() {
      var assertion = param('', 'aParam', 'aFunc', 'aTopic').should;

      expect(flag(assertion, 'paramName')).to.be.equal('aParam');
      expect(flag(assertion, 'functionName')).to.be.equal('aFunc');
      expect(flag(assertion, 'message')).to.be.equal('aTopic');
    })
  })

  describe('param chain', function(){
    it('should set the parameter metadata', function() {
      var assertion = expect('', 'aTopic').param('aParam', 'aFunc');

      expect(flag(assertion, 'paramName')).to.be.equal('aParam');
      expect(flag(assertion, 'functionName')).to.be.equal('aFunc');
      expect(flag(assertion, 'message')).to.be.equal('aTopic');
    })
  })

  it('should improve assertion errors when config.improveMessages is true', function(){
    chaip.config.disableColors = true;

    expect(function() {
      param('', 'aParam', 'aFuncss').should.not.be.empty
    }).throws(chai.AssertionError, /aFuncss\: expected parameter aParam/)

    expect(function nameToGetCaller() {
      param('', 'aParam', 'nameToGetCaller', 'aTopic').should.not.be.empty;
    }).throws(chai.AssertionError, /aTopic\: expected parameter aParam [\s\S]* Called at/)

    chaip.config.disableColors = false;
  })

  it('should NOT change assertion errors when config.improveMessages is false', function(){
    chaip.config.improveMessages = false;
    expect(function() {
      param('', 'aParam', 'aFunc', 'aTopic').should.not.be.empty
    }).throws(chai.AssertionError, /aTopic\: expected '' not to be empty/)
    chaip.config.improveMessages = true;
  })
})
