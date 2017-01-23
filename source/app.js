var React = require('react');
var ReactDOM = require('react-dom');
// var reactElement = React.createElement('h1');

// var h1 = React.createElement('h1', {className: 'header', key:'header'}, 'This is React');
// var p = React.createElement('p', {className:'content', key:'content'}, "And that's how it works.");
// var reactFragment = [h1, p];
// var section = React.createElement('section', {className:'container'}, reactFragment)
//
// var listItemElement1 = React.createElement('li', {className:'item-1', key:'item-1'}, 'Item-1');
// var listItemElement2 = React.createElement('li', {className:'item-2', key:'item-2'}, 'Item-2');
// var listItemElement3 = React.createElement('li', {className:'item-3', key:'item-3'}, 'Item-3');
//
//
// var reactFragment = [listItemElement1, listItemElement2, listItemElement3];
// var listOfItems = React.createElement('ul', {className: 'list-of-items'}, reactFragment);

var createListItemElement = React.createFactory('li');

var listItemElement1 = React.createListItemElement({className:'item-1', key:'item-1'}, 'Item-1');
var listItemElement2 = React.createListItemElement({className:'item-2', key:'item-2'}, 'Item-2');
var listItemElement3 = React.createListItemElement({className:'item-3', key:'item-3'}, 'Item-3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];

ReactDOM.render(listOfItems, document.getElementById('react-application'));
