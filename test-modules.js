// Simple test to verify modules integration
const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1280, height: 720 }
    });
    
    const page = await browser.newPage();
    await page.goto('http://localhost:3002');
    
    // Wait for the page to load
    await page.waitForSelector('h1');
    
    // Check if AS button exists
    const asButton = await page.$('button:contains("AS")');
    console.log('AS button found:', !!asButton);
    
    // Check if A2 button exists
    const a2Button = await page.$('button:contains("A2")');
    console.log('A2 button found:', !!a2Button);
    
    // Check if module cards exist
    const moduleCards = await page.$$('[style*="backgroundColor: var(--bg-secondary)"]');
    console.log('Module cards found:', moduleCards.length);
    
    // Test clicking A2 button
    if (a2Button) {
      await a2Button.click();
      await page.waitForTimeout(1000);
      console.log('Clicked A2 button');
    }
    
    await browser.close();
  } catch (error) {
    console.error('Test error:', error);
  }
})();
