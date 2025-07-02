import React, { Component } from 'react'
import Courses from './Courses'

export default class ListOfCourses extends Component {
  render() {
    var courses=[
      {id:1,title:"AWS",rating:9,price:100000,likes:5},
      {id:2,title:"SDE",rating:5,price:5000,likes:4},
      {id:3,title:"SAT",rating:7,price:60000,likes:3},
      {id:4,title:"PAC",rating:2,price:700000,likes:5},
      {id:5,title:"LIFE",rating:9,price:500000,likes:5},
    ]
    return (
      <div>
        <h1>List of Courses</h1>{
        courses.map(c=>(
            <Courses courseDetails={c}/>
        ))
        }
    </div>
    )
  }
}
