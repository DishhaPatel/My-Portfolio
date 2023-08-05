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
            <span className="tagline">Hello Folks</span>
            <h1>
              I'm <span className="wrap">{text}</span>
            </h1>
            <p>
              Highly motivated and enthusiastic Full Stack Developer with
              experience in designing, developing and maintaining web
              applications using technologies such as JavaScript, React,
              Node.js.
            </p>
          {/*   <button onClick={() => window.location.assign("/#contacts")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={logoImg} alt="Header img" width="320" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
