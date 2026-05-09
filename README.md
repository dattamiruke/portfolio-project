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

### Role-tailored views

The site supports a `?role=` URL parameter that swaps the hero headline,
filters Flagship Projects, and changes the resume download. Examples:

- `?role=platform`
- `?role=mlops`
- `?role=rag`
- `?role=genai-lead`

Configuration lives in `assets/roles.json`.

## Structure

```
portfolio-project/
├── index.html       # Main portfolio page
├── style.css        # Styling (light / white / dark themes)
├── README.md        # This file
├── .gitignore
├── assets/
│   ├── images/      # Architecture diagram + favicon (SVG)
│   ├── pdf/         # Resume PDFs
│   ├── roles.js     # Role-tailoring runtime
│   └── roles.json   # Role config
└── drafts/          # Standalone preview pages (not deployed)
```

## Deployment (Hetzner / nginx)

```bash
rsync -av --delete \
  --exclude='.git' \
  --exclude='.gitignore' \
  --exclude='.claude' \
  --exclude='drafts' \
  --exclude='README.md' \
  portfolio-project/ /var/www/portfolio/
sudo systemctl reload nginx
```

## Author

Dattaram Miruke — Principal AI Platform Architect | DevOps | Kubernetes | AWS
