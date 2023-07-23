import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Icon } from "@iconify/react";

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef();

  const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const emailPublicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setIsSending(true);

      await emailjs.sendForm(
        emailServiceId,
        emailTemplateId,
        formRef.current,
        emailPublicKey
      );
    } catch (error) {
      // intentional
      setIsSending(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={""}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={formRef} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="user_name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="email@example.com"
                          name="user_email"
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1 pt-2">
                        <textarea
                          rows="6"
                          defaultValue={"Hello Disha,"}
                          name="message"
                          required
                        />
                        <button type="submit" disabled={isSending}>
                          {isSending ? (
                            <span>Sending...</span>
                          ) : (
                            <span>
                              Send
                              <Icon
                                style={{ marginLeft: 5 }}
                                icon="fluent:send-16-filled"
                              />
                            </span>
                          )}
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
