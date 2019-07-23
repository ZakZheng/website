import React, { useState, useEffect } from "react";

// export default class MyCount extends Component {
//   interval: number;

//   state = {
//     count: 0,
//   };

//   componentDidMount = () => {
//     this.interval = setInterval(() => {
//       this.setState({
//         count: this.state.count + 1,
//       });
//     }, 1000);
//   };

//   componentWillUnmount() {
//     if (this.interval) {
//       clearInterval(this.interval);
//     }
//   }

//   render() {
//     return <span>{this.state.count}</span>;
//   }
// }

export default function MyCountFun() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{count}</span>;
}
