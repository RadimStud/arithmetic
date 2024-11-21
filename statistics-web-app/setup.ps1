# Define project structure
$projectName = "statistics-web-app"
$folders = @(
    "$projectName/frontend",
    "$projectName/backend",
    "$projectName/docker"
)
$files = @{
    "$projectName/README.md" = "# Statistics Web App`n`nThis is the README for the Statistics Web App project."
    "$projectName/.gitignore" = "node_modules/`nvenv/`n__pycache__/`n*.pyc`n*.pyo`n.env"
    "$projectName/docker-compose.yml" = @"
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
"@
}

# Create folders
foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

# Create files
foreach ($file in $files.Keys) {
    $content = $files[$file]
    New-Item -ItemType File -Force -Path $file -Value $content | Out-Null
}

Write-Host "Project structure created successfully!" -ForegroundColor Green
