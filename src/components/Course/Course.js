import React from 'react'

const Course = ({ course }) => {
    const { title, description, teacher, company, url, date } = course
    return (
        <div class="card mb-2">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{teacher}, on {company}. {date}.</h6>
                <p class="card-text">{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" class="btn btn-primary">See Course</a>
            </div>
        </div>
    )
}

export default Course
