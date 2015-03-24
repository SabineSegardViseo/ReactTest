/** @jsx React.DOM */

var Item = React.createClass({
  render: function(){
	var that = this;
    return (
		<li onClick={this.props.onChange}>
			<button onClick={this.props.onClick}>Delete Me</button>
			{this.props.name}
		</li>
    )  
  }
});

var FilteredList = React.createClass({
  changeName: function(item) {
	item.name = "Sport";
	this.setState(this.state);
  },
  deleteItem: function(item) {
	 this.state.items.splice(this.state.items.indexOf(item), 1);
	 this.setState(this.state);
  },
  getInitialState: function(){
     return {
       initialItems: this.initItem(),
       items: []
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
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
	var that = this;
    return (
      <ul className="filter-list">
		{	  
		  this.state.items.map(function(item) {
          return (
			<Item key={item.id} name={item.name} onChange={that.changeName.bind(null, item)} onClick={that.deleteItem.bind(null,item)} />
		  )
        })
		}	
      </ul>
    );
  }
});

React.render(<FilteredList/>, document.getElementById('mount-point'));




