import Input from "components/input";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillFacebook } from "react-icons/ai";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const enable = username && password;
  const imgsRef = useRef();

  useEffect(() => {
    let images = imgsRef.current.querySelectorAll("img");
    let current = 0;

    let length = images.length;
    const imagesSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[length - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");

      if (current == length - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imagesSlider();
    let interval = setInterval(imagesSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [imgsRef]);

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",
  ];
  return (
    <div className="  h-full w-full flex flex-wrap overflow-auto gap-8 justify-center items-center  ">
      <div
        ref={imgsRef}
        className=" hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px] "
      >
        {images.map((img, key) => (
          <img
            key={key}
            src={img}
            className="w-[250px] h-[538px] absolute right-[18px] top-[27px] opacity-0 transition-opacity duration-500"
            alt=""
          />
        ))}
      </div>
      <div className="w-[350px] grid gap-y-4">
        <div className=" bg-white px-[40px]  pt-10 pb-6 ">
          <a className="flex justify-center items-center mb-8" href="#">
            <img
              className="h-[51px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt=""
            />
          </a>
          <form className="grid gap-1.5">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label={"Telefon numarası, kullanıcı adı veya e-posta"}
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label={"Password"}
            />

            <button
              type="submit"
              disabled={!enable}
              className="h-[30px] rounded mt-1 bg-brand text-white text-sm font-semibold disabled:opacity-50 "
            >
              Log In
            </button>
            <div className="flex items-center ">
              <div className="h-px flex-1 bg-gray-300 my-2"></div>
              <span className="px-4 text-[13px] text-gray-500 font-semibold">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>
            <a
              href="#"
              className="flex justify-center mb-2 items-center gap-x-2 text-sm font-semibold text-facebook"
            >
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a
              href="#"
              className="text-xs flex items-center justify-center text-link   "
            >
              Forget password?
            </a>
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Don't have an account?
          <a href="#" className="font-semibold text-brand ">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
