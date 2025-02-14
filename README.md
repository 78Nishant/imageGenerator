
# Craiyon Image Scraper API

This API is designed to scrape images from the website [Craiyon](https://www.craiyon.com/), a platform that generates images based on text prompts. The API is built using **Express.js** and **Selenium WebDriver** for web scraping.

---

## Tech Stack Used
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for building the API
- **Selenium WebDriver**: Automated browser interactions for web scraping
- **ChromeDriver**: Used with Selenium to control the Chrome browser
- **dotenv**: To manage environment variables

---

## Features
- Scrapes images from [Craiyon](https://www.craiyon.com/) based on a search query.
- Returns the URLs of images matching the search query.
- Built using Selenium to automate browser interactions.

---

## Prerequisites
1. **Node.js** installed on your system.
2. **Google Chrome** installed.
3. **ChromeDriver** compatible with your Chrome version. [Download here](https://chromedriver.chromium.org/downloads)
4. **Java** Runtime Environment (required by Selenium WebDriver).

---

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/78Nishant/imageGenerator/
    cd imageGenerator
    ```

2. Install the required packages:
    ```sh
    npm install express dotenv selenium-webdriver
    ```

3. Create a `.env` file:
    ```
    PORT=3000
    ```

4. Ensure **ChromeDriver** is in your system's PATH or specify the path in your code.

---

## Usage

1. Start the server:
    ```sh
    node index.js
    ```

2. The server will run on the specified `PORT` (default: 3000). 

3. Available Endpoints:
   - **GET /**: Returns a welcome message.
   - **GET /:name**: Accepts a search query as a URL parameter and returns the scraped image URLs.
     
     Example:
     ```
     http://localhost:3000/landscape
     ```
     This will search for images related to "landscape" on Craiyon and return the URLs.

---

## How It Works
- The API uses Selenium WebDriver to automate the following steps:
  1. Navigate to [Craiyon](https://www.craiyon.com/).
  2. Input the search query.
  3. Click the generate button.
  4. Wait for images to load.
  5. Extract and filter the image URLs.
  6. Return the image URLs as a JSON response.

---

## Dependencies
- **express**: Fast, unopinionated, minimalist web framework for Node.js
- **dotenv**: Loads environment variables from a `.env` file
- **selenium-webdriver**: Provides browser automation

---

## Site Being Scraped
The images are scraped from [Craiyon](https://www.craiyon.com/), an AI image generation platform.

---

## Troubleshooting
1. If ChromeDriver is not found, make sure it's added to your system's PATH.
2. Ensure ChromeDriver version matches your Chrome browser version.
3. If you encounter SSL or certificate errors, the script already uses the following Chrome options:
    ```js
    .addArguments('--ignore-certificate-errors')
    .addArguments('--ignore-ssl-errors')
    ```

---

## Notes
- This project is for educational purposes only. Please respect the terms of service of [Craiyon](https://www.craiyon.com/).
- Avoid overloading the website with frequent requests.

---

## Author
- Third-year college student at Army Institute of Technology, Pune
- Learning web development and working on full-stack projects using MERN stack with TailwindCSS.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgements
- Special thanks to [Craiyon](https://www.craiyon.com/) for providing the platform for image generation.
- Selenium WebDriver for enabling browser automation.
