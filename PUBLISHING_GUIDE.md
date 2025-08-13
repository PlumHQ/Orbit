# Publishing Guide for PlumHQ Design System

This guide walks you through publishing the Plum Design System to the [PlumHQ GitHub organization](https://github.com/PlumHQ).

## Prerequisites

1. **GitHub Access**: Ensure you have admin access to the PlumHQ GitHub organization
2. **Git Setup**: Have Git configured with your GitHub credentials
3. **Node.js**: Version 18+ installed locally

## Step 1: Prepare the Repository

### Clean up the current directory
```bash
# Remove any build artifacts
rm -rf dist
rm -rf .nx/cache

# Clean dependencies
rm -rf node_modules
npm install
```

### Build and test everything
```bash
# Build Storybook to verify everything works
npm run build-storybook

# Start Storybook locally to test
npm run storybook
```

## Step 2: Create the GitHub Repository

1. **Go to [GitHub.com](https://github.com/PlumHQ)**
2. **Click "New Repository"**
3. **Configure the repository:**
   - Repository name: `design-system`
   - Description: `Plum's comprehensive design system for healthcare applications`
   - Visibility: `Public` (recommended for open source) or `Private`
   - ✅ Add a README file: **No** (we already have one)
   - ✅ Add .gitignore: **No** (we already have one)  
   - ✅ Choose a license: **No** (we already have MIT license)

## Step 3: Initialize Git and Push

```bash
# Initialize git repository (if not already done)
git init

# Add PlumHQ remote origin
git remote add origin https://github.com/PlumHQ/design-system.git

# Stage all files
git add .

# Commit with descriptive message
git commit -m "Initial commit: Plum Design System v1.0.0

- 50+ React components with TypeScript support
- Comprehensive Storybook documentation
- Tailwind CSS styling with consistent design tokens
- Accessibility-first component library
- Responsive design patterns"

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 4: Repository Configuration

### Enable GitHub Pages (for Storybook)
1. Go to repository **Settings** > **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** 
4. Folder: **/ (root)** or **storybook-static** if you want to serve Storybook directly

### Set up branch protection
1. Go to **Settings** > **Branches**
2. Add rule for `main` branch:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date

### Configure repository topics
Add these topics in **Settings** > **General**:
- `design-system`
- `react`
- `typescript`
- `tailwind-css`
- `healthcare`
- `component-library`
- `storybook`

## Step 5: Set up NPM Publishing (Optional)

If you want to publish to NPM registry:

```bash
# Login to NPM
npm login

# Publish to NPM (as @plumhq/design-system)
npm publish --access public
```

## Step 6: Documentation Setup

### Update GitHub repository description
- **Description**: "Plum's comprehensive design system for healthcare applications"
- **Website**: Link to your Storybook deployment or main site
- **Topics**: Add relevant tags

### Create initial release
1. Go to **Releases** > **Create a new release**
2. **Tag version**: `v1.0.0`
3. **Release title**: `Plum Design System v1.0.0`
4. **Description**: 
```markdown
🎉 Initial release of the Plum Design System!

## Features
- 50+ React components with full TypeScript support
- Comprehensive Storybook documentation
- Accessibility-first design
- Tailwind CSS styling system
- Healthcare-focused UI patterns

## Components Include
- Layout: Sidebar, Modal, Drawer, Breadcrumb
- Forms: Button, Input, Checkbox, Switch, Select
- Display: Avatar, Badge, Card, Progress, Toast
- Navigation: Tabs, Dropdown Menu
- Feedback: Banner, Chip, Icons, Illustrations

Built with ❤️ by the Plum team in Bangalore, India.
```

## Step 7: Team Access

Ensure your team has appropriate access:
1. **Settings** > **Manage access**
2. Add team members with appropriate roles:
   - **Admin**: Senior developers, team leads
   - **Write**: Contributing developers  
   - **Read**: Designers, stakeholders

## Step 8: CI/CD Setup (Recommended)

Create `.github/workflows/ci.yml`:

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm run build-storybook
      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

## Verification Checklist

Before publishing, ensure:

- [ ] All components render correctly in Storybook
- [ ] No TypeScript or linting errors
- [ ] README.md is comprehensive and accurate
- [ ] package.json has correct metadata
- [ ] LICENSE file is present
- [ ] .gitignore excludes appropriate files
- [ ] All sensitive information is removed
- [ ] Build process works (`npm run build-storybook`)

## Post-Publication

1. **Share with team**: Announce the repository to your development team
2. **Documentation**: Link to the repository from internal wikis/docs
3. **Integration**: Start using components in Plum applications
4. **Maintenance**: Set up regular updates and maintenance schedules

## Support

For questions about the design system or publication process:
- Email: contact@plumhq.com
- Internal Slack: #design-system
- GitHub Issues: https://github.com/PlumHQ/design-system/issues

---

Happy coding! 🚀
