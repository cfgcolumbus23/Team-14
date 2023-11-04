import React from 'react';
import './StudentHome.css';

const StudentHome = () => {
    let courses = {}
    courses['Northstar Digital: Basic Computer Skills Course'] = {'link': 'https://nsdiglit.org/practice-computers', 'taken': true};
    courses['Northstar Digital: Email Course'] = {'link': 'https://assessment.digitalliteracyassessment.org/email/practice/understanding-email', 'taken': false};
    courses['NorthStar Digital: Word Course'] = {'link': 'https://nsdiglit.org/ms-word', 'taken':true};
    courses['NorthStar Digital: Career Search Skills'] = {'link': 'https://nsdiglit.org/career-search-skills', 'taken': true};

    // Count the number of courses taken
    const takenCoursesCount = Object.values(courses).filter(course => course.taken).length;

    // Calculate the fraction of courses taken
    const fractionTaken = takenCoursesCount / Object.keys(courses).length;
    return (
        <div class="StudentHome">
            <h3>Courses</h3>
            <progress class="colored" id="progress" value={fractionTaken * 100} max="100" > ${fractionTaken * 100}% </progress>
            <ul>
            {Object.entries(courses).map(([course, value], index) => (
                <li key={index}><a href={value.link}>{course}</a></li>
            ))}
            </ul>
            <h3>Rewards</h3>
        </div>
    )
}

export default StudentHome;