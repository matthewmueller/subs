
# tpl

  tiny string substitution

## Example

```js
// subs(tpl, obj)
var tpl = 'my favorite {food} is: {name}';
var str = subs(str, { food: 'fruit', name: 'peach' });

// currying: subs(tpl)(obj)
var tpl = 'my favorite {food} is: {name}';
var fn = subs(tpl);
var str = fn({ food: 'fruit', name: 'peach' });
```

## Installation

  Install with [component(1)](http://component.io):

    $ component install matthewmueller/tpl

## Test

    make test

## License

  MIT
