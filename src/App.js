import React from 'react';
import Item from './item.js';
import Add from './Add.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[
        'boo',
        'alice',
        'jonny',
        'mary'
      ]
    }
    this.input = React.createRef();
    this.add = this.add.bind(this);
  }

  add(name){
    var data = this.state.data;
    // var name = this.input.current.value;
    data.push(name);

    this.setState({
      data:data
    });
  }
  render(){
    var data = ['bob', 'Alice', 'tom', 'jonny'];
    return (
      <div>
      
      <ul>
        {data.map(item => <Item name={item} />)}
        
      </ul>

      <ul>
        {this.state.data.map(item => <Item name={item} />)}
      </ul>
      <Add add={this.add} />
      </div>
      
    );
  }
}



export default App;
