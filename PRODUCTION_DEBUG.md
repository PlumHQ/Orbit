# 🐛 Production Loading Issue Debug Guide

## Problem
Components are loading infinitely on https://orbit.plumhq.com/ - Storybook structure loads but component area shows endless spinner.

## Immediate Debug Steps

### 1. Browser Console Check
1. Open https://orbit.plumhq.com/ 
2. Press F12 → Console tab
3. Look for JavaScript errors (red messages)
4. Check Network tab for failed requests (red entries)

### 2. Common Issues & Fixes

#### A. Module Loading Errors
**Symptoms**: Console errors about failed imports
**Solution**: Check if all JavaScript chunk files are loading correctly

#### B. React Hydration Issues  
**Symptoms**: "Hydration failed" or React warnings
**Solution**: Try adding this to `.storybook/main.ts`:
```typescript
viteFinal: async (config) => {
  // ... existing config ...
  
  // Force SSR compatibility
  config.build = config.build || {};
  config.build.ssr = false;
  
  return config;
}
```

#### C. Asset Path Issues
**Symptoms**: 404s in Network tab
**Solution**: Update base path configuration:
```typescript
// In .storybook/main.ts viteFinal
config.base = '/';  // Try absolute path instead of relative
```

## Testing Locally
Test the built Storybook locally:
```bash
npx http-server storybook-static -p 8080
# Then visit http://localhost:8080
```

If it works locally but not in production, it's a deployment configuration issue.

## Quick Fixes to Try

### Fix 1: Update Base Path
```typescript
// .storybook/main.ts
viteFinal: async (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.base = '/';  // Try absolute path
  }
  // ... rest of config
}
```

### Fix 2: Disable SSR
```typescript
// .storybook/main.ts  
viteFinal: async (config) => {
  config.build = config.build || {};
  config.build.ssr = false;
  config.build.target = 'esnext';
  // ... rest of config
}
```

### Fix 3: Server Configuration
Ensure your web server serves all routes to index.html:
- For Apache: Add .htaccess with RewriteRule
- For Nginx: Add `try_files $uri $uri/ /index.html;`

## If None Work
1. Check server logs for errors
2. Test with different browsers
3. Check if CORS is blocking requests
4. Verify all files uploaded correctly

The issue is likely a simple configuration mismatch between development and production environments.
