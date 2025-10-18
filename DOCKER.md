# Docker Deployment Guide

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Using Docker CLI

```bash
# Build the image
docker build -t portfolio-website .

# Run the container
docker run -d -p 3222:3222 --name portfolio-website portfolio-website

# View logs
docker logs -f portfolio-website

# Stop and remove the container
docker stop portfolio-website
docker rm portfolio-website
```

## Access the Website

Once the container is running, access the website at:
- **Local:** http://localhost:3222
- **Network:** http://YOUR_IP:3222

## Useful Commands

```bash
# Rebuild the image (after code changes)
docker-compose up -d --build

# View running containers
docker ps

# Execute commands inside the container
docker exec -it portfolio-website sh

# View container resource usage
docker stats portfolio-website

# Remove everything (including volumes)
docker-compose down -v
```

## Architecture

- **Build Stage:** Node.js 20 Alpine for building the React app
- **Production Stage:** Nginx Alpine for serving static files
- **Port:** 3222
- **Optimizations:**
  - Multi-stage build for smaller image size
  - Gzip compression enabled
  - Asset caching configured
  - Security headers included

## Production Deployment

For production deployment, consider:

1. **Environment Variables:** Add `.env` file support if needed
2. **SSL/TLS:** Use a reverse proxy like Traefik or Caddy
3. **Scaling:** Use Kubernetes or Docker Swarm for orchestration
4. **Monitoring:** Add health checks and monitoring tools

## Troubleshooting

### Container won't start
```bash
docker logs portfolio-website
```

### Port already in use
```bash
# Check what's using port 3222
sudo lsof -i :3222

# Or change the port in docker-compose.yml
ports:
  - "3223:3222"
```

### Clear everything and start fresh
```bash
docker-compose down
docker system prune -a
docker-compose up -d --build
```
