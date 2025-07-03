import React from 'react'
import FMessage from '../functional/message.functional';
import Counter from '../functional/counter';
import ListOfCourses from "../listofcourses/listofcourses";
import Posts from '../posts/posts';

function App() {
  // return (
  //   <div>
  //   {/* <FMessage msg="God"/>
  //   <FMessage msg="Hello"/>
  //   <FMessage msg="dhhihoehoeh"/> */}
  //   <Counter />
  // </div>
  // )

  return (
    <div>
      <ListOfCourses />
      <Counter />
       {/* <Posts /> */}
    </div>

  )
}

export default App;



//class
// import React from "react";
// import ListOfCourses from "../listofcourses/listofcourses";
// import FMessage from "../functional/message.functional";

// class App extends React.Component {
//   render() {
//     // return <ListOfCourses />;
//     return <div>
//       <FMessage msg="God"/>
//       <FMessage msg="Hello"/>
//       <FMessage msg="dhhihoehoeh"/>
//     </div>
//   }
// }

// export default App;

