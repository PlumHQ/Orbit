# 🚨 Deployment Issue Fix - Vite Dev Server Error

## ❌ Problem Identified

Your deployment is failing because it's running **Storybook in development mode** instead of serving the **static production build**.

### Error Analysis
The failing request: `https://orbit.plumhq.com/@vite/client`

- `/@vite/client` is a **Vite development server** endpoint
- This should **NOT exist** in production
- Your container is running `npm run storybook:docker` (dev mode)
- It should serve the static `storybook-static/` build instead

## ✅ Root Cause

Your Dockerfile was changed to:
```dockerfile
CMD ["npm", "run", "storybook:docker"]  # ❌ Development mode
EXPOSE 6006                             # ❌ Dev port
```

Instead of:
```dockerfile
CMD ["serve", "-s", "storybook-static", "-l", "80", "--cors"]  # ✅ Production
EXPOSE 80                                                      # ✅ Production port
```

## 🔧 Fix Applied

### 1. Updated Dockerfile
```dockerfile
# Build static files
RUN npm run build-storybook

# Install serve for static file serving
RUN npm install -g serve

# Expose production port
EXPOSE 80

# Serve static build with CORS
CMD ["serve", "-s", "storybook-static", "-l", "80", "--cors"]
```

### 2. Your GitOps Deployment
Using your existing `build.yaml` workflow:
- Builds Docker image: `asia-south1-docker.pkg.dev/plum-vpc-prod/plum-docker-repo/orbit:$SHORT_SHA`
- Updates `k8s-manifests` repo
- Creates and merges PR automatically

## 🚀 Deploy the Fix

```bash
# Trigger your existing build pipeline
# This will use your build.yaml (not cloudbuild.yaml)
git add . && git commit -m "fix: serve static build instead of dev server"
git push origin main
```

Your build.yaml will:
1. Build the fixed Docker image
2. Push to your artifact registry
3. Update the k8s-manifests repo
4. Deploy via GitOps

## 🔍 Verify the Fix

After deployment:

1. **No more Vite errors:**
   ```bash
   curl https://orbit.plumhq.com/@vite/client
   # Should return 404 (not found) - this is correct!
   ```

2. **Static assets work:**
   ```bash
   curl https://orbit.plumhq.com/
   # Should return HTML (not trying to connect to dev server)
   ```

3. **Components load:**
   - Visit https://orbit.plumhq.com/
   - No infinite loading spinner
   - Components render properly

## 🎯 Key Differences

| Issue | Development Mode | Production Mode (Fixed) |
|-------|------------------|-------------------------|
| **Command** | `npm run storybook:docker` | `serve -s storybook-static` |
| **Port** | 6006 | 80 |
| **Files** | Live compilation | Pre-built static files |
| **Vite** | Active dev server | No Vite (static only) |
| **CORS** | Dev server CORS | `--cors` flag |

The fix ensures you're serving static files (like a real production deployment) instead of running a development server in production! 🎉
