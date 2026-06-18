// jsdom polyfills for missing DOM APIs
/* eslint-disable @typescript-eslint/no-unused-vars */
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
/* eslint-enable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-empty-function
Element.prototype.scrollTo = () => {};
