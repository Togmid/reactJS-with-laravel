
var React = require('react');
var MessageList = React.createClass({
        render: function() {
                console.log(this.props.items);
                var messages = this.props.items.map(function(m) {
                        return (
                                <div>
                                        <div className="name">{m.name}</div>
                                        <div className="content">{m.content}</div>
                                </div>
                        );
                });
                return (
                        <div>
                                {messages}
                        </div>
                );
        }
});

module.exports = MessageList;
