# Siemens SDET Technical Task

✅ Automated UI tests with NightwatchJS using Page Object Model (POM)  
✅ API tests with Supertest & Jest  
✅ CI/CD pipeline with CircleCI

[![CircleCI](https://circleci.com/gh/Gerges11/Seimens_Task.svg?style=shield)](https://app.circleci.com/pipelines/github/Gerges11/Seimens_Task)


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

✅ **Replace** `YOUR-GITHUB-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub info so the badge works.

---

## ✅ 2️⃣ Let’s write your `.circleci/config.yml`
Create a folder `.circleci` in your project, inside it a file `config.yml`.

Put this inside:

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
✅ Go to CircleCI, add your repo, and it will automatically trigger the pipeline.

✅ Shall we prepare your API tests next?
They’ll use supertest + jest to hit mock-user-auth endpoints with:

Valid body + auth

Invalid body + auth

Check responses
