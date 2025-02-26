import { beforeAll, afterAll } from 'vitest';

beforeAll(() => {
    console.log('Executed before all test suites');
});

afterAll(() => {
    console.log('Executed after all test suites');
});
