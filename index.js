module.exports = require('./lib/chai-param');

/*
var chai = require('chai'),
    should = chai.should(),
    assert = chai.assert;

var chalk = require('chalk');

var param;

chai.config.includeStack = true;

chai.use(function(_chai, utils) {

  var config = {
    showCaller: true
  };

  var flag = utils.flag
    , getActual = utils.getActual
    , objDisplay = utils.objDisplay;

  utils.getMessage = function (obj, args) {
    var negate = flag(obj, 'negate')
      , val = flag(obj, 'object')
      , expected = args[3]
      , actual = getActual(obj, args)
      , msg = negate ? args[2] : args[1]
      , flagMsg = flag(obj, 'message')
      , flagParam = flag(obj, 'paramName');

    msg = msg || '';
    var hasActToken = msg.indexOf('#{act}') >= 0;
    msg = msg
      .replace(/#{this}/g, flagParam ? 'parameter ' + chalk.yellow(flagParam) : objDisplay(val))
      .replace(/#{act}/g, chalk.red(objDisplay(actual)))
      .replace(/#{exp}/g, chalk.green(objDisplay(expected)))
      .replace(/not to be empty/, chalk.green('not') + ' to be ' + chalk.green('empty'))
      .replace(/(below|at least) ([0-9]+)/, chalk.green('$1 $2'))
      .replace(/above ([0-9]+)/, chalk.green('above $1'));

    if(flagParam && !hasActToken)
      msg += ' but got ' + chalk.red(objDisplay(val)) + ' instead';

    var isNode = (typeof window == 'undefined');

    if(isNode && config.showCaller) // show Caller
    {
      var stackTrace = require('stack-trace')
        , path = require('path');

      var trace = stackTrace.get();

      var i = 0;
      var fnTarget = utils.flag(obj, 'functionName');

      while(i < trace.length && trace[i].getFunctionName() != fnTarget) {
        i++;
      }

      if(++i < trace.length) {
        var file = trace[i].getFileName();
        var filePath = path.dirname(file) + path.sep + chalk.blue(path.basename(file));

        msg += '\n(Called at: ' + filePath + ':' + chalk.blue(trace[i].getLineNumber()) + ')';
      }

    }

    return flagMsg ? flagMsg + ': ' + msg : msg;
  };

  utils.addMethod(chai.Assertion.prototype, 'param', function(paramName) {
    utils.flag(this, 'paramName', paramName);
  })


  param = function param(val, paramName, functionName) {
    var ass = new chai.Assertion(val, functionName);
    flag(ass, 'paramName', paramName);
    flag(ass, 'functionName', functionName);

    return { should: ass };
  }
});


function testStr(name) {
  //expect(name, "Plant.test param name").to.not.be.empty;
  //expect(name).param('name').to.exist;
  expect(name, "Plant.test").param('name').to.not.be.emptyOrWhitespaces;
  //expect(number, "Plant.test").param('number').to.be.above(5);
  should.exist(number);

}

function testNum(num) {
  //assert(num).param('num').typeOf('number')
  param(num, 'number', 'testNum').should.be.a('number').not.below(5);
}

//try {
  //testNum('5');
    testNum(4);
}
catch(ex) {
  console.error(ex.message);
}
*/
