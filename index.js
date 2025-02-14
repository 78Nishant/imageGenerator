const express=require('express');
const app=express();
require('dotenv').config();

const PORT=process.env.PORT || 3000;

app.use(express.json());

const { Builder, By,until } = require('selenium-webdriver');
const readline=require('readline');

//Function to get input from the user 
// const getUserInput = (query) => {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
  
//     return new Promise((resolve) => rl.question(query, (ans) => {
//       rl.close();
//       resolve(ans);
//     }));
//   };

  let imageUrls = [];

  const scrapeWithInput=async(query)=> {
    // Get user input
    // let userInput = await getUserInput("Enter your search text: ");
   console.log("Searching for : ",query);
    // Initialize WebDriver
    let driver = await new Builder().forBrowser('chrome')
    .setChromeOptions(
        new (require('selenium-webdriver/chrome').Options)()
          .addArguments('--headless') // Required for cloud environments
          .addArguments('--no-sandbox')
          .addArguments('--disable-dev-shm-usage')
          .addArguments('--disable-gpu')
          .addArguments('--window-size=1920x1080')
          .addArguments('--remote-debugging-port=9222')
          .addArguments('--ignore-certificate-errors')
          .addArguments('--ignore-ssl-errors')
          .addArguments(`--user-data-dir=/tmp/unique-user-data-dir-${Date.now()}`)
    )
    .build()
  
    try {
      // Navigate to the website
      await driver.get('https://www.craiyon.com/');
  
      // Locate the input box and type the user input
      let inputBox = await driver.findElement(By.css('textarea')); // Change the selector as needed
      await inputBox.sendKeys(query);
  
      // Locate and click the button
      let submitButton = await driver.findElement(By.id('generateButton')); // Change the selector as needed
      await submitButton.click();
  
      // Wait for some time (e.g., 5 seconds) to allow the page to load
      await driver.sleep(10000); 

    console.log('Action completed successfully. Searching now ...');
    
    let images = await driver.findElements(By.css('img'));

    // Extract and print the image URLs
    
    for (let img of images) {
      let src = await img.getAttribute('src');
      if(src.startsWith('https://pics.craiyon.com/')){
         imageUrls.push({"src":src});
      }
     
    }

//     console.log(imageUrls)
//     console.log('fetched Normal Pictures Succesfully Generating Pictures based on it') 

//     await driver.sleep(60000); 
  
//     //Fetching the generated images

//     let generatedImages= await driver.findElements(By.css('img'));
//     let generatedImageUrls = [];
//     for (let img of generatedImages) {
//       let src = await img.getAttribute('src');
//       if(src.startsWith('https://img.craiyon.com/')){
//             generatedImageUrls.push({"src":src});
//         } 
// }
//     console.log(generatedImageUrls);
    console.log("Done Successfully");
}

    finally {
      // Close the browser
      console.log("sorry unable to complete the action please try again");
      await driver.quit();
    }
  };



  //Routes

    app.get('/',(req,res)=>{
    res.json("Welcome to the Craiyon API");
    });
    app.get('/:name',async(req,res)=>{
        await scrapeWithInput(req.params.name);
        res.json(imageUrls);
    });

    //Running the server
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    });
