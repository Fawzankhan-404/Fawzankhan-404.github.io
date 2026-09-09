// Native links and disclosures work without JavaScript. CSS owns optional motion.
document.querySelectorAll('.print-button').forEach((button) => {
    button.addEventListener('click', () => window.print());
});
