
# Game Theory

## IIT2021179

## Project Overview

This React application incorporates various functionalities like routing, dark mode toggling using React Context API, and responsive design.

The project is organized into multiple components with well-defined responsibilities, providing a scalable structure for further development.

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

The project will be available at `http://localhost:3000`.

## Project Structure

```
├── src
│   ├── App.js            # Main application component
│   ├── ColorContext      # Context API for managing themes (dark/light mode)
│   ├── Components        # UI Components (Navbar, Sidebar, Scheduler, etc.)
│   ├── Pages             # Pages (Login, View Event, Create Event, 404 Not Found)
│   ├── index.js          # Entry point of the application
│   └── app.scss          # Global styles
```

## Key Concepts and Features

### React Context API

The app leverages the **Context API** to manage global state, such as the theme (dark or light mode). This allows easy state management without prop drilling across components. The `ColorContext` provides a mechanism to toggle dark mode across the entire app.

- `ColorContextProvider`: Wraps the app and provides the current theme state and a dispatch function to toggle between dark and light modes.
- `useContext()`: Used in components like Navbar to retrieve the current theme and apply relevant styles.

### Routing

The app uses **React Router** to manage navigation across different pages like Home, Login, and View Events and Create Events.

### Form Handling

Dynamic form inputs are managed using pre-defined configuration objects. These configurations are passed to form components, allowing for reusable and flexible form management.

- `userInpDetails`: Configures inputs for the user registration form, including field validation (e.g., username, password, email).
- Input validation patterns and error messages are included in the configuration, ensuring robust form handling.

### Responsive Design

The app is built with responsive design in mind using **CSS Grid**, **Flexbox**, and media queries. Components adapt to different screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.

## Components Overview

### Home Component

This is the main dashboard page where different sections like Navbar, Sidebar, and Schedule Calendar are displayed. It uses a grid layout to organize the page content.

### Navbar Component

The Navbar is responsible for displaying navigation links, search input, and a toggle for dark/light mode. It integrates `@mui/icons-material` icons for various functionalities like notifications, language settings, and search.

### Sidebar Component

The Sidebar provides navigation links for user and booking management. It uses `Link` from `react-router-dom` to enable navigation without reloading the page. The Sidebar also supports theme-based styling using the `darkMode` state from `ColorContext`.

### Scheduler Component

The Scheduler uses the `FullCalendar` library with the `resourceTimelinePlugin` to display events dynamically. The calendar supports resource scheduling, such as court bookings, with details like status, description, and amounts.

## Pages Overview

### Login Page

A simple page that displays a login form. This is a placeholder page that can be extended with authentication logic and form handling.

### User Lists Page

Displays a list of events with navigation links via the Sidebar. It demonstrates how to build a page layout with a sidebar, navbar, and dynamic content sections.

### 404 Page

A custom 404 page that displays when the user navigates to an undefined route. It uses a simple image and a text message indicating the page was not found.

## Theming and Styles

- **Dark Mode**: The `darkMode` state in `ColorContext` toggles the entire app's theme.
- **SCSS and Tailwind**: SCSS is used for detailed component-specific styling, while Tailwind is imported for utility-based styles, providing flexibility in layout and design.

## Running the Project

1. Install dependencies using `npm install`.
2. Start the development server using `npm start`.
3. Open the browser and go to `http://localhost:3000` to view the application.
