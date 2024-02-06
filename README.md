# YoArt!

This our first draft of the YoArt app which allows users to log in, enter a prompt, and generate a stable diffusion image using the Text-to-Image API.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Frontier-Solutions/yoArt.git
   ```

2. Navigate the project directory
   ```bash
   cd yoArt
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Run the app

   ```bash
   npm run web
   ```

   This will start the development server and open the Expo DevTools in your default web browser.

   To use the app, create a new user with an email and password. There isn't much validation at this point so any dummy email will be fine as long as there is an @ symbol in there somewhere. Similarly, the password can be anything as long as it's 7 characters or more.

   Once you're in, you can enter a prompt and submit for an image to appear! The prompt needs to be at least 15 characters long.

   Enjoy!
