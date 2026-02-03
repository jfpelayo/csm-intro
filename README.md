# CSM Scheduler Intro Project

Welcome to the CSM Scheduler Intro Project! This repository contains a scaffolded full-stack web application designed to help you learn and practice web development with Django, React, and SCSS.

## Project Overview

You act as the engineering team for Computer Science Mentors (CSM). Your goal is to build a simplified version of the **Scheduler**, the tool used by thousands of Berkeley students to enroll in sections.

The project is split into two parts:
1.  **Backend (Django + PostgreSQL)**: Handles data storage and API logic.
2.  **Frontend (React + TypeScript + SCSS)**: Provides the user interface for students.

## Simplified Logic
We have removed complex authentication and attendance.
- **Students** and **Mentors** are simplified: they just have a `name` and `email`.
- **Enrolling** simply means creating a "Student" record linked to a "Section" and "Course".

## Architecture

- **Backend**: Django Rest Framework (DRF) serving a JSON API.
- **Frontend**: Vite-powered React app consuming the API.
- **Database**: PostgreSQL.
- **Infrastructure**: Docker Compose orchestrates the services.

## Getting Started

1.  **Prerequisites**: Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.
2.  **Run the App**:
    ```bash
    docker-compose up --build
    ```
3.  **Access**:
    - Backend API: [http://localhost:8000/api/](http://localhost:8000/api/)
    - Admin Panel: [http://localhost:8000/admin/](http://localhost:8000/admin/)
    - Frontend: [http://localhost:5173/](http://localhost:5173/)

## Assignment Tasks

Form a team of 4 (2 Backend, 2 Frontend). You should be able to finish this in ~5 hours.

### Backend Team Tasks

1.  **Section Enrollment Logic**:
    - The `SectionViewSet` currently exposes generic CRUD.
    - **Task**: Implement a custom action `enroll` on `SectionViewSet`.
        - It should accept `name` and `email` in the body.
        - Validate if the student can enroll (check capacity, check if email is already enrolled in this course).
        - Create the `Student` object linking to the `Section`.
        - Return a success message or error.
2.  **Course Stats API**:
    - **Task**: Write a new API endpoint using the `@api_view(["GET"])` decorator.
    - Path: `api/course-capacities/` (or similar).
    - It should return a list of courses with their current enrollment counts vs capacity (e.g., `[{"course": "CS61A", "enrolled": 50, "capacity": 100}, ...]`).
        - *Hint*: You'll need to aggregate data from Sections.

### Frontend Team Tasks

1.  **Course Catalog**:
    - Create a page that lists all available `Courses`.
    - Clicking a course should show its details.
2.  **Section Browser & Enrollment**:
    - When viewing a Course, show a list of associated `Sections`.
    - Display time, location ("Spacetimes"), and capacity (e.g., "3/5 enrolled").
    - **Task**: Add an "Enroll" button.
        - When clicked, prompt the user for their **Name** and **Email** (simple modal or javascript prompt).
        - Call your Backend's `enroll` endpoint.
        - Refresh the list to show the new enrollment count.
3.  *(Optional)* **Stats Integration**:
    - Display the data from the new `Course Stats API` somewhere on the home page.

### Collaboration

- **Git Branching**: Use feature branches.
- **API Design**: Agree on the `enroll` payload format before starting!

## Resources

- [Django REST Framework @action](https://www.django-rest-framework.org/api-guide/viewsets/#marking-extra-actions-for-routing)
- [Django REST Framework @api_view](https://www.django-rest-framework.org/api-guide/views/#function-based-views)
- [React Documentation](https://react.dev/learn)
- [Sass Documentation](https://sass-lang.com/documentation/)

Good luck!
