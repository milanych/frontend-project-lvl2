install:
	npm install
gendiff:
	node bin/gendiff.js -h
lint:
	npx eslint --fix .