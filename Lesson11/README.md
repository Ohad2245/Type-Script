# const var let

* var - was the only type for any vakue until ES6 version of JavaScript.
* const and let were added in the last version - ES6.

<table border = 1>
    <tr>
        <th></th>
        <th>var</th>
        <th>let</th>
        <th>const</th>
    </tr>
       <tr>
        <th>empty init</th>
        <th>yes</th>
        <th>yes</th>
        <th>no</th>
    </tr>
      <tr>
        <th>redeclare</th>
        <th>yes</th>
        <th>no</th>
        <th>no</th>
    </tr>
      <tr>
        <th>reassign</th>
        <th>yes</th>
        <th>yes</th>
        <th>no</th>
    </tr>
      <tr>
        <th>block scope-{}</th>
        <th>no</th>
        <th>yes</th>
        <th>yes</th>
    </tr>
</table>

##### var - variable
var is not in a use anymor. (old version). Var
is globally scoped.

##### let - block scoped
let is only recognized in the bloack scope - `{}`. Let can br reassigned.

##### const - constant (קבוע)
const is blocked scope, cannot be changed(immutable) , and must have value in initlization line.

### with OOP
Important note : we do not use const var and let with classes.

* in class - we use only `private` and `public`.