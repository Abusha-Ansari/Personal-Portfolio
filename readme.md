# Portfolio Project

This is a personal portfolio project built using **Next.js** and **Tailwind CSS**. The project showcases various sections such as About, Projects, Contact, and more, with a modern and responsive design.

## Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Dark Mode**: Includes a theme toggle for light and dark modes.
- **Reusable Components**: Modular and reusable components for scalability.
- **Contact Form**: Functional contact form for user inquiries.
- **Project Showcase**: Displays projects with descriptions and links.

## Project Structure

The project is organized as follows:

```
app/
  globals.css          # Global styles
  layout.tsx           # Main layout component
  page.tsx             # Home page
  about/               # About section
  contact/             # Contact section
  projects/            # Projects section

components/
  ThemeProvider.tsx    # Theme context provider
  about/               # Components for About section
  contact/             # Components for Contact section
  home/                # Components for Home section
  layout/              # Layout components (Navbar, Footer, etc.)
  projects/            # Components for Projects section
  skills/              # Components for Skills section
  ui/                  # UI components (buttons, cards, etc.)

hooks/
  use-toast.ts         # Custom hook for toast notifications

lib/
  constants.ts         # Application constants
  types.ts             # TypeScript types
  utils.ts             # Utility functions
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run linting checks.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed programming language for JavaScript.

## Deployment

This project is configured for deployment on **Vercel**. The `vercel.json` file contains the necessary configuration.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries, please contact me via the contact form on the website or reach out at [abusha.ansari21@gmail.com].