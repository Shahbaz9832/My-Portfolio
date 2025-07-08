const Contact = () => (
  <section id="contact" className="container mx-auto py-12 px-4">
    <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>

    <p>
      <strong>Email:</strong>{" "}
      <a href="mailto:shahbazansari6464141@gmail.com" className="text-blue-600 hover:underline">
        shahbazansari6464141@gmail.com
      </a>
    </p>

    <p>
      <strong>LinkedIn:</strong>{" "}
      <a
        href="https://www.linkedin.com/in/shahbaz-ansari-469326274/"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/shahbaz-ansari
      </a>
    </p>

    <p>
      <strong>GitHub:</strong>{" "}
      <a
        href="https://github.com/Shahbaz9832"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/Shahbaz9832
      </a>
    </p>
  </section>
);

export default Contact;
