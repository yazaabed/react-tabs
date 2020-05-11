yarn install --registry https://registry.yarnpkg.com
yarn run build
git checkout -- .
cd ./src/
yarn version --patch --message="Bump version to %s"
NEW_VERSION=$(git tag --points-at HEAD)
cd ../
yarn run semantic-release
yarn upgrade @feuer/react-tab --force
git push origin $NEW_VERSION