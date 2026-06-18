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
Object.defineProperty(document.body.style, 'transform', {
  value: () => ({
    enumerable: true,
    configurable: true,
  }),
});
/* eslint-enable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-empty-function
Element.prototype.scrollTo = () => {};
