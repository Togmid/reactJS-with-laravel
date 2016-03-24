var React = require('react');

var MessageForm = require("./MessageForm");
var MessageList = require("./MessageList");

var Board = React.createClass({
        getInitialState() {
                return {
                        items: []
                };
        },

        updateMessage: function(json){
                this.setState({items: json});
        },

        componentDidMount: function() {
                $.getJSON("/api/list", function(json) {
                        this.setState({items: json});
                }.bind(this));
        },

        render: function() {
                return (
                        <div>
                                <MessageForm updateMessage={this.updateMessage} />
                                <MessageList items={this.state.items} />
                        </div>
                );
        }
});

module.exports = Board;

