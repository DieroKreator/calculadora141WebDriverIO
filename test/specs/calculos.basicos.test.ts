import { expect, $ } from '@wdio/globals'

describe('Calculator App - Addition', () => {
    it('should add two numbers correctly', async () => {
        // Locate number buttons, operators, and result field
        const button7 = $('accessibility id:7');
        const button2 = $('accessibility id:2');
        const addButton = $('accessibility id:plus');
        const equalsButton = $('accessibility id:equals');
        const resultField = $('id:com.google.android.calculator:id/result_final');
        const clearBtn = $('accessibility id:clear');

        // Perform the operation: 1 + 2
        await button7.click();
        await addButton.click();
        await button2.click();
        await equalsButton.click();
        await clearBtn.click();

        // Verify the result
        const result = await resultField.getText();
        expect(result).toBe('9');
    });
});

describe('Calculator App - Subtraction', () => {
    it('should subtract two numbers correctly', async () => {
        const button9 = $('accessibility id:9');
        const button2 = $('accessibility id:2');
        const subtractButton = $('accessibility id:minus');
        const equalsButton = $('accessibility id:equals');
        const resultField = $('id:com.google.android.calculator:id/result_final');
        const clearBtn = $('accessibility id:clear');

        // Perform the operation: 5 - 3
        await button9.click();
        await subtractButton.click();
        await button2.click();
        await equalsButton.click();
        await clearBtn.click();

        // Verify the result
        const result = await resultField.getText();
        expect(result).toBe('7');
    });
});

describe('Calculator App - Multiplication', () => {
    it('should multiply two numbers correctly', async () => {
        const button4 = $('accessibility id:4');
        const button2 = $('accessibility id:2');
        const multiplyButton = $('accessibility id:multiply');
        const equalsButton = $('accessibility id:equals');
        const resultField = $('id:com.google.android.calculator:id/result_final');
        const clearBtn = $('accessibility id:clear');

        // Perform the operation: 4 * 2
        await button4.click();
        await multiplyButton.click();
        await button2.click();
        await equalsButton.click();
        await clearBtn.click();

        // Verify the result
        const result = await resultField.getText();
        expect(result).toBe('8');
    });
});

describe('Calculator App - Division', () => {
    it('should divide two numbers correctly', async () => {
        const button8 = $('accessibility id:8');
        const button2 = $('accessibility id:2');
        const divideButton = $('accessibility id:divide');
        const equalsButton = $('accessibility id:equals');
        const resultField = $('id:com.google.android.calculator:id/result_final');
        const clearBtn = $('accessibility id:clear');

        // Perform the operation: 8 / 2
        await button8.click();
        await divideButton.click();
        await button2.click();
        await equalsButton.click();
        await clearBtn.click();

        // Verify the result
        const result = await resultField.getText();
        expect(result).toBe('4');
    });
});