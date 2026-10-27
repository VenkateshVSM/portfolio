# Automated GitHub Pages Deployment Script
Write-Host "🚀 Building portfolio..." -ForegroundColor Cyan
npm run build

Write-Host "📄 Preparing 404 fallback and .nojekyll..." -ForegroundColor Cyan
Copy-Item -Path "dist/index.html" -Destination "dist/404.html" -Force
New-Item -Path "dist/.nojekyll" -ItemType File -Force

Write-Host "📦 Pushing to gh-pages branch on GitHub..." -ForegroundColor Cyan
Set-Location -Path "dist"
git init
git checkout -B gh-pages
git add -A
git commit -m "Deploy portfolio to GitHub Pages"
git remote add origin https://github.com/VenkateshVSM/portfolio.git
git push -f origin gh-pages
Set-Location -Path ".."

Write-Host "✅ Deployed successfully to https://venkateshvsm.github.io/portfolio/" -ForegroundColor Green
