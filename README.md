# Siemens SDET Technical Task

✅ Automated UI tests with NightwatchJS using Page Object Model (POM)  
✅ API tests with Supertest & Jest  
✅ CI/CD pipeline with CircleCI

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/LDvYkPuF7vKQopersecfHx/JZU4T3pB9uUC8ib2WZcR5c/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/LDvYkPuF7vKQopersecfHx/JZU4T3pB9uUC8ib2WZcR5c/tree/main)


## ✨ Features

### 🔎 UI Testing
- Contact Us page:
  - Required fields, file upload, success validation
- Search functionality:
  - Searches for 'dress' and verifies results
- Page Object Model implemented (no hardcoded selectors)
- HTML reports available under `/tests_output/nightwatch-html-report`

### 🧪 API Testing
- Validates `/register` and `/login` endpoints
- Tests both positive and negative scenarios
- HTML report available under `/tests_output/api-test-report.html`

---


## 🚀 How to run locally

### UI tests
```bash
npx nightwatch
API tests
bash
Copy
Edit
npx jest
📁 Project structure
bash
Copy
Edit
.
├── tests/                   # Nightwatch UI tests
├── nightwatch/              # Page objects
├── upload/                  # Test file for upload
├── tests_output/            # Nightwatch HTML reports
├── api-tests/               # Jest + Supertest API tests
├── .circleci/config.yml     # CI/CD pipeline
├── README.md
yaml
Copy
Edit


---


```yaml
version: 2.1

jobs:
  ui_tests:
    docker:
      - image: cypress/browsers:node16.5.0-chrome91-ff89
    steps:
      - checkout
      - run:
          name: Install dependencies
          command: npm install
      - run:
          name: Run Nightwatch UI tests
          command: npx nightwatch

  api_tests:
    docker:
      - image: node:16
    steps:
      - checkout
      - run:
          name: Install dependencies
          command: npm install
      - run:
          name: Run Jest API tests
          command: npx jest --ci

workflows:
  version: 2
  test_pipeline:
    jobs:
      - ui_tests
      - api_tests:
          requires:
            - ui_tests
✅ This:

Runs ui_tests first (Nightwatch in a Chrome container).

Then runs api_tests (Jest + Supertest).

✅ 3️⃣ Now push to GitHub
bash
Copy
Edit
git add .
git commit -m "Add CircleCI config, README, test cases and bug report docs"
git push origin main



They’ll use supertest + jest to hit mock-user-auth endpoints with:

Valid body + auth

Invalid body + auth

Check responses
