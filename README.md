# AgntUX Documentation

Welcome! Thank you for your interest in contributing to the AgntUX documentation. This repository contains the source files for the documentation website.

## Contributing

We welcome contributions to improve the documentation! Here's how to get started:

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/docs.git
   cd docs
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the documentation site

### Making Changes

1. **Create a new branch** for your changes:
   ```bash
   git checkout -b your-branch-name
   ```
2. **Make your edits** to the documentation files (see Directory Structure below)
3. **Test your changes** by running the dev server and checking the site
4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
5. **Push to your fork**:
   ```bash
   git push origin your-branch-name
   ```
6. **Submit a Pull Request** on GitHub

### Directory Structure

The documentation is organized using a simple folder structure:

- **`content/`** - Contains all documentation markdown files
  - Folders represent **categories** in the navigation
  - Files within folders represent **items** in the navigation
  - Use number prefixes (e.g., `01-`, `02-`) to control the order:
    - `01-introduction/` - First category
    - `02-getting-started/` - Second category
    - `01-introduction/01-welcome.md` - First item in Introduction
    - `01-introduction/02-overview.md` - Second item in Introduction

**Important Notes:**
- Number prefixes control the order of categories and files in the navigation
- Number prefixes are automatically removed from display names in the navigation
- All files should be `.md` (Markdown) format
- The folder and file names (without prefixes) will be converted to title case for display

### Example

To add a new section "Advanced Usage" after "Getting Started":

1. Create folder: `content/03-advanced-usage/`
2. Add files: `content/03-advanced-usage/01-setup.md`, `content/03-advanced-usage/02-examples.md`
3. The navigation will automatically show:
   - **Advanced Usage** (category)
    - Setup (item)
    - Examples (item)

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production site
- `npm run lint` - Run the linter

## Thank You!

Thank you for taking the time to contribute to the AgntUX documentation! Your contributions help make the documentation better for everyone.
