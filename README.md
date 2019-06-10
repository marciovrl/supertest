# example-supertest
Example of API tests using Supertest.

This repository aims to be the field of training and the study of Supertest.

I used the `https://quartz-drain.glitch.me/` API and developed the automation of an `/products` endpoint by testing the calls and the contract.

# Preconditions:
- Node installed;
- Npm installed.

# Run project:

1 - Clone project:
```
git clone https://github.com/marciovrl/example-supertest.git
```

2 - Execute command node to install depedencias:
```
npm install
```

3 - Execute test commands:
```
    npm run test-feature # Run endpoint tests and validate the functioning of each verb..
    npm run test-contract # Run contract tests.
    npm run test # Run all tests.
```
# Structure of the project

```
|
| - test
    | - contracts
    | - helper
    | - schemas
    | - steps
| - .gitignore
| - package.json
| - README.md
```