/*eslint-disable*/
var expect = require('chai').expect;
var is = require('../lib/is/index');
//Array.isArray = null;

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });

  describe('is.array', function () {
    it('should return true if passed argument type is Array', function () {
      expect(is.array(['value1', 'value2'])).to.be.true;
    });
    it('should return false if passed argument type is not Array', function () {
      expect(is.array('mohamed')).to.be.false;
    });
  });
  describe('is.whoWillBeLigue1Champion', function () {
    it('should return PSG in uppercase', function() {
      expect(is.whoWillBeLigue1Champion()).to.be.equal('PSG');
    });
  });
 describe('is.boolean', function(){
   it('should return true if is boolean', function(){
    // var bool = new boolean();
     expect(is.boolean(false)).to.be.true;
     expect(is.boolean(true)).to.be.true;
   });
   it('should return false if not boolean', function(){
     expect(is.boolean('notboolean')).to.be.false;
   });
 });
 describe('is.date', function(){
   it('should return true if is date', function(){
     var date = new Date();
     expect(is.date(date)).to.be.true;
   });
   it('should return false if not date', function(){
     expect(is.date('notDate')).to.be.false;
   });
 });
 describe('is.error', function(){
   it('should return true if is error', function(){
     var erreur = new Error();
     expect(is.error(erreur)).to.be.true;
   });
   it('should return false if not error', function(){
     expect(is.error('notError')).to.be.false;
   });
 });
 describe('is.function', function(){
   it('should return true if is function', function(){
     var f = function(){
     };
     expect(is.function((f))).to.be.true;
   });
   it('should return false if not function', function(){
     expect(is.function('notFunction')).to.be.false;
   });
 });
 describe('is.nan', function(){
   it('should return true if is nan', function(){
     expect(is.nan(NaN)).to.be.true;
   });
   it('should return false if not nan', function(){
     expect(is.nan('jugj')).to.be.false;
   });
 });
 describe('is.null', function(){
 	it('should return true if passed argument type is null', function() {
 		expect(is.null(null)).to.be.true;
 	});
     it('should return false if passed argument type is not null', function(){
 		expect(is.null(1)).to.be.false;
 	});
   });
  describe('is.regexp', function(){
 	var regexp = new RegExp('ab+c', 'i');
 	it('should return true if passed argument type is a regexp', function() {
 		expect(is.regexp(regexp)).to.be.true;
 	});
     it('should return false if passed argument type is not a regexp', function(){
 		expect(is.regexp('mahma ykoun')).to.be.false;
 	});
   });
  describe('is.string', function(){
 	it('should return true if passed argument type is a string', function() {
 		expect(is.string("string")).to.be.true;
 	});
     it('should return false if passed argument type is not a string', function(){
 		expect(is.string(1)).to.be.false;
 		expect(is.string(null)).to.be.false;

 	});
   });
       describe('is.char', function(){

 	it('should return true if passed argument type is a char', function() {
 		expect(is.char('char')).to.be.true;
 	});
     it('should return false if passed argument type is not a char', function(){
 		expect(is.char("string")).to.be.false;
 		expect(is.char(1)).to.be.false;
 		expect(is.char(null)).to.be.false;

 	});
   });
   describe('is.object', function(){
 	    it('should return true if argument type is object', function() {
           var objet = {};
           function mafonction(){};
 		  expect(is.object(objet)).to.be.true;
 		  expect(is.object(mafonction)).to.be.true;
 	   });
 	    it('should return true if argument type is not object', function() {
 		  expect(is.object('what')).to.be.false;
 	});
   });
     describe('is.json', function(){
 	    it('should return true if argument type is json', function() {
           var myJSONObject = {"bindings": [
         {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"},
         {"ircEvent": "PRIVMSG", "method": "deleteURI", "regex": "^delete.*"},
         {"ircEvent": "PRIVMSG", "method": "randomURI", "regex": "^random.*"}
     ]
 };
 		  expect(is.json(myJSONObject)).to.be.true;
 	   });
 	    it('should return true if argument type is not json', function() {
 		  expect(is.json('what')).to.be.false;
 	});
   });

   describe('is.sameType',function(){
 	  it('should return true if passed parameter type is sameType',function(){
 		  var argumdents =1; var argumdents2 =2; expect(is.sameType(argumdents,argumdents2)).to.be.true;
 		  });
 		  it("should return false if passed parameter type is not sameType", function () {
 		  var notArguments = 'test'; var argumdents =1; expect(is.sameType(notArguments, argumdents)).to.be.false;
 		  });
   });
});
