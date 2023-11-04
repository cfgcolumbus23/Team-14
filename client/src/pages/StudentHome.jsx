import React from 'react';

const StudentHome = ( {courses} ) => {
    courses = {};
    courses['Basic Computer Skills'] = 'www.google.com';
    courses['Internet Basics'] = 'www.youtube.com';
    courses['Using Email'] = 'www.instagram.com';

    return (
        <div class="StudentHome">
            <h2>Welcome, Student!</h2>
            <h3>Courses</h3>
            <ul>
                
            {Object.entries(courses).map(([course, link], index) => (
                <li key={index}>{course}: <a href={link}>{link}</a></li>
            ))}
            </ul>
        </div>
    )
}

export default StudentHome;