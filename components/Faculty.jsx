import React from 'react';
import { Card, Avatar } from 'antd';
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
          breakpoints: {
            1024: {
              // destroy: true,
              perPage: 3,
            },
            1440: {
              // destroy: true,
              perPage: 4,
            },
            768: {
              // destroy: true,
              perPage: 2,
            },
            320: {
              // destroy: true,
              perPage: 1,
            },
          },
          mediaQuery: 'min',
          // breakpoints: {
          //   640: {
          //     destroy: true,
          //   },
          // },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg1.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                MEENA UGALE
              </h1>

              <p>HOD, Assistant Professor </p>

              <p className="mt-8 text-base text-[#000000;] ">
                meena.u@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +919867646658 <br /> M.E. (Computer Engineering)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg2.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                FR.DR. JOHN ROSE SJ
              </h1>

              <p>Associate Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                johnrose@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +919833627714 <br /> MS (Computer Engineering)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg3.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                FR.DR. THOMAS SCHWARZ SJ
              </h1>

              <p>Adjunct Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                thomas.s@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +1 (408) 724-109 <br /> M.E. (Computer Science)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg4.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                CHHAYA DIPAK DHAVALE
              </h1>

              <p>Assistant Professor </p>

              <p className="mt-8 text-base text-[#000000;] ">
                chhaya.n@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +918097181363 <br /> M.E. (Computer Engineering)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg5.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                JAYCHAND UPADHYAY
              </h1>

              <p>Assistant Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                jaychand.u@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +919029459173 <br /> M.E. (Computer Engineering)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg6.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                MARTINA D'SOUZA
              </h1>

              <p>Assistant Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                martina.r@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +919869279279 <br /> M.E (Computer Engineering)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg7.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                JYOTSNA BHUSHAN MORE
              </h1>

              <p>Assistant Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                jyotsna.m@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +919920326161 <br /> M.E (Computer Engineering)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg8.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                SUVARNA ARANJO
              </h1>

              <p>Assistant Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                suvarna.b@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +918424972799 <br /> M.E (Information Technology)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg9.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                SULOCHANA DEVI
              </h1>

              <p>Assistant Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                sulochana.d@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +918652231801 <br /> M.E (Computer Engineering)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg10.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                AMIT NAROTE
              </h1>

              <p>Assistant Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                amit.n@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +917977003366 <br /> M.E. (Computer Science)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg11.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                JAYA JESWANI
              </h1>

              <p>Assistant Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                jaya.j@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +919082185124 <br /> M.E. (Computer Engineering)
              </p>
            </div>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card
            hoverable
            style={{
              width: 280,
              height: 450,
              // boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',

              textAlign: 'center',
            }}
            className="mt-5 ml-12 rounded-2xl mb-7 drop-shadow-xl"
          >
            <Avatar
              style={{
                width: 180,
                height: 180,
                position: 'relative',
                bottom: 40,
                top: 10,
              }}
              src="/assets/images/faculty/facultyimg12.png"
              className="outline-offset-2 outline outline-indigo-600"
            />

            <div className="mt-7">
              <h1 className="font-headings font-extrabold text-xl text-[#353535]">
                MS.STELLA J
              </h1>

              <p>Assistant Professor</p>

              <p className="mt-8 text-base text-[#000000;] ">
                stella@xavier.ac.in
              </p>

              <p className="text-base text-[#151515;] ">
                +91 8291606668 <br /> B.E. ECE, M.E. Applied Electronics.
              </p>
            </div>
          </Card>
        </SplideSlide>
      </Splide>
    </div>
  </div>
);

export default Faculty;
