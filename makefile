# Start the development server
start:
	npm start

# Install the project's dependencies
install:
	npm install

# Build the project for production
build:
	npm run build

# Run tests
test:
	npm test

# Run the linter
lint:
	npm run lint

# Clean up generated files (like node_modules or build/)
clean:
	rm -rf node_modules build

.PHONY: install start build test lint clean
