import { Container, Row , Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Headerimg from "../Assets/img/Headerimg.jpg"
import { useEffect, useState } from "react";

export const Banner = () => {
    const [loopNum,setLoopNum]=useState(0)
    const [isDeleting,setIsDeleting]=useState(false)
    const toRotate =[ " Web Developer", " Web Designer" , " UI/UX Designer"]
    const [text,setText]=useState('')
    const period=2000
    const [delta,setDelta]= useState(300-Math.random()* 100)

    useEffect(()=>{
        let ticker =setInterval(() => {
            tick();
        },delta);

        return()=>{clearInterval(ticker)}
    },[text])

    const tick =()=>
    {
        let i=loopNum % toRotate.length
        let fullText=toRotate[i]
        let updatedText= isDeleting? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        setText(updatedText)

        if(isDeleting)
        {
            setDelta(prevDelta=> prevDelta /2)
        }

        if(!isDeleting && updatedText ===fullText)
        {
            setIsDeleting(true)
            setDelta(period)
        } 
        else if(isDeleting && updatedText === '')
        {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(300)
        }
    }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi i'm webdecoded `}<span className="wrap">{text}</span></h1>
        <p>kjshduwuehdsiuadhn sdhyehdguadj daqhgedqwhyuj ywegdtayusuaiwhsdbjuwk dhwayegd6ydgbyhbhjb jkuehgaudtegdyuhbd hgefd5iwtqdgvwyhjbjk</p>
         <button onClick={()=>console.log("connect")}>Let's Connect <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={Headerimg} alt="Header img"></img>
            </Col>
        </Row>
      </Container>
    </section>
  );
};
