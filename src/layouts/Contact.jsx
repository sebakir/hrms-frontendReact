import "../styles/Contact.css";

export default function () {
  const formSubmit = (e) => {
    e.preventDefault();
    const formDiv = e.target;
    const parent = formDiv.parentNode;
    const newDiv = document.createElement("div");
    newDiv.appendChild(
      document.createTextNode(
        "Thank you! Your submission has been received! We'll be in touch soon!"
      )
    );
    formDiv.remove();
    newDiv.classList.add("green-div");
    parent.appendChild(newDiv);
    // console.log(newDiv());
  };

  return (
    <div className="contact-page">
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>Acme Outdoors 123 Rainy Street Oklahoma City, OK 73129</p>‍
        <span>
          <b>General Inquiries:</b> (405) 555-5555
        </span>
        <br />
        <span>
          <b>Customer Support:</b> (405) 555-5556
        </span>
      </div>
      <div className="contact-form">
        <h1>Contact Form</h1>
        <span>
          Send us a message and we'll get back to you as soon as we can!
        </span>
        <form onSubmit={formSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your email address"
            required
          />
          <label htmlFor="message">Your Message</label>
          <textarea name="message" placeholder="Enter Your Message" />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
