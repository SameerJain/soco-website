# UB Society and Computing Club Website

A modern, responsive website for the University at Buffalo Society and Computing Club (UB SoCo), showcasing the club's mission, events, team members, and technology news.

<div align="center">
  <img src="src/SoCo_logo.png" alt="UB SoCo Logo" width="150"/>
</div>

## Website Preview

<div align="center">
  <h3>Main Site</h3>
  <img src="src/read_me_src/main_site.jpg" alt="SoCo Homepage" width="800"/>
  
  <h3>Events Page</h3>
  <img src="src/read_me_src/events_page.jpg" alt="Events Page" width="800"/>
  
  <h3>Team Page</h3>
  <img src="src/read_me_src/out_team.jpg" alt="Team Page" width="800"/>
</div>

## Overview

This website serves as the digital home for the UB Society and Computing Club, a student organization established in Fall 2021 focused on understanding how technology shapes society. The site features a modern design with interactive elements, responsive layouts, and dedicated sections for various aspects of club activities.

## Features

- **Modern Design**: Glass-morphism UI elements with subtle animations and interactive components
- **Responsive Layout**: Fully responsive design that works on all devices from desktops to mobile phones
- **Modular CSS**: Well-organized, component-based CSS structure for maintainability
- **Interactive Elements**: Hover effects, animated backgrounds, and visual feedback
- **Content Sections**:
  - Home page with mission statement and quick links
  - Events page with upcoming and past events
  - Team page featuring student leaders and faculty advisors
  - Tech News page with curated technology and society news articles

## Project Structure

```
├── index.html              # Homepage
├── events.html             # Events listing page
├── team.html               # Team members page
├── news.html               # Tech news page
├── styles/                 # CSS files organized by component
│   ├── reset.css           # CSS reset and variables
│   ├── animations.css      # Animation keyframes
│   ├── navbar.css          # Navigation styling
│   ├── layout.css          # Layout structure
│   ├── components.css      # Reusable UI components
│   ├── events.css          # Events page specific styles
│   ├── team.css            # Team page specific styles
│   └── news.css            # News page specific styles
├── src/                    # Assets
│   ├── SoCo_logo.png       # Club logo
│   ├── favicon.ico         # Site favicon
│   ├── events_src/         # Event images
│   └── news_src/           # News article thumbnails
└── js/
    └── main.js             # JavaScript functionality
```

## CSS Structure

The CSS is organized into modular files for better maintainability:

- **reset.css**: CSS reset, variables, and base styles
- **animations.css**: Animation keyframes for various elements
- **navbar.css**: Navigation bar styling and responsive adjustments
- **layout.css**: Main layout containers and structure
- **components.css**: Reusable UI components like cards, buttons, and titles
- **Page-specific CSS**: Separate files for specialized page layouts

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS features including:
  - CSS Grid & Flexbox
  - Custom properties (variables)
  - CSS animations
  - Backdrop filters
  - Media queries
- **JavaScript**: For interactive elements
- **Font Awesome**: For icons

## Browser Compatibility

The website is designed to work on modern browsers that support CSS features like backdrop-filter and gradient text. For best experience, use:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Local Development

To work with this project locally:

1. Clone the repository:
```
git clone https://github.com/SameerJain/soco-website.git
```

2. Open any HTML file in a web browser to view the site

3. Make changes to HTML files or CSS in the styles directory

4. Refresh your browser to see changes

## Deployment

The site is designed to be deployed to any static web hosting service. No build process or server-side functionality is required.

## Contributing

If you're a club member interested in contributing to the website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## Credits

- Design & Development: UB SoCo Web Team
- Logo and Branding: UB SoCo
- Font Awesome: For iconography

## License

This project is maintained by the UB Society and Computing Club. All rights reserved.
