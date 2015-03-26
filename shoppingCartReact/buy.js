/** @jsx React.DOM */


// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.

var servicesList = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

var AddForm = React.createClass({displayName: "AddForm",
    shouldComponentUpdate: function(){
        return false;
    },
    newItem: function() {
        return {name: React.findDOMNode(this.refs.name).value, price: React.findDOMNode(this.refs.price).value};
    },
    render: function() {
        var self = this;
        return  (
            React.createElement("div", null,
                React.createElement("form", {className: "addForm", onSubmit: this.props.handleSubmit},
                    React.createElement("input", {type: "text", name: "name", placeholder: "Product", ref: "name"}),
                    React.createElement("input", {type: "text", name: "price", placeholder: "Price", ref: "price"}),
                    React.createElement("input", {type: "submit", value: "Add", ref: "submit"})
                )
            ));
    }

});

var Service = React.createClass({displayName: "Service",
    getInitialState: function(){
        return { active: false };
    },

    clickHandler: function (){

        var active = !this.state.active;

        this.setState({ active: active });

        // Notify the ServiceChooser, by calling its addTotal method
        this.props.addTotal( active ? this.props.price : -this.props.price );

    },

    render: function(){

        return  React.createElement("p", {className:  this.state.active ? 'active' : '', onClick: this.clickHandler},
            this.props.name, " ", React.createElement("b", null, "$", this.props.price.toFixed(2))
        );

    }

});

var ServiceChooser = React.createClass({displayName: "ServiceChooser",
    addItem: function() {
        var item = this.refs.child.newItem();
        this.state.list.push(item);
        this.setState(this.state);
    },

    deleteItem: function(item) {
        this.state.list.splice(1, 1);
        this.setState(this.state);
    },

    getInitialState: function(){
        return { total: 0,
            list : servicesList};
    },

    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },

    render: function() {

        var self = this;

        var services = this.state.list.map(function(s){
            return React.createElement(Service, {name: s.name, price: s.price, active: s.active, addTotal: self.addTotal});
        });

        return React.createElement("div", null,
            React.createElement("h1", null, "Our services"),
            React.createElement(AddForm, {ref : "child", handleSubmit: self.deleteItem}),
            React.createElement("div", {id: "services"},
                services,

                React.createElement("p", {id: "total"}, "Total ", React.createElement("b", null, "$", this.state.total.toFixed(2)))

            )

        );

    }
});


// Render the ServiceChooser component, and pass the array of services
React.render(
    React.createElement(ServiceChooser, null),
    document.getElementById('mount-point')
);

