# ☁️ Google Cloud Build + GKE Deployment Guide

## 🎯 Simplified Architecture

**No Nginx/Apache needed!** CORS is handled by:
1. **Node.js `serve`** - Simple static file server with CORS headers
2. **GKE Ingress** - Additional CORS configuration at ingress level
3. **Storybook Config** - Application-level CORS in `.storybook/main.ts`

## 📁 Files Overview

### Core Files
- `Dockerfile` - Simple Node.js container with `serve`
- `serve.json` - CORS configuration for static file server
- `cloudbuild.yaml` - Google Cloud Build pipeline

### Kubernetes Manifests (`k8s/`)
- `deployment.yaml` - Pod deployment with health checks
- `service.yaml` - Internal service configuration  
- `ingress.yaml` - External access with CORS annotations
- `configmap.yaml` - Environment configuration

## 🚀 Quick Deployment

### 1. Configure Cloud Build Variables
Update `cloudbuild.yaml` with your settings:
```yaml
substitutions:
  _GKE_LOCATION: 'us-central1-a'      # Your GKE zone
  _GKE_CLUSTER: 'your-cluster-name'   # Your cluster name
  _NAMESPACE: 'default'               # Your namespace
```

### 2. Deploy via Cloud Build
```bash
# Trigger build and deployment
gcloud builds submit --config=cloudbuild.yaml .

# Or set up automatic triggers
gcloud builds triggers create github \
  --repo-name=Orbit \
  --repo-owner=PlumHQ \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

### 3. Verify Deployment
```bash
# Check deployment status
kubectl get deployments -l app=orbit-storybook

# Check pods
kubectl get pods -l app=orbit-storybook

# Check ingress
kubectl get ingress orbit-storybook-ingress

# View logs
kubectl logs -l app=orbit-storybook -f
```

## 🔧 CORS Configuration Layers

### Layer 1: Application (`serve.json`)
```json
{
  "headers": [
    {
      "source": "**",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET, POST, OPTIONS, PUT, DELETE" }
      ]
    }
  ]
}
```

### Layer 2: Ingress (GKE)
```yaml
annotations:
  nginx.ingress.kubernetes.io/enable-cors: "true"
  nginx.ingress.kubernetes.io/cors-allow-origin: "*"
```

### Layer 3: Storybook (`.storybook/main.ts`)
```typescript
config.server.cors = {
  origin: ['https://orbit.plumhq.com', 'https://plumhq.com'],
  credentials: true
}
```

## 🏗️ Build Process

1. **Node.js build** - Creates optimized Storybook static files
2. **Docker image** - Packages with `serve` for CORS-enabled serving
3. **GCR push** - Stores in Google Container Registry
4. **GKE deploy** - Rolls out to Kubernetes cluster
5. **Ingress config** - Routes traffic with additional CORS headers

## 🔍 Testing Deployment

### Local Testing
```bash
# Build and test locally
docker build -t orbit-storybook-test .
docker run -p 8080:80 orbit-storybook-test

# Test CORS
curl -H "Origin: https://orbit.plumhq.com" \
     -X OPTIONS \
     http://localhost:8080/
```

### Production Testing
```bash
# Test CORS headers
curl -H "Origin: https://orbit.plumhq.com" \
     -X OPTIONS \
     https://orbit.plumhq.com/

# Expected response headers:
# Access-Control-Allow-Origin: *
# Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE
```

## 🐛 Troubleshooting

### Check Pod Status
```bash
kubectl describe pod -l app=orbit-storybook
kubectl logs -l app=orbit-storybook --tail=50
```

### Check Ingress
```bash
kubectl describe ingress orbit-storybook-ingress
```

### CORS Issues
1. Check ingress annotations are applied
2. Verify `serve.json` is copied to container
3. Test application CORS config in Storybook

### Common Fixes
```bash
# Restart deployment
kubectl rollout restart deployment orbit-storybook

# Check service endpoints
kubectl get endpoints orbit-storybook-service

# Test service directly
kubectl port-forward service/orbit-storybook-service 8080:80
```

## 🎉 Success Checklist

After deployment:
- ✅ `kubectl get pods` shows running pods
- ✅ `kubectl get ingress` shows external IP
- ✅ https://orbit.plumhq.com/ loads without infinite spinner
- ✅ Browser console shows no CORS errors
- ✅ Network tab shows CORS headers in responses

The simplified Node.js approach eliminates Nginx complexity while maintaining full CORS support! 🚀
