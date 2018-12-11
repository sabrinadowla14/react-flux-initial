"use strict";

var React = require('react');
var Input = require('../share/textInput');

var ProjectForm = React.createClass({
  render: function () {
    return (
      <form>
        <h1>Manage Project</h1>
        <Input
          name="name1"
          label="Project tools"
          value={this.props.project.name1}
          onChange={this.props.onChange}
          
           />

        <Input
          name="name2"
          label="Project Language"
          value={this.props.project.name2}
          onChange={this.props.onChange}
          
           />


        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>


    );
  }

});
module.exports = ProjectForm;