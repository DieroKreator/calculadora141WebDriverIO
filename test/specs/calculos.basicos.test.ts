import { expect, $ } from '@wdio/globals'

describe('Mobile App Test', () => {
    it('should launch the app', async () => {
        const activity = await driver.getCurrentActivity();
        console.log(`Current activity: ${activity}`);
    });
});

// describe('Calculator App - Addition', () => {
//     it('should add two numbers correctly', async () => {
//         // Locate number buttons, operators, and result field
//         const button1 = await $('accessibility id:7');
//         const button2 = await $('~2');
//         const addButton = await $('~+');
//         const equalsButton = await $('~=');
//         const resultField = await $('~result');

//         // Perform the operation: 1 + 2
//         await button1.click();
//         await addButton.click();
//         await button2.click();
//         await equalsButton.click();

//         // Verify the result
//         const result = await resultField.getText();
//         expect(result).toBe('3');
//     });
// });

// describe('Calculator App - Subtraction', () => {
//     it('should subtract two numbers correctly', async () => {
//         const button5 = await $('~5');
//         const button3 = await $('~3');
//         const subtractButton = await $('~-');
//         const equalsButton = await $('~=');
//         const resultField = await $('~result');

//         // Perform the operation: 5 - 3
//         await button5.click();
//         await subtractButton.click();
//         await button3.click();
//         await equalsButton.click();

//         // Verify the result
//         const result = await resultField.getText();
//         expect(result).toBe('2');
//     });
// });

// describe('Calculator App - Multiplication', () => {
//     it('should multiply two numbers correctly', async () => {
//         const button4 = await $('~4');
//         const button2 = await $('~2');
//         const multiplyButton = await $('~*');
//         const equalsButton = await $('~=');
//         const resultField = await $('~result');

//         // Perform the operation: 4 * 2
//         await button4.click();
//         await multiplyButton.click();
//         await button2.click();
//         await equalsButton.click();

//         // Verify the result
//         const result = await resultField.getText();
//         expect(result).toBe('8');
//     });
// });

// describe('Calculator App - Division', () => {
//     it('should divide two numbers correctly', async () => {
//         const button8 = await $('~8');
//         const button2 = await $('~2');
//         const divideButton = await $('~/');
//         const equalsButton = await $('~=');
//         const resultField = await $('~result');

//         // Perform the operation: 8 / 2
//         await button8.click();
//         await divideButton.click();
//         await button2.click();
//         await equalsButton.click();

//         // Verify the result
//         const result = await resultField.getText();
//         expect(result).toBe('4');
//     });
// });