#!/bin/bash

mkdir -p "dist/assets/icons"

for file in $(ls ./src/assets/icons) ; do
  cp "./src/assets/icons/$file" "dist/assets/icons"
done

echo "Icons Created"

exit 0