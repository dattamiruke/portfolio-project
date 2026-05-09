# Portfolio Project — Dattaram Miruke

Static portfolio page for **Principal AI Platform Architect** positioning.

## View

### Option 1 — Open directly
```bash
open index.html
```

### Option 2 — Run local server
```bash
python3 -m http.server 8080
```
Then open: http://localhost:8080

## Structure

```
portfolio-project/
├── index.html       # Main portfolio page
├── style.css        # Styling (light + dark mode)
├── README.md        # This file
└── assets/
    ├── images/      # Architecture diagrams
    └── pdf/         # Original PDF source
```

## Deployment (Hetzner / nginx)

```bash
sudo mkdir -p /var/www/portfolio
sudo cp -r portfolio-project/* /var/www/portfolio/
sudo systemctl reload nginx
```

## Author

Dattaram Miruke — Principal AI Platform Architect | DevOps | Kubernetes | AWS
