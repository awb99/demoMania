var R = require ("ramda")

var buffaloSpringfield = [
    {id: 824, name: 'Richie Furay', age: 10},
    {id: 956, name: 'Dewey Martin', age: 10},
{id: 313, name: 'Bruce Palmer', age: 10},
    {id: 456, name: 'Stephen Stills', age: 10},
{id: 177, name: 'Neil Young', age: 10}

];
var csny = [
    {id: 204, name: 'David Crosby',  score: 10},
    {id: 456, name: 'Stephen Stills',  score: 10},
    {id: 539, name: 'Graham Nash',  score: 10},
    {id: 177, name: 'Neil Young',  score: 10}

];

var x = R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
console.log (JSON.stringify (x))
