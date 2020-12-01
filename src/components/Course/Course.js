import React from "react";

const Course = ({ course }) => {
  const { title, description, teacher, company, url, date } = course;
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {teacher} on {company}. {date}.
        </h6>
        <p className="card-text">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          See Course
        </a>
      </div>
    </div>
  );
};

export default Course;
