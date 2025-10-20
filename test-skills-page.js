const { chromium } = require('playwright');

async function testSkillsPage() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  try {
    console.log('Navigating to skills page...');
    await page.goto('http://localhost:3002/skills');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Take full page screenshot
    console.log('Taking screenshot...');
    await page.screenshot({ 
      path: 'skills-page-screenshot.png', 
      fullPage: true 
    });

    // Check for key elements
    console.log('Analyzing page elements...');
    
    // Check for Problem Solver section
    const problemSolverSection = await page.locator('text=Problem Solver').first();
    const problemSolverExists = await problemSolverSection.isVisible();
    console.log('Problem Solver section visible:', problemSolverExists);

    // Check for tech stack wheel/spinning element
    const techStackElements = await page.locator('[class*="wheel"], [class*="spin"], [class*="rotate"], [class*="tech"], [class*="stack"]').all();
    console.log('Found potential tech stack elements:', techStackElements.length);

    // Test hover functionality on tech items
    const techItems = await page.locator('[data-tooltip], [title], [class*="tooltip"]').all();
    console.log('Found elements with tooltips:', techItems.length);

    if (techItems.length > 0) {
      console.log('Testing hover tooltips...');
      for (let i = 0; i < Math.min(3, techItems.length); i++) {
        await techItems[i].hover();
        await page.waitForTimeout(500);
        
        // Check if tooltip appears
        const tooltip = await page.locator('[class*="tooltip"], [role="tooltip"]').first();
        const tooltipVisible = await tooltip.isVisible();
        console.log(`Tooltip ${i + 1} visible on hover:`, tooltipVisible);
      }
    }

    // Check for animations/spinning
    console.log('Checking for animations...');
    const animatedElements = await page.locator('[class*="animate"], [class*="spin"], [style*="animation"]').all();
    console.log('Found animated elements:', animatedElements.length);

    // Take another screenshot after interactions
    await page.screenshot({ 
      path: 'skills-page-after-interactions.png', 
      fullPage: true 
    });

    console.log('Test completed successfully!');
    console.log('Screenshots saved: skills-page-screenshot.png and skills-page-after-interactions.png');

  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    await browser.close();
  }
}

testSkillsPage();