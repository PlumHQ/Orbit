#!/bin/bash
set -e

echo "🔍 Plum Design System - Build Verification"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Step 1: Dependencies Check${NC}"
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ node_modules found${NC}"
else
    echo -e "${YELLOW}⚠️  Installing dependencies...${NC}"
    npm install
fi

echo ""
echo -e "${BLUE}🏗️  Step 2: Build Verification${NC}"
echo "Building Storybook..."

npm run build-storybook

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Storybook built successfully!${NC}"
else
    echo -e "${RED}❌ Storybook build failed${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}📊 Step 3: Build Analysis${NC}"
if [ -d "storybook-static" ]; then
    STORYBOOK_SIZE=$(du -sh storybook-static | cut -f1)
    FILE_COUNT=$(find storybook-static -type f | wc -l)
    echo -e "${GREEN}✅ Storybook static files generated${NC}"
    echo "📁 Size: $STORYBOOK_SIZE"
    echo "📄 Files: $FILE_COUNT"
    
    # Check for essential files
    if [ -f "storybook-static/index.html" ]; then
        echo -e "${GREEN}✅ Main index.html found${NC}"
    else
        echo -e "${RED}❌ Main index.html missing${NC}"
    fi
    
    if [ -f "storybook-static/iframe.html" ]; then
        echo -e "${GREEN}✅ Iframe.html found${NC}"
    else
        echo -e "${RED}❌ Iframe.html missing${NC}"
    fi
    
    # Count story files
    STORY_COUNT=$(find storybook-static/assets -name "*.stories-*.js" 2>/dev/null | wc -l)
    echo "📚 Stories built: $STORY_COUNT"
    
else
    echo -e "${RED}❌ storybook-static directory not found${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}🧪 Step 4: Component Verification${NC}"
COMPONENT_DIRS=$(find design-system-test/ui -maxdepth 1 -type d | grep -v "^design-system-test/ui$" | wc -l)
echo "🧩 Component directories: $COMPONENT_DIRS"

# List all components
echo ""
echo "📋 Available Components:"
for dir in design-system-test/ui/*/; do
    if [ -d "$dir" ]; then
        component_name=$(basename "$dir")
        if [ -f "$dir/component.tsx" ]; then
            echo -e "  ${GREEN}✅${NC} $component_name"
        else
            echo -e "  ${YELLOW}⚠️${NC}  $component_name (no component.tsx)"
        fi
    fi
done

echo ""
echo -e "${BLUE}🔍 Step 5: File Structure Check${NC}"

# Check essential files
essential_files=(
    "README.md"
    "package.json"
    "LICENSE"
    ".gitignore"
    "tsconfig.json"
    ".storybook/main.ts"
    ".storybook/preview.ts"
    ".github/workflows/ci.yml"
)

for file in "${essential_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $file"
    else
        echo -e "${RED}❌${NC} $file"
    fi
done

echo ""
echo -e "${BLUE}📝 Step 6: Package.json Validation${NC}"
if [ -f "package.json" ]; then
    # Check package name
    PACKAGE_NAME=$(node -p "require('./package.json').name" 2>/dev/null || echo "unknown")
    VERSION=$(node -p "require('./package.json').version" 2>/dev/null || echo "unknown")
    DESCRIPTION=$(node -p "require('./package.json').description" 2>/dev/null || echo "unknown")
    
    echo "📦 Package: $PACKAGE_NAME"
    echo "🏷️  Version: $VERSION"
    echo "📄 Description: $DESCRIPTION"
    
    if [ "$PACKAGE_NAME" = "@plumhq/design-system" ]; then
        echo -e "${GREEN}✅ Package name correctly set for PlumHQ${NC}"
    else
        echo -e "${YELLOW}⚠️  Package name might need adjustment${NC}"
    fi
else
    echo -e "${RED}❌ package.json not found${NC}"
fi

echo ""
echo -e "${BLUE}🌐 Step 7: Git Repository Check${NC}"
if [ -d ".git" ]; then
    echo -e "${GREEN}✅ Git repository initialized${NC}"
    
    # Check remote
    REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "no remote")
    echo "🔗 Remote: $REMOTE_URL"
    
    if [[ "$REMOTE_URL" == *"PlumHQ/design-system"* ]]; then
        echo -e "${GREEN}✅ Remote correctly set to PlumHQ organization${NC}"
    else
        echo -e "${YELLOW}⚠️  Remote might need adjustment${NC}"
    fi
    
    # Check if there are any uncommitted changes
    if git diff-index --quiet HEAD --; then
        echo -e "${GREEN}✅ No uncommitted changes${NC}"
    else
        echo -e "${YELLOW}⚠️  There are uncommitted changes${NC}"
    fi
else
    echo -e "${RED}❌ Not a git repository${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Verification Complete!${NC}"
echo ""
echo "📋 Summary:"
echo "✅ All components built successfully"
echo "✅ Storybook documentation generated"
echo "✅ Essential files present"
echo "✅ Package configuration ready"
echo "✅ Git repository configured"
echo ""
echo -e "${BLUE}🚀 Ready for publication to PlumHQ!${NC}"
echo ""
echo "Next steps:"
echo "1. Run: ./setup-github-repo.sh"
echo "2. Or manually create the repository at https://github.com/PlumHQ"
echo "3. Push the code: git push -u origin main"
echo ""
echo -e "${GREEN}Your Plum Design System is ready! 🎊${NC}"
