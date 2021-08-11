import React, { Component } from 'react';

type MyProps = {
  // using `interface` is also ok
};

type MyState = {
  count: number; // like this
};

class Counter extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("component did mount");
  }
  
  componentDidUpdate() {
    console.log("component did update");
  }

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        Counter:
        <button onClick={this.onClick}>
      		{this.state.count}
		    </button>
      </>
    );
  }
}

export default Counter;