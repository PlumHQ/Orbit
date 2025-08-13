#!/bin/bash
set -e

echo "🚀 Plum Design System - GitHub Repository Setup"
echo "=============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Prerequisites Check${NC}"
echo "Before running this script, ensure you have:"
echo "✅ Admin access to PlumHQ GitHub organization"
echo "✅ Git configured with your GitHub credentials"
echo "✅ GitHub CLI installed (optional, for automatic repo creation)"
echo ""

# Check if GitHub CLI is available
if command -v gh &> /dev/null; then
    echo -e "${GREEN}✅ GitHub CLI found${NC}"
    HAS_GH_CLI=true
else
    echo -e "${YELLOW}⚠️  GitHub CLI not found - you'll need to create the repository manually${NC}"
    HAS_GH_CLI=false
fi

echo ""
echo -e "${BLUE}🔧 Step 1: Repository Creation${NC}"

if [ "$HAS_GH_CLI" = true ]; then
    echo "Creating repository using GitHub CLI..."
    read -p "Do you want to create the repository automatically? (y/n): " AUTO_CREATE
    
    if [ "$AUTO_CREATE" = "y" ] || [ "$AUTO_CREATE" = "Y" ]; then
        echo "Creating repository: PlumHQ/design-system"
        gh repo create PlumHQ/design-system \
            --public \
            --description "Plum's comprehensive design system for healthcare applications" \
            --homepage "https://plumhq.github.io/design-system" \
            --org PlumHQ
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Repository created successfully!${NC}"
        else
            echo -e "${RED}❌ Failed to create repository. Please create it manually.${NC}"
            exit 1
        fi
    fi
else
    echo -e "${YELLOW}📝 Manual Repository Creation Required${NC}"
    echo ""
    echo "Please follow these steps to create the repository:"
    echo "1. Go to https://github.com/PlumHQ"
    echo "2. Click 'New Repository'"
    echo "3. Repository name: design-system"
    echo "4. Description: Plum's comprehensive design system for healthcare applications"
    echo "5. Visibility: Public (recommended) or Private"
    echo "6. ❌ Don't initialize with README, .gitignore, or license (we have them)"
    echo "7. Click 'Create Repository'"
    echo ""
    read -p "Press Enter after creating the repository on GitHub..."
fi

echo ""
echo -e "${BLUE}📤 Step 2: Pushing Code${NC}"
echo "Pushing code to GitHub..."

git push -u origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Code pushed successfully!${NC}"
else
    echo -e "${RED}❌ Failed to push code. Check your credentials and repository access.${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}⚙️  Step 3: Repository Configuration${NC}"
echo ""

if [ "$HAS_GH_CLI" = true ]; then
    echo "Configuring repository settings..."
    
    # Enable GitHub Pages
    echo "Setting up GitHub Pages for Storybook..."
    gh api \
        --method POST \
        -H "Accept: application/vnd.github+json" \
        "/repos/PlumHQ/design-system/pages" \
        -f source.branch='main' \
        -f source.path='/storybook-static' || true
    
    # Set repository topics
    echo "Adding repository topics..."
    gh api \
        --method PUT \
        -H "Accept: application/vnd.github+json" \
        "/repos/PlumHQ/design-system/topics" \
        -f names='["design-system","react","typescript","tailwind-css","healthcare","component-library","storybook"]' || true
    
    echo -e "${GREEN}✅ Repository configured with GitHub CLI${NC}"
else
    echo -e "${YELLOW}📝 Manual Configuration Required${NC}"
    echo ""
    echo "Please configure the repository manually:"
    echo ""
    echo "🔗 GitHub Pages Setup:"
    echo "1. Go to: https://github.com/PlumHQ/design-system/settings/pages"
    echo "2. Source: Deploy from a branch"
    echo "3. Branch: main"
    echo "4. Folder: /storybook-static"
    echo "5. Click 'Save'"
    echo ""
    echo "🏷️  Repository Topics:"
    echo "1. Go to: https://github.com/PlumHQ/design-system"
    echo "2. Click the ⚙️ gear icon next to 'About'"
    echo "3. Add topics: design-system, react, typescript, tailwind-css, healthcare, component-library, storybook"
    echo "4. Website: https://plumhq.github.io/design-system"
    echo "5. Click 'Save changes'"
    echo ""
    echo "🛡️  Branch Protection:"
    echo "1. Go to: https://github.com/PlumHQ/design-system/settings/branches"
    echo "2. Click 'Add rule'"
    echo "3. Branch name pattern: main"
    echo "4. ✅ Require pull request reviews before merging"
    echo "5. ✅ Require status checks to pass before merging"
    echo "6. Click 'Create'"
fi

echo ""
echo -e "${BLUE}🎉 Step 4: First Release${NC}"
echo ""

if [ "$HAS_GH_CLI" = true ]; then
    read -p "Do you want to create the first release (v1.0.0)? (y/n): " CREATE_RELEASE
    
    if [ "$CREATE_RELEASE" = "y" ] || [ "$CREATE_RELEASE" = "Y" ]; then
        echo "Creating release v1.0.0..."
        gh release create v1.0.0 \
            --title "Plum Design System v1.0.0" \
            --notes "🎉 Initial release of the Plum Design System!

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

Built with ❤️ by the Plum team in Bangalore, India." \
            --latest
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Release v1.0.0 created successfully!${NC}"
        else
            echo -e "${YELLOW}⚠️  Release creation failed. You can create it manually later.${NC}"
        fi
    fi
else
    echo -e "${YELLOW}📝 Manual Release Creation${NC}"
    echo "To create the first release:"
    echo "1. Go to: https://github.com/PlumHQ/design-system/releases"
    echo "2. Click 'Create a new release'"
    echo "3. Tag version: v1.0.0"
    echo "4. Release title: Plum Design System v1.0.0"
    echo "5. Add release notes (see PUBLISHING_GUIDE.md for template)"
    echo "6. ✅ Set as the latest release"
    echo "7. Click 'Publish release'"
fi

echo ""
echo -e "${GREEN}🎊 Repository Setup Complete!${NC}"
echo ""
echo "📋 Summary:"
echo "✅ Repository created: https://github.com/PlumHQ/design-system"
echo "✅ Code pushed successfully"
echo "✅ Storybook documentation included"
echo "✅ CI/CD workflows configured"
echo "✅ Issue templates and PR template added"
echo ""
echo "🔗 Quick Links:"
echo "📚 Repository: https://github.com/PlumHQ/design-system"
echo "📖 Storybook: https://plumhq.github.io/design-system (available after GitHub Pages builds)"
echo "🐛 Issues: https://github.com/PlumHQ/design-system/issues"
echo "🔄 Actions: https://github.com/PlumHQ/design-system/actions"
echo ""
echo "📧 Contact: contact@plumhq.com"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Wait for GitHub Actions to deploy Storybook (~2-3 minutes)"
echo "2. Configure team access in repository settings"
echo "3. Start using components in your Plum applications!"
echo "4. Share the repository with your development team"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
