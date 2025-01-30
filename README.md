# Single Page Application (SPA) with React Router DOM

This project is a **Single Page Application (SPA)** built using **React** and **React Router DOM**. It allows navigation between multiple pages (components) without reloading the entire application. The layout is shared across all pages, providing a seamless user experience.

---

## Features

- **Single Page Application (SPA)**: Navigate between pages without reloading the entire application.
- **Shared Layout**: A common layout (`<Layout />`) is used across all pages.
- **Dynamic Routing**: Supports dynamic routes (e.g., `/user/:id`).
- **Data Loading**: Uses a `loader` function to fetch data before rendering a component (e.g., GitHub information).
- **React Router DOM**: Utilizes the latest features of React Router DOM (v6+).

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: A library for routing in React applications.
- **JavaScript (ES6+)**: Modern JavaScript syntax for writing clean and efficient code.

---

## Project Structure

The application is structured as follows:

1. **Layout Component (`<Layout />`)**:
   - The shared layout for all pages.
   - Contains common UI elements like headers, footers, or navigation menus.

2. **Pages**:
   - **Home (`<Home />`)**: The default page displayed at the root path (`/`).
   - **About (`<About />`)**: A page displayed at the `/about` path.
   - **Contact (`<Contact />`)**: A page displayed at the `/contact` path.
   - **User (`<User />`)**: A dynamic page displayed at the `/user/:id` path, where `:id` is a parameter.
   - **Github (`<Github />`)**: A page displayed at the `/github` path, which uses a `loader` function to fetch data before rendering.

3. **Routing Configuration**:
   - The routing is configured using `createBrowserRouter` and `createRoutesFromElements` from React Router DOM.
   - The `loader` function (`githubInfoLoader`) is used to fetch data for the GitHub page.


---

## Key Features Explained

1. **Shared Layout (`<Layout />`)**:
   - The `<Layout />` component is used as the parent route (`path="/"`).
   - All child routes (e.g., Home, About, Contact) are rendered inside the `<Layout />` component.

2. **Dynamic Routing (`/user/:id`)**:
   - The `:id` parameter allows dynamic routing. For example, `/user/1` and `/user/2` will render the same `<User />` component but with different `id` values.

3. **Data Loading (`loader`)**:
   - The `loader` function (`githubInfoLoader`) is used to fetch data before rendering the `<Github />` component.
   - This ensures that the data is available when the component is rendered.

4. **React Strict Mode**:
   - The application is wrapped in `<React.StrictMode>` to highlight potential issues during development.

---

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/zeeshan2002/single-page-app
   cd 07rect-router
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   - The application will open in your default browser at `http://localhost:5173`.

---

## Usage

1. **Home Page**:
   - Navigate to the root path (`/`) to view the `<Home />` component.

2. **About Page**:
   - Navigate to `/about` to view the `<About />` component.

3. **Contact Page**:
   - Navigate to `/contact` to view the `<Contact />` component.

4. **User Page**:
   - Navigate to `/user/:id` (e.g., `/user/1`) to view the `<User />` component with a dynamic `id`.

5. **GitHub Page**:
   - Navigate to `/github` to view the `<Github />` component. The `loader` function fetches data before rendering the component.


---

## Acknowledgments

- **React Router DOM**: For providing a powerful routing solution for React applications.
- **React**: For enabling the creation of dynamic and interactive user interfaces.

