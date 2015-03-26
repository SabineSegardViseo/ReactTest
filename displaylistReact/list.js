
var Item = React.createClass({displayName: "Item",
    changeName: function(item) {
        this.state.name = "Sport";
        this.setState(this.state);
    },
    getInitialState: function(){
        return {
            name: this.props.name
        }
    },
    render: function(){
        var that = this;
        return (
            React.createElement("li", null,
                React.createElement("span", {onClick: this.changeName}, this.state.name)
            )
        )
    }
});

var FilteredList = React.createClass({displayName: "FilteredList",
    getInitialState: function(){
        return {
            initialItems: this.initItem()
        }
    },
    initItem: function() {
        var initialItems = [];
        for(i=0; i<1000; i++){
            initialItems.push({name: "Angular" + i, level : 4, category: "Developpement"});
            initialItems.push({name: "Musique" + i, level : 3, category: "Loisirs"});
            initialItems.push({name: "Espagnol" + i, level : 2, category: "Langues"});
        }
        return initialItems;
    },
    render: function(){
        var that = this;
        return (
            React.createElement("ul", {className: "filter-list"},

                this.state.initialItems.map(function(item, i) {
                    return (
                        React.createElement(Item, {key: i, name: item.name})
                    )
                })

            )
        );
    }
});

var rerender = function() {
    React.render(React.createElement(FilteredList, null), document.getElementById('mount-point'));
}




