const {test,expect} = require('@playwright/test')

//test.describe.configure({mode:'parallel'});
//test.describe.configure({mode:'serial'});

test("@Web Popup validations",async({page})=>
{
    await page.goto("http://localhost:3000/login");
    console.log(await page.title());
    await expect (page).toHaveTitle("Grafana");
    await page.locator("input[name='user']").type("admin");
    await page.locator("input[name='password']").type("Vaayoo1234$");
    await page.locator(".css-14g7ilz-button").click();
   // console.log(await page.locator(".css-hui7p1").textContent());
    console.log(await page.title());
   // await page.locator("//h4[contains(text(),'Create')]").click();
    await page.locator("(//button)[1]").click();
    //await expect(page.locator("//button[contains(text(),'Add a new panel')]")).toHaveText("Add a new panel");
   await page.locator("#collapse-button-4").click();
   await page.locator("//div[contains(text(),'New dashboard')]").click();
    await page.locator("//button[contains(text(),'Add a new panel')]").click();
    let des="hello";
    await page.locator("#description-text-area").fill(des);
    await page.locator("//label[text()='Actual']//following::button[3]").click()
    await page.locator("i").hover()
   
await Promise.all(
    [

        page.waitForSelector("i"),
        expect(page.locator("p")).toContainText(des)

    ]
);
    


    await page.locator("(//span[text()='Add link'])[1]").click();
await page.locator("//div[text()='URL']//preceding::input[1]").fill("google");

await page.keyboard.press('Tab');
await page.locator("//div[@data-slate-object='block']//div[@data-slate-object='block']").fill("https://www.google.com/");
//await page.locator("//div[text()='URL']//following::span[1]").click();
await page.locator("//div[contains(text(),'Open in new tab')]//following::label[1]").click();
await page.locator("//span[text()='Save']").click();
//await page.locator("//h6[contains(text(),'Panel links')]//following::button[1]").click();
await page.locator("//label[text()='Actual']//following::button[3]").click()
//await page.locator("(//div[@class='css-18m1v9u-horizontal-group']//button)[1]").click();
//await page.locator("section>span").hover()


//const go=await page.locator("(//div[@class='css-1ad80n9']//span)[1]").textContent();
//console.log(go);

let ase=page.locator("//div[text()='A-series']");
const aht=await ase.boundingBox();
const y=aht.y;
console.log(y);
await page.locator("(//label[text()='Right'])[1]").click();
let aseo=page.locator("//div[text()='A-series']");
const ahtr=await aseo.boundingBox();
const yr=ahtr.y;
console.log(yr);
let un=page.locator("//div[text()='Unit']");
await un.scrollIntoViewIfNeeded();
await page.locator("//div[text()='Unit']//following::input[1]").click();
await page.locator("//div[text()='Acceleration']").click();
await page.locator("//div[contains(text(),'Meter')]").click();
/*await Promise.all(
    [

        page.waitForSelector("section>span"),
        await page.locator('a:has-text("google")').click()

    ]
);

   

*/
    
    


    

});



