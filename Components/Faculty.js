import React from 'react';
import { Card, Avatar, Typography, Button } from 'antd';

import Image from 'next/image';

const Faculty = () => (
  <div className="2xl:mx-[150px] lg:mx-[150px] xl:mx-[150px]">
    <h1 className="text-4xl font-fira text-bold">Faculty</h1>
    <div className="grid 2xl:mt-5 lg:mt-5 2xl:grid-cols-5 2xl:gap-16 lg:gap-16 lg:grid-cols-2 xl:grid-cols-3">
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
        <Typography style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}>
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
        <Typography style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}>
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
        <Typography style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}>
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
        <Typography style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}>
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
      <Card
        className="2xl:invisible lg:invisible xl:visible"
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
        <Typography style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}>
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
      <Card
        className="2xl:invisible lg:invisible xl:visible"
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
        <Typography style={{ fontWeight: 'bold', paddingTop: 3, fontSize: 17 }}>
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
      <Button
        type="link"
        className="lg:relative lg:left-[190px] lg:bottom-[530px] text-[20px] overflow-hidden 2xl:relative 2xl:left-[1000px] 2xl:bottom-[280px] xl:relative xl:left-[390px]"
      >
        View More ...
      </Button>
    </div>
  </div>
);

export default Faculty;
