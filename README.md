# Recipe Realm

This is a recipe management web application built using Java with Spring Boot for the backend API and React with TypeScript for the frontend

### Key Features

-   Users can create new recipes by adding details like name, ingredients, and instructions
-   A searchable and filterable recipe list allows easy navigation through recipes
-   Users can edit existing recipes to update their details
-   Recipes can be deleted if no longer needed

### Installation

-   Clone the repository
    -   `git clone https://github.com/samuelmbp/recipe-realm`
-   Navigate to project directory
    -   `cd recipe-realm`
-   Install dependencies for the frontend
    -   `cd frontend`
    -   `npm install`
-   Start development server
    -   `npm run dev`
-   Navigate to the `api` directory
    -   open the `ApiApplication.java` class in IntelliJ IDEA and use the `run` button (typically a green triangle icon) to compile and execute the backend

### Usage

1. Open your browser and navigate to `http://localhost:5173` to view the frontend
2. Use the frontend to interact with the recipe management system

### Backend

-   The backend API is built using Java with Spring Boot and MySQL DB
-   The API endpoints are designed to handle CRUD operations for recipes

### Frontend

-   The frontend is built using React with TypeScript
-   Routing is handled using React Router
-   The user interface allows users to view, create, edit, and delete recipes

### Technologies

-   Java | Spring Boot | JPA
-   MySQL
-   React | TypeScript
-   SASS
