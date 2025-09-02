# Orbit Design System

A comprehensive design system package for building healthcare applications, built with React, TypeScript, and Tailwind CSS.

## Overview

The Orbit Design System provides a consistent set of UI components, styles, and patterns to create cohesive user experiences across healthcare applications. Built with modern web technologies and best practices, it ensures accessibility, scalability, and maintainability.

## 🚀 Features

- **50+ React Components** - From basic buttons to complex modals and sidebars
- **TypeScript Support** - Full type safety and excellent developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Storybook Integration** - Interactive component documentation and testing
- **Accessibility First** - WCAG 2.1 compliant components
- **Responsive Design** - Mobile-first approach with responsive variants
- **Theme Support** - Consistent design tokens and theming system

## 📦 Components

### Layout & Navigation
- **Sidebar** - Collapsible sidebar with icon states and sub-menus
- **Breadcrumb** - Dynamic breadcrumb with truncation and dropdown support
- **Modal** - Flexible modal with header/footer gradients and scrollable content
- **Drawer** - Side-opening drawer component
- **Tabs** - Horizontal tab navigation

### Form Elements
- **Button** - Multiple variants and sizes with icon support
- **Input** - Text input with validation states
- **Input Search** - Search input with built-in search icon
- **Input Select** - Dropdown select component
- **Checkbox** - Styled checkbox with custom states
- **Switch** - Toggle switch component

### Data Display
- **Avatar** - User avatar with fallback support
- **Badge** - Status badges and labels
- **Card** - Flexible card component
- **Progress** - Progress bars and indicators
- **Skeleton** - Loading state placeholders
- **Toast** - Notification toasts
- **Tooltip** - Contextual tooltips

### Feedback & Status
- **Banner** - Important announcements and alerts
- **Chip** - Removable tags and filters
- **Counter** - Numeric counters and indicators
- **Icons** - Comprehensive icon library
- **Illustrations** - Custom illustrations for empty states

## 🛠 Installation

```bash
npm install orbit-design-system
```

## 🎯 Usage

```jsx
import { Button, Modal, Sidebar } from 'orbit-design-system'
import 'orbit-design-system/styles'

function App() {
  return (
    <div>
      <Button variant="primary" styleVariant="primary" size="large" label="Large" />
    </div>
  )
}
```

## 📚 Documentation

Visit our [Storybook documentation](https://orbit.plumhq.com) to explore all components interactively with examples and API documentation.

## 🏗 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd design-system-test

# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build the design system
npm run build

# Run tests (if available)
npm run test
```

### Available Scripts
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run build` - Build the design system package
- `npm run build:css` - Build Tailwind CSS styles

## 📁 Project Structure

```
design-system-test/
├── design-system-test/
│   ├── ui/                    # Component library
│   │   ├── button/           # Button component
│   │   ├── modal/            # Modal component
│   │   ├── sidebar/          # Sidebar component
│   │   └── ...               # Other components
│   └── styles/               # Global styles and tokens
├── .storybook/               # Storybook configuration
├── storybook-static/         # Built Storybook documentation
└── README.md                 # This file
```

## 🎨 Design Tokens

The design system uses consistent design tokens for:
- **Colors** - Primary, secondary, surface, and semantic colors
- **Typography** - Font families, sizes, and weights
- **Spacing** - Consistent spacing scale
- **Borders** - Border radius and widths
- **Shadows** - Elevation and depth

## ♿ Accessibility

All components are built with accessibility in mind:
- Semantic HTML markup
- ARIA attributes and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Focus management

## 🤝 Contributing

We welcome contributions to the Orbit Design System! Please see our [ARCHITECTURE_README.md](./ARCHITECTURE_README.md) for detailed guidelines.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Package on npm](https://www.npmjs.com/package/orbit-design-system)
- [Storybook Documentation](https://orbit.plumhq.com)
- [PlumHQ Website](https://plumhq.com)

---

Built with ❤️ by the Plum team for the healthcare community.