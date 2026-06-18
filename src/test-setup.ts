// jsdom polyfills for missing DOM APIs

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    display: 'none',
    appearance: ['-webkit-appearance'],
    getPropertyValue: (_prop: string) => '',
  }),
});
try {
  Object.defineProperty(document.body.style, 'transform', {
    value: () => ({
      enumerable: true,
      configurable: true,
    }),
    configurable: true,
  });
} catch {
  // already defined as non-configurable in this jsdom version; skip
}

Element.prototype.scrollTo = () => {};
