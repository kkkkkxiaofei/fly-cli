echo "upgrading versions..."
VERSION=$(npm version patch)
echo "starting publishing with $VERSION"
npm publish