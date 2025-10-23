# React TypeScript Blog

This project is a simple blog management application built with React and TypeScript. It allows users to create, read, update, and delete blog posts. The application is structured with components for better organization and reusability.

## Features

- **Post List**: Displays a list of blog posts with options to read more or delete.
- **Post Detail**: Shows the full details of a selected post.
- **Create Post**: A form to create new blog posts.
- **Edit Post**: A form to edit existing blog posts.
- **Navigation**: A navigation bar for easy access to different parts of the application.

## Technologies Used

- React
- TypeScript
- react-router-dom
- CSS for styling

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-ts-blog.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-ts-blog
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure

- `src/`: Contains all the source code for the application.
  - `components/`: Reusable components like Navbar, PostList, PostCard, PostForm, and PostDetail.
  - `pages/`: Page components for Home, CreatePost, and EditPost.
  - `routes/`: Routing configuration for the application.
  - `services/`: API service for managing posts.
  - `hooks/`: Custom hooks for managing post state.
  - `types/`: TypeScript interfaces for type safety.
  - `styles/`: Global styles for the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.