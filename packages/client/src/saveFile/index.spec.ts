import { describe, test, expect } from 'vitest';
import {
  saveFile,
  saveJsonFile,
  saveHtmlFile,
  saveTxtFile,
  saveMarkDownFile,
} from './index';

describe('Save File', () => {
  test('Save File', () => {
    const content = new Blob(['test']);

    expect(saveFile('test', content)).toBe(true);
  });

  test('Save Json', () => {
    const content = JSON.stringify({
      test: 'Save Json',
    });

    expect(saveJsonFile('test', content)).toBe(true);
  });

  test('Save Html', () => {
    const content = '<div>test</div>';

    expect(saveHtmlFile('test', content)).toBe(true);
  });

  test('Save Txt', () => {
    const content = 'test';

    expect(saveTxtFile('test', content)).toBe(true);
  });

  test('Save MarkDown', () => {
    const content = '# test';

    expect(saveMarkDownFile('test', content)).toBe(true);
  });
});
