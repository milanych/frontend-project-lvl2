install:
	npm install
gendiff:
	node bin/gendiff.js
lint:
	npx eslint --fix .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8