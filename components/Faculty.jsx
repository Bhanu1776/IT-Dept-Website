import React from 'react';
import { Card, Avatar, Typography, Button } from 'antd';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';

const Faculty = () => (
  <div className="container my-10">
    <h1 className="text-4xl text-center font-fira text-bold">Faculty</h1>
    <div className=" 2xl:mt-5 lg:mt-5 lg:gap-16 lg:grid-cols-2 xl:grid-cols-3">
      <Splide
        options={{
          type: 'loop',
          gap: '5px',
          drag: 'free',
          arrows: false,
          pagination: false,
          perPage: 4,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
            autoStart: true,
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg1.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              MEENA UGALE
            </Typography>
            <Typography>
              <h5>HOD, Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>meena.u@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>+919867646658</h5>
            </Typography>
            <Typography>
              <h5>M.E. (Computer Engineering)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg2.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              FR.DR. JOHN ROSE SJ
            </Typography>
            <Typography>
              <h5>Associate Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>johnrose@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>09833627714</h5>
            </Typography>
            <Typography>
              <h5>MS (Computer Engineering)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg3.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              FR.DR. THOMAS SCHWARZ SJ
            </Typography>
            <Typography>
              <h5>Adjunct Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>thomas.s@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>+1 (408) 724-109</h5>
            </Typography>
            <Typography>
              <h5>M.S. (Computer Science)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg4.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              CHHAYA DIPAK DHAVALE
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>chhaya.n@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>8097181363</h5>
            </Typography>
            <Typography>
              <h5>M.E.(Computer Engg.)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            className=" lg:invisible xl:visible"
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg5.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              JAYCHAND UPADHYAY
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>jaychand.u@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>+91-9029459173</h5>
            </Typography>
            <Typography>
              <h5>M.E.(Computer Engineering)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500">More Detail</Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            className=" lg:invisible xl:visible"
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg6.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              MARTINA D'SOUZA
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>martina.r@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>+919869279279</h5>
            </Typography>
            <Typography>
              <h5>M.E (Computer Engineering)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            className=" lg:invisible xl:visible"
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg7.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              JYOTSNA BHUSHAN MORE
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>jyotsna.m@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>+919920326161</h5>
            </Typography>
            <Typography>
              <h5>M.E. (Computer Engineering)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            className=" lg:invisible xl:visible"
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg8.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              SUVARNA ARANJO
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>suvarna.b@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>+918424972799</h5>
            </Typography>
            <Typography>
              <h5>M.E (Information Technology)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            className=" lg:invisible xl:visible"
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg9.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              SULOCHANA DEVI
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>sulochana.d@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>+918652231801</h5>
            </Typography>
            <Typography>
              <h5>M.Tech (Software Engineering)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            className=" lg:invisible xl:visible"
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg10.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              AMIT NAROTE
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>amit.n@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>917977003366</h5>
            </Typography>
            <Typography>
              <h5>M.E. (Computer Science)</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            className=" lg:invisible xl:visible"
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg11.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              JAYA JESWANI
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>jaya.j@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>9082185124</h5>
            </Typography>
            <Typography>
              <h5>ME in Computer Engineering</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            className=" lg:invisible xl:visible"
            hoverable
            style={{
              width: 300,
              height: 450,
              boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
              textAlign: 'center',
            }}
          >
            <Avatar
              style={{
                width: 200,
                height: 200,
                position: 'relative',
                bottom: 10,
              }}
              src="/Assets/images/facultyimg12.png"
            />
            <Typography
              style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}
            >
              MS.STELLA J
            </Typography>
            <Typography>
              <h5>Assistant Professor</h5>
            </Typography>
            <br />
            <Typography>
              <h5>stella@xavier.ac.in</h5>
            </Typography>
            <Typography>
              <h5>+91 8291606668</h5>
            </Typography>
            <Typography>
              <h5> B.E. ECE , M.E. Applied Electronics.</h5>
            </Typography>
            <Button className="mt-1 text-white bg-blue-500" block="">
              More Detail
            </Button>
          </Card>
        </SplideSlide>
      </Splide>
    </div>
  </div>
);

export default Faculty;
