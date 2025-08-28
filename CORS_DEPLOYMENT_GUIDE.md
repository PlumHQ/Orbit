# 🚀 CORS Fix Deployment Guide for Orbit Storybook (GKE)

## ✅ What We Fixed

### 1. **Storybook Configuration** (`.storybook/main.ts`)
- Added comprehensive CORS configuration
- Whitelisted `orbit.plumhq.com` and `plumhq.com` domains  
- Configured proper headers and methods
- Added production build optimizations

### 2. **Simple Node.js Deployment**
- **`serve.json`** - CORS configuration for static file server
- **`Dockerfile`** - Simple Node.js container with `serve`
- **`k8s/`** - Kubernetes manifests with ingress CORS

### 3. **Build Artifacts**
- New production build with CORS configuration: `storybook-static/`
- Container-based deployment for GKE

## 🎯 Deployment Options

### GKE Deployment (Recommended)
Using Google Cloud Build + Kubernetes:

```bash
# Deploy to GKE
gcloud builds submit --config=cloudbuild.yaml .

# Check deployment
kubectl get pods -l app=orbit-storybook
```

### Local Testing
```bash
# Build and test locally
docker build -t orbit-storybook-test .
docker run -p 8080:80 orbit-storybook-test
```

## 🔧 Testing the Fix

### Production Test
After deployment, check:
1. Visit: https://orbit.plumhq.com/
2. Open browser DevTools (F12)
3. Check Console for errors
4. Check Network tab for CORS headers

### Expected CORS Headers
You should see these headers in Network tab:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: ...
```

## 🚀 Quick Deployment Steps

1. **Configure Cloud Build variables** in `cloudbuild.yaml`
2. **Deploy to GKE:**
   ```bash
   gcloud builds submit --config=cloudbuild.yaml .
   ```
3. **Verify deployment:**
   ```bash
   kubectl get pods -l app=orbit-storybook
   kubectl get ingress orbit-storybook-ingress
   ```
4. **Test:** Visit https://orbit.plumhq.com/

## 🐛 If Still Not Working

1. **Check pod logs:**
   ```bash
   kubectl logs -l app=orbit-storybook -f
   ```
2. **Check ingress status:**
   ```bash
   kubectl describe ingress orbit-storybook-ingress
   ```
3. **Test CORS manually:**
   ```bash
   curl -H "Origin: https://orbit.plumhq.com" \
        -X OPTIONS \
        https://orbit.plumhq.com
   ```

## 📝 Files Changed
- `.storybook/main.ts` - Added CORS configuration
- `serve.json` - Static file server CORS headers
- `Dockerfile` - Simple Node.js container
- `k8s/` - Kubernetes deployment manifests
- `cloudbuild.yaml` - Google Cloud Build pipeline

The infinite loading should be resolved with the simplified GKE deployment! 🎉
