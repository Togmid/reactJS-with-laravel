
var React = require('react');
var MessageForm = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		$.post(e.target.action, $(e.target).serialize(), function(json) {
			this.props.updateMessage(json);
		}.bind(this), "json");
	},

	render: function() {
		return (
			<form action="/api/list" onSubmit={this.handleSubmit}>
				<input type="text" name="name" placeholder="name" />
				<input type="text" name="content" placeholder="content" />
				<button><a className="waves-effect waves-light btn">Save</a></button>
			</form>
		);
	}
});

module.exports = MessageForm;
