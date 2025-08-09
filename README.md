## Daraz.pk Automation with Playwright 🚀🧪
This repository contains a robust end-to-end test automation project for the Daraz.pk web application. Developed using the Playwright framework, this project demonstrates key automation principles, including the Page Object Model (POM) design pattern, and fulfills the requirements of a QA assignment.

## 📚 Assignment Overview
This project addresses a series of specific automation tasks for the https://www.daraz.pk/ application:

## ✅ Core Assignment Tasks
Project Creation: Successfully initialized and configured a new Playwright project.

Page Object Model (POM) Implementation: Utilized the Page Object Model (POM) design pattern for all application pages (HomePage, SearchResultsPage, ProductDetailsPage). This approach separates UI elements and interactions from test logic, making tests more maintainable and reusable.

Navigation & Search: Ensured the test suite reliably navigates to https://www.daraz.pk/ and performs a search for "electronics."

Filtering: Implemented logic to apply filters for a specific brand and a specific price range (500-5000).

Product Count Validation: Developed a test case to find the count of products after filtering and asserted that the count is greater than 0.

Product Navigation: Created a test to click on the first product from the search results and successfully navigate to its details page. The test concludes after this action.

## 📁 Repository Structure
The project follows a standard Playwright and Page Object Model structure:

📦 Daraz_Playwright_Automation/
┣ 📦 tests/
┃ ┗ 📄 daraz.spec.js            → Main Playwright test spec file
┣ 📦 pages/
┃ ┣ 📄 darazHomePage.js           → Page object for the Daraz home screen
┃ ┣ 📄 darazSearchResultsPage.js   → Page object for the search results screen
┃ ┗ 📄 darazProductDetailsPage.js   → Page object for the product details screen
┣ 📄 playwright.config.js         → Playwright configuration file
┣ 📄 package-lock.json            → Records exact dependency versions
┣ 📄 package.json                 → Lists project dependencies and defines npm scripts
┗ 📄 README.md                    → Project documentation (this file)

## 🛠️ Tools & Technologies Used
Playwright – The leading end-to-end testing framework for web applications.

JavaScript – The primary programming language used for writing test scripts and page objects.

Node.js – JavaScript runtime environment required for Playwright and package management.

npm – Node Package Manager, used for installing and managing project dependencies.

Page Object Model (POM) – An industry-standard design pattern applied to enhance test structure, reusability, and maintainability.

## ▶️ How to Run the Tests
Follow these simple steps to set up and execute the tests in this project:

1. Clone the Repository
First, clone this repository to your local machine:

git clone [https://github.com/your-username/your-repo.git]
cd your-repo-name

2. Install Dependencies
Navigate into the cloned project directory and install all necessary Node.js packages:

npm install

3. Execute Tests
You have two primary ways to run the tests:

a) Headless Mode (for Report Generation):
To run the tests in a browser environment without a visible UI, which is ideal for CI/CD pipelines and generating the final report:

npx playwright test

b) Headed Mode (with UI):
To run the tests with a visible browser UI for debugging purposes:

npx playwright test --headed

## 📊 Viewing the Playwright Test Report
After running the tests, a detailed and interactive HTML report will be automatically generated.

After the test run completes, execute the following command:

npx playwright show-report

This will open a local web server displaying the report in your default web browser, providing a clear overview of test passes/failures, durations, and other valuable insights into the test execution.

## 🤝 Credits
This repository is a result of my dedicated work on this assignment, focusing on practical end-to-end test automation with Playwright.

## 📬 Contact
I welcome any queries, feedback, or suggestions regarding this project. Feel free to connect!

## 📧 Email: klaiba412@gmail.com



## 🌐 LinkedIn: [Laiba Khan](https://www.linkedin.com/in/laiba-khan-955691264/)

Happy Testing! 🧪✨
