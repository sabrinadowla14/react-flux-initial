$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/home');
var Projects = require('./components/projects/project');
var About = require('./components/about/about');
var Header = require('./components/share/header');
//we are passing window as win
(function(win) {
  "use strict";
    var App = React.createClass({
    render: function() {
    //keep tarck which child we are going to render
    var Child;
    switch(this.props.route) {
      case 'about': Child = About; break;
      case 'projects': Child = Projects; break;
      default: Child = Home;
    }

    return (
      <div>
        <Header/>
        <Child />
      </div>
      );
     }
  });
  function render() {
      //getting the route by getting the piece of URL
      var route = win.location.hash.substr(1);
      //call our App pass route as a property
      React.render(<App route={route} />, document.getElementById('app'));
    }
  //we need to watch for hash change, going to add an 
  //event listener, hashchange is the even which occurs
  //in the URL
    win.addEventListener('hashchange', render);
    //call the render function
    render();
})(window);
    


