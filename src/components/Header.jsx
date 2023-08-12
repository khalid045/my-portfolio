import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
const Header = () => {
  const handleClickGithub = () => {
    window.location.href = "https://github.com/khalid045";
  };
  const handleClickLinkin = () => {
    window.location.href = "https://www.linkedin.com/in/sarfo-khalid-aa2542236";
  };
  // const handleClickTwiter = () => {
  //   window.location.href = "#";
  // };
  const handleClickFrontend = () => {
    window.location.href = "https://www.frontendmentor.io/profile/khalid045";
  };
  const countryAPI = () => {
    window.location.href = "https://unrivaled-crepe-8ea2d2.netlify.app/";
  };
  const countryAPICode = () => {
    window.location.href =
      " https://github.com/khalid045/countries_api_app.git";
  };
  const socialMedia = () => {
    window.location.href = " https://github.com/khalid045/social-media-app.git";
  };
  // const socialMediaCode = () => {
  //   window.location.href = " #";
  // };
  const todoAPP = () => {
    window.location.href = " https://gorgeous-elf-c8262d.netlify.app/";
  };

  const todoAPPCode = () => {
    window.location.href = " https://github.com/khalid045/todo-app.git";
  };
  // const divfinderAPP = () => {
  //   window.location.href = " https://github.com/khalid045/todo-app.git";
  // };
  const divfinderAPPCode = () => {
    window.location.href = "  https://github.com/khalid045/div-finder.git";
  };

  return (
    <div className="grid grid-cols-1 w-[343px] h-[160px] md:w-[708px] lg:w-[1440px]  bg-transparent text-white justify-center items-center ">
      <div className="ml-[25%] w-[174px] h-[80px] font-space-grotest  mb-4 md:w-[708px] md:flex md:justify-between md:items-center md:ml-0 md:p-5 lg:w-[1440px] lg:justify-between lg:gap-10 ">
        <div className="flex justify-center m-2 font-extrabold md:text-[30px] lg:text-[50px] lg:m-[60px]">
          Khalid_045
        </div>
        <div className="flex justify-around mb-7 cursor-pointer md:flex md:gap-5 md:text-[30px] md:mt-3 lg:text-[50px] lg:m-[60px]">
          <AiFillGithub onClick={handleClickGithub} />
          <AiFillLinkedin onClick={handleClickLinkin} />
          <SiFrontendmentor onClick={handleClickFrontend} />
          <AiOutlineTwitter />
        </div>
      </div>

      <div className=" grid grid-cols-1 w-[351px] h-[482px] md:w-[708px] justify-center font-space-grotest md:flex md:flex-row-reverse md:gap-1 lg:w-[1440px] lg:flex-row-reverse lg:justify-around ">
        <div className="flex justify-center md:ml-10">
          <img
            src="./assets/khalid.jpg"
            alt=""
            className=" h-[260px] rounded-lg  md:w-[322px] md:h-[450px] md:mr-[60px] lg:w-[370px] lg:h-[500px] lg:ml-[90px]"
          />
        </div>
        <div className=" w-[343px] md:w-[400px] md:h-[450px] md:ml-2 lg:w-[680px] lg:h-[500px]">
          <div className=" text-center text-gray-400 font-space-grotest text-[40px] tracking-[-1.14px] my-0 lg:text-[70px]">
            <p>Nice to meet you</p>
            <p>I'm Khalid Sarfo </p>
            <div className=" ml-[60px] w-[225px] h-[4px] bg-green-600"></div>
          </div>
          <div className="text-center  text-gray-400 md:text-[25px] md:mb-8 lg:text-[30px]">
            <h3>
              Based in the Ghana, I’m a front-end developer passionate about
              building accessible web apps that users love and also a computer
              hardware technician.
            </h3>
          </div>
          <div className=" text-gray-400">
            <button className="ml-[110px] cursor-pointer md:text-[20px] border-b-2 border-green-600 lg:text-[40px] lg:float-left">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
      <hr className="m-5 lg:mt-[70px]" />
      {/** */}
      <div className="grid grid-cols-1 gap-8 text-center w-[343px] h-[604px] bg-transparent font-space-grotest text-[18px] md:grid md:grid-cols-2 md:w-[708px] lg:w-[1440px] lg:grid lg:grid-cols-3">
        <div className=" grid w-[345px] h-[67px] justify-center lg:h-[120px] ">
          <h1 className=" font-extrabold text-[24px]">HTML</h1>
          <img
            src="./assets/html.png"
            alt=""
            className="ml-[45px] w-[50px] h-[35px] "
          />
          <h2 className=" text-gray-400">4 Years Experience</h2>
        </div>
        <div className="grid w-[345px] h-[67px] justify-center">
          <h1 className=" font-extrabold text-[24px]">CSS</h1>
          <img
            src="./assets/css.png"
            alt=""
            className=" ml-[45px] w-[50px] h-[35px] "
          />
          <h2 className=" text-gray-400">4 Years Experience</h2>
        </div>
        <div className="grid w-[345px] h-[67px] justify-center">
          <h1 className=" font-extrabold text-[24px]">LARAVEL</h1>
          <img
            src="./assets/laravel.png"
            alt=""
            className="ml-[45px] w-[50px] h-[35px] "
          />
          <h2 className=" text-gray-400">1 Years Experience</h2>
        </div>
        <div className="grid w-[345px] h-[67px] justify-center">
          <h1 className=" font-extrabold text-[24px]">REACT</h1>
          <img
            src="./assets/react.png"
            alt=""
            className="ml-[45px] w-[50px] h-[35px] "
          />
          <h2 className=" text-gray-400">1 Years Experience</h2>
        </div>
        <div className="grid w-[345px] h-[67px] justify-center">
          <h1 className=" font-extrabold text-[24px]">VB.NET</h1>
          <img
            src="./assets/vb.jpeg"
            alt=""
            className=" ml-[45px] w-[50px] h-[35px] "
          />
          <h2 className=" text-gray-400">2 Years Experience</h2>
        </div>
        <div className="grid w-[345px] h-[67px] justify-center">
          <h1 className=" font-extrabold text-[24px]">C++</h1>
          <img
            src="./assets/c.png"
            alt=""
            className="ml-[45px] w-[50px] h-[35px] "
          />
          <h2 className=" text-gray-400">2 Years Experience</h2>
        </div>
      </div>
      <hr className="mt-[50px] lg:mt-2" />

      {/**Project cards */}

      <div className="w-[345px] h-[40px] flex justify-between m-4 md:w-[708px] md:justify-between lg:w-[1440px] lg:justify-around lg:mb-[40px]">
        <h1 className=" text-[20px] md:text-[30px] lg:text-[40px]">Projects</h1>
        <button className=" border-b-2 border-green-600 mr-4 md:text-[30px] ">
          CONTACT ME
        </button>
      </div>
      <div className=" md:w-[708px] md:grid md:grid-cols-2 lg:w-[1440px] lg:justify-around lg:ml-[110px]">
        <div className=" grid grid-cols-1 w-[340px] h-auto mb-6 bg-transparent lg:w-[520px] lg:h-[auto]">
          <div className=" lg:relative">
            <img
              src="./assets/social.png"
              alt=" "
              className="w-[100%] h-[250px] lg:w-[100%] lg:h-[300px]"
            />
            <div>
              <p className=" font-space-grotest text-[28px] m-3">
                SOCIAL MEDIA APP
              </p>
              <div className="flex gap-5 m-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>REACT</span>
              </div>
              <div className=" flex gap-6 m-3 cursor-pointer ">
                <button className="border-b-2 border-green-500 lg:absolute lg:top-[110px] lg:left-[180px] lg:text-[25px] lg:text-green-700 lg:hover:text-red-700">
                  VIEW PROJECT
                </button>
                <button
                  onClick={socialMedia}
                  className="border-b-2 border-green-500 lg:absolute lg:top-[150px] lg:left-[200px] lg:mt-3 lg:text-[25px] lg:text-green-700 lg:hover:text-red-700"
                >
                  VIEW CODE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-auto mb-6 bg-transparent lg:w-[520px] lg:h-[auto]">
          <div className=" lg:relative">
            <img
              src="./assets/countryAPI.png"
              alt=" "
              className="w-[100%] h-[250px] lg:w-[100%] lg:h-[300px]"
            />
            <div>
              <p className=" font-space-grotest text-[28px] m-3">COUNTRY API</p>
              <div className="flex gap-5 m-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>REACT</span>
              </div>
              <div className=" flex gap-6 m-3 cursor-pointer  ">
                <button
                  onClick={countryAPI}
                  className="border-b-2 border-green-500 lg:absolute lg:top-[110px] lg:left-[180px] lg:text-[25px] lg:text-green-700 lg:hover:text-red-700 "
                >
                  VIEW PROJECT
                </button>
                <button
                  onClick={countryAPICode}
                  className="border-b-2 border-green-500 lg:absolute lg:top-[150px] lg:left-[200px] lg:mt-3 lg:text-[25px] lg:text-green-700 lg:hover:text-red-700"
                >
                  VIEW CODE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-auto mb-6 bg-transparent lg:w-[520px] lg:h-[auto]">
          <div className=" lg:relative">
            <img
              src="./assets/todo.png"
              alt=" "
              className="w-[100%] h-[250px] lg:w-[100%] lg:h-[300px]"
            />
            <div>
              <p className=" font-space-grotest text-[28px] m-3">TO DO APP</p>
              <div className="flex gap-5 m-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>REACT</span>
              </div>
              <div className=" flex gap-6 m-3 cursor-pointer ">
                <button
                  onClick={todoAPP}
                  className="border-b-2 border-green-500 lg:absolute lg:top-[110px] lg:left-[180px] lg:text-[25px] lg:text-green-700 lg:hover:text-red-700"
                >
                  VIEW PROJECT
                </button>
                <button
                  onClick={todoAPPCode}
                  className="border-b-2 border-green-500 lg:absolute lg:top-[150px] lg:left-[200px] lg:mt-3 lg:text-[25px] lg:text-green-700 lg:hover:text-red-700"
                >
                  VIEW CODE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-auto mb-6 bg-transparent lg:w-[520px] lg:h-[auto]">
          <div className=" lg:relative">
            <img
              src="./assets/div.png"
              alt=" "
              className="w-[100%] h-[250px] lg:w-[100%] lg:h-[300px]"
            />
            <div>
              <p className=" font-space-grotest text-[28px] m-3">DIV FINDER</p>
              <div className="flex gap-5 m-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>REACT</span>
              </div>
              <div className=" flex gap-6 m-3 cursor-pointer  ">
                <button className="border-b-2 border-green-500 lg:absolute lg:top-[110px] lg:left-[180px] lg:text-[25px] lg:text-green-700 lg:hover:text-red-700">
                  VIEW PROJECT
                </button>
                <button
                  onClick={divfinderAPPCode}
                  className="border-b-2 border-green-500 lg:absolute lg:top-[150px] lg:left-[200px] lg:mt-3 lg:text-[25px] lg:text-green-700 lg:hover:text-red-700"
                >
                  VIEW CODE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** */}
      <div className=" grid grid-cols-1 w-[352px] h-[750px] md:w-[708px] lg:w-[1440px] lg:flex lg:h-[500px]  lg:justify-around">
        <div className="  ">
          <div className=" text-center font-space-grotest mb-[40px] lg:w-[650px] lg:h-[400px]">
            <p className=" text-[38px] md:text-[65px]">Contact</p>
            <span className="p-4 md:text-[30px] lg:text-[45px]">
              I would love to hear your about your project and how i couild help
              you Please fill in the form and i will get back to you as soon as
              possible
            </span>
          </div>
        </div>
        {/**Form */}
        <div className="md:grid md:w-[708px] h-[400px] justify-center lg:w-[650px] lg:h-[400px]">
          <div className="grid text-gray-400 mb-5 pl-2">
            <span className=" ml-5 text-[22px]">NAME</span>
            <input
              type="text"
              className=" bg-transparent border-b-2 border-gray-400 w-[340px] md:w-[480px] h-[50px] outline-none"
            />
          </div>
          <div className="grid text-gray-400 mb-5 pl-2">
            <span className=" ml-5 text-[22px]">EMAIL</span>
            <input
              type="email"
              className=" bg-transparent border-b-2 border-gray-400 w-[340px] md:w-[480px] h-[50px] outline-none"
            />
          </div>
          <div className="grid text-gray-400 pl-2">
            <span className=" ml-5 text-[22px]">MESSAGE</span>
            <textarea className=" bg-transparent border-b-2 border-gray-400 w-[340px] md:w-[480px] h-[100px] outline-none"></textarea>
          </div>
          <button className="border-b-2 float-right mt-[20px] mr-4 border-green-500 md:mr-[120px] md:w-[150px] md:text-[20px] lg:w-[170px] lg:text-[22px] lg:ml-[320px]">
            SEND MESSAGE
          </button>
        </div>
      </div>

      {/** */}
      <div className=" flex items-center justify-center w-[352px] h-[200px] mt-1 md:w-[708px] md:pt-[50px] md:flex md:items-center md:justify-center lg:w-[1440px] lg:flex lg:items-center lg:justify-center">
        <div className=" w-[200px] h-[100px]">
          <div className="flex justify-center m-6 font-extrabold md:text-[35px]">
            Khalid_045
          </div>
          <div className="flex justify-around mb-7 cursor-pointer md:text-[35px]">
            <AiFillGithub onClick={handleClickGithub} />
            <AiFillLinkedin onClick={handleClickLinkin} />
            <SiFrontendmentor onClick={handleClickFrontend} />

            <AiOutlineTwitter />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
