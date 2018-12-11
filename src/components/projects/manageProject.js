"use strict";

var React = require('react');
var Router = require('react-router');
var ProjectForm = require('./projectForm');
var ProjectApi = require('../../api/projectApi');
var toastr = require('toastr');

var ManageProject = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function () {
    return {
      project: { id: '', name1: '', name2: '' }

    };
  },
  setProjectState: function (event) {

    var field = event.target.name;
    var value = event.target.value;
    this.state.project[field] = value;
    return this.setState({ project: this.state.project });
  },
  


  //passing event from child component to here
  saveProject: function (event) {
    //we don't want the default browser event to happen here
    event.preventDefault();
    
    ProjectApi.saveProject(this.state.project);
    toastr.success('Project saved.');
    this.transitionTo('projects');
  },

  render: function () {
    return (
      //Add a reference to projectForm
      <ProjectForm project={this.state.project}
        onChange={this.setProjectState}
        onSave={this.saveProject} 
         />
    );
  }

});
module.exports = ManageProject;