import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "fc21808f-9972-47f8-9d3c-36601afe9914");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        e.target.reset();
        setTimeout(() => setResult(""), 4000);
      } else {
        setResult("Something went wrong. Please try again!");
      }
    } catch (error) {
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-title-wrapper">
          <h1 className="section-heading-gradient">CONTACT</h1>
          <p className="section-subtitle">Let's build something great together.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-text-col">
            <p>
              I'm always open to discussing full-stack development opportunities, 
              innovative AI projects, or collaborative hackathons.
            </p>
            <div className="contact-email-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>akshatsrivastava1204@gmail.com</span>
            </div>
          </div>

          <div className="contact-form-col">
            <form onSubmit={onSubmit} className="theme-form">
              <div className="input-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="How can I help you?" required></textarea>
              </div>

              <button type="submit" className="theme-send-btn">
                {result === "Sending..." ? "SENDING..." : "SEND MESSAGE"}
              </button>
              
              {result && result !== "Sending..." && (
                <p className={`form-result ${result.includes("success") ? "success" : "error"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
