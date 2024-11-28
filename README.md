# To-Do List Application

## Overview
A simple and responsive To-Do List application using ReactJS for the frontend and Django for the backend. The app allows users to create, read, update, and delete tasks, with tasks categorized into pending, completed, and overdue sections.

## Tech Stack
- **Frontend**: ReactJS, React Bootstrap
- **Backend**: Django, Django REST framework
- **Database**: SQLite (default), PostgreSQL (optional)
- **Optional**: Dockerized setup

## Setup Instructions

### Prerequisites
- Node.js and npm
- Python and pip
- Django
- (Optional) Docker

### Frontend Setup

1. Clone the repository:
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app/frontend

2. Install Dependencies:
    npm install

3. Start the React Development server:
    npm start

### Backend Setup

1. Navigate to the backend directory:
    cd ../todolist

2. Create a virutal environment and activate it:
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

3. Install backend dependencies:
    pip install -r requirements.txt

4. Run database migrations:
    python manage.py makemigrations
    python manage.py migrate

5. Start the Django development server:
    python manage.py runserver

## Running the Application Locally
1. Ensure both frontend and backend servers are running:
    Frontend: npm start (on localhost:3000)
    Backend: python manage.py runserver (on localhost:8000)

2. Open your browser and navigate to http://localhost:3000 to access the application.

##Features Implemented
1. Core Features:
    Create, read, update, and delete tasks (CRUD functionality)
    Task fields: Name, Description, Date Start, Date Due, Status
    Categorized views: Pending, Completed, Overdue (based on Date Due)

2. User Authentication (if using NextAuth.jsfor Next.jsprojects):
    User registration, login, and logout
    Secured access to tasks for authenticated users

3. State Management:
    Global state management using Redux (for handling task data and user authentication state)

4. Optional Features:
    Responsive UI with Bootstrap

### Notes
    This project includes a simple setup for both development and production environments. Additional configurations may be required for deployment.

