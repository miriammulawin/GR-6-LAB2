function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Have questions or inquiries? Fill out the form below and we’ll get
            back to you as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Type your message here"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Our Information</h3>
            <p>📍 Banay-Banay, Cabuyao, Laguna</p>
            <p>📞 (999) 888-7777</p>
            <p>📧 @pnc.edu.ph</p>
            <p>⏰ Monday - Friday | 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

