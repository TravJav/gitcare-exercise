import '@testing-library/jest-dom'; // For extended matchers
import { vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

vi.spyOn(console, 'error').mockImplementation((...args) => {
  if (args[0]?.toString().includes('Some expected error during testing')) return;
  console.warn(...args);
});
