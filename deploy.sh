#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
cd dist

# если вы деплоите на кастомный домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:KristinOsmakov/myCryptoStatisticApp.git master:gh-pages

cd -