import { Container, Row, Col } from "react-bootstrap";
import logoImg from "../Assets/img/logo.png";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [" Disha Patel", " Frontend Developer", " UI/UX Designer"];
  const [text, setText] = useState("");
  const period = 1000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              I'm <span className="wrap">{text}</span>
            </h1>
            <p>
              Detail-oriented Frontend Developer with a passion for crafting
              visually appealing and user-friendly web applications. Proficient
              in HTML, CSS, and JavaScript, with a focus on responsive design
              and cross-browser compatibility.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={logoImg} alt="Header img" width="350" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
