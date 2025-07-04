import React from 'react'
import FMessage from '../functional/message.functional';
import Counter from '../functional/counter';
import ListOfCourses from "../listofcourses/listofcourses";
import Posts from '../posts/posts';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import CourseDetails from '../course/CourseDetails';
import Navbar from '../Navbar';

function App() {
  return (
    <BrowserRouter>
    {/* <a href='/'>Courses </a> | 
    <a href='/posts'>Posts </a> |
    <a href='/counter'>Counter </a> 
    above reloads the page aaianst spa solution is link */}

     {/* <Link to='/'>Courses </Link> | {" "}  
    <Link to='/posts'>Posts </Link> |  {" "}
    <Link to='/counter'>Counter </Link>  */}
      <Navbar />
      <Routes>
        <Route path='/' element={<ListOfCourses/>}/>
        <Route path='/posts' Component={Posts}/>
        <Route path='/counter' Component={Counter}/>
         <Route path="/Coursedetails/:id" element={<CourseDetails />} />
        <Route path='*' element={<img src='https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1756944000&v=beta&t=BmiOV7zE4n6uu9FyS4bB1ajJtQhYZNvHu2Q6bsQPXYg' width="1000px"/>}/> 
        {/* * is like catch above one not match then * */}
      </Routes>
    </BrowserRouter>
  
  )
}



// import React from 'react'
// import FMessage from '../functional/message.functional';
// import Counter from '../functional/counter';
// import ListOfCourses from "../listofcourses/listofcourses";
// import Posts from '../posts/posts';

// function App() {
//   // return (
//   //   <div>
//   //   {/* <FMessage msg="God"/>
//   //   <FMessage msg="Hello"/>
//   //   <FMessage msg="dhhihoehoeh"/> */}
//   //   <Counter />
//   // </div>
//   // )

//   return (
//     <div>
//       <ListOfCourses />
//       <Counter />
//        {/* <Posts /> */}
//     </div>

//   )
// }

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

