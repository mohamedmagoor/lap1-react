import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button onClick={increment} className="btn increment">+</button>
        <button onClick={decrement} className="btn decrement">-</button>
      </div>
    </div>
  );
};

export default Counter;
//class based ....
// import React, { Component } from "react";
// import "./Counter.css";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   decrement = () => {
//     this.setState((prevState) => ({ count: prevState.count - 1 }));
//   };

//   render() {
//     return (
//       <div className="counter-container">
//         <h1>Counter</h1>
//         <p className="count-display">{this.state.count}</p>
//         <div className="button-group">
//           <button onClick={this.increment} className="btn increment">+</button>
//           <button onClick={this.decrement} className="btn decrement">-</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
