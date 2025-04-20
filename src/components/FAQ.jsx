import React from 'react';

const FAQ = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <ul className="space-y-4">
        <li>
          <strong>Q: What is this website about?</strong>
          <p>A: This website showcases our services, portfolio, and blog.</p>
        </li>
        <li>
          <strong>Q: How do I contact you?</strong>
          <p>A: Use the contact form on the Contact page.</p>
        </li>
        <li>
          <strong>Q: Do you offer custom solutions?</strong>
          <p>A: Yes! Reach out to discuss your project.</p>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
