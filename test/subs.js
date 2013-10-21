var assert = require('better-assert');
var subs = require('..');

describe('subs', function() {
  var str = 'my favorite {food} is a {name}';
  var obj = { food: 'fruit', name: 'peach' };
  var res = 'my favorite fruit is a peach';

  it('(str, obj)', function() {
    assert(res == subs(str, obj));
  });

  it('(str)(obj)', function() {
    assert(res == subs(str)(obj));
  });
});
