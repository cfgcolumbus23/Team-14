import React from 'react';
import '../App.css'

const CourseList = ({taken}) => {
  const courses = [
    { courseName: 'Course 1', gradeName: 'Test Grade' },
    { courseName: 'Course 2', gradeName: 'Test Grade' },
    { courseName: 'Course 3', gradeName: 'Test Grade' },
  ];

  taken = {};
  
    taken['Basic Computer Skills'] = 'www.google.com';
    taken['Internet Basics'] = 'www.youtube.com';
    taken['Using Email'] = 'www.instagram.com';
    taken = {}
    taken['Northstar Digital: Basic Computer Skills Course'] = {'link': 'https://nsdiglit.org/practice-computers', 'taken': true};
    taken['Northstar Digital: Email Course'] = {'link': 'https://assessment.digitalliteracyassessment.org/email/practice/understanding-email', 'taken': false};
    taken['NorthStar Digital: Word Course'] = {'link': 'https://nsdiglit.org/ms-word', 'taken':true};
    taken['NorthStar Digital: Career Search Skills'] = {'link': 'https://nsdiglit.org/career-search-skills', 'taken': true};

  // Count the number of courses taken
  const takenCoursesCount = Object.values(taken).filter(taken => taken.taken).length;

  // Calculate the fraction of courses taken
  const fractionTaken = takenCoursesCount / Object.keys(courses).length;

  return (
    <div>
      <h3>Student</h3>
      <progress class="colored" id="progress" value={fractionTaken * 100} max="100" > ${fractionTaken * 100}% </progress>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.courseName}
            <ul>
              <li>{course.gradeName}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;