import { useEffect, useRef } from "react";
import "./styles.css";
const Canvas = () => {
  const canvasRef = useRef();



  useEffect(() => {
    let context = canvasRef.current.getContext("2d");
    let windowW = (canvasRef.current.width = 1200);
    let windowH = (canvasRef.current.height = 600);
    // let windowW = window.innerWidth;
    // canvasRef.current.width = windowW - 420
    // canvasRef.current.height = windowH
    canvasRef.current.className = "bgCanvas";
    // context.fillStyle = "red";
    // context.fillRect(20, 100, 20, 20);
    // context.beginPath();
    // context.strokeStyle = "blue"
    // context.
    // context.arc(20, 20, 15, 0, Math.PI * 2, false);
    // context.stroke();
    // context.closePath()
    class Circle {
      constructor(xpos, ypos, radio, color, text, speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radio = radio;
        this.color = color;
        this.text = text;
        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
      }

      draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;

        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "bold 20px Arial";
        context.fillStyle = "#fff";
        context.fillText(this.text, this.xpos, this.ypos);
        context.lineWidth = 2;
        context.arc(this.xpos, this.ypos, this.radio, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
      }

      update() {
        this.draw(context);
        if (this.xpos + this.radio > windowW) {
          this.dx = -this.dx;
        }
        if (this.xpos - this.radio < 0) {
          this.dx = -this.dx;
        }
        if (this.ypos - this.radio < 0) {
          this.dy = -this.dy;
        }
        if (this.ypos + this.radio > windowH) {
          this.dy = -this.dy;
        }
        this.xpos += this.dx;
        this.ypos += this.dy;
      }
    }

    let createCircle = (circle) => {
      circle.draw(context);
    };
    let getDistance = (xpos1, ypos1, xpos2, ypos2) => {
      let result = Math.sqrt(
        Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos1, 2)
      );
      //   console.log(result);
      return result;
    };

    let allCircles = [];
    let randomNumber = (min, max) => {
      let result = Math.random() * (max - min) + min;
      //   console.log(result);
      return result;
    };
    const liTech = [
      "JavaScript",
      "Redux",
      "React",
      "TypeScript",
      "Bootstrap",
      "SASS",
      "CSS",
      "Python",
      "Express",
      "Sequelize",
      "NodeJS",
      "PostgreSQL",
    ];
    for (let i = 0; i < liTech.length; i++) {
      let radius = 50;
      let randomX = randomNumber(radius, windowW - radius);
      let randomY = randomNumber(radius, windowH - radius);
      for (let a = 0; a < allCircles.length; a++) {
        while (
          getDistance(
            randomX,
            randomY,
            allCircles[a].xpos,
            allCircles[a].ypos - radius + allCircles[a].radio
          ) < 100
        ) {
          randomX = randomNumber(radius, windowW - radius);
          randomY = randomNumber(radius, windowH - radius);
        }
      }

      let myCircle = new Circle(
        randomX,
        randomY,
        radius,
        "transparent",
        liTech[i],
        1
      );

      allCircles.push(myCircle);
      createCircle(allCircles[i]);
    }

    let updateCircle = () => {
      requestAnimationFrame(updateCircle);
      context.clearRect(0, 0, windowW, windowH);
      allCircles.forEach((ele) => {
        ele.update();
      });
    };
    updateCircle();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
