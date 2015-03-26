/** @jsx React.DOM */


// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.

var Service = React.createClass({

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
    
        return  (
            <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                {this.props.name} <b>${this.props.price}</b>
            </p>
        );
    
    }

});

var ServiceChooser = React.createClass({

    getInitialState: function(){
    return {
        total: 0,
        items: [
            { name: 'Web Development', price: 300 },
            { name: 'Design', price: 400 },
            { name: 'Integration', price: 250 },
            { name: 'Training', price: 220 }
        ]
    };
},

    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },

    render: function() {
    
        var self = this;
    
        return (
            <div>
            <h1>Our services</h1>
                <div id="services">
                    {
                        this.state.items.map(function(s){
                            return (<Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />)
                        })
                     }
                     <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
                </div>
            </div>
        );
    
    }
});

// Render the ServiceChooser component, and pass the array of services

React.render(
    <ServiceChooser />,
    document.getElementById('mount-point')
);