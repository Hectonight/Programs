#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'
git remote 
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Hectonight/Programs.git main:gh-pages