yarn install --force
yarn run build
git checkout -- .
cd ./src/
yarn version --patch --message="Bump version to %s"
NEW_VERSION=$(git tag --points-at HEAD)
cd ../
yarn run semantic-release
git push origin $NEW_VERSION