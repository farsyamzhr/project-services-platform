import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const menuBarClick = () => {
    setShow(!show);
    console.log(show);
  }

  const closeMenuBar = () => {
    setShow(false);
  }

  let menuActive = show ? "right-0" : "-right-full";

  return (
    <div className="navbar fixed w-full transition-all py-4 bg-white shadow shadow-slate-300">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
            <div className="logo">
                <h1 className="sm:text-2xl text-xl font-bold">RancangWeb</h1>
            </div>
            <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto h-full md:translate-y-0 
            md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded
            shadow-lg shadow-slate-400 bg-white font-bold text-black transition-all`}>
                <i className="ri-close-line text-end text-3xl md:hidden block hover:text-sky-500" onClick={closeMenuBar}></i>
                <li className="flex items-center gap-3 hover:text-sky-500">
                    <i className="ri-home-2-line text-3xl md:hidden block"></i>
                    <a href="#home" className="font-medium opacity-75">Beranda</a>
                </li>
                <li className="flex items-center gap-3 hover:text-sky-500">
                    <i className="ri-team-line text-3xl md:hidden block"></i>
                    <a href="#about" className="font-medium opacity-75">Tentang Kami</a>
                </li>
                <li className="flex items-center gap-3 hover:text-sky-500">
                    <i className="ri-customer-service-line text-3xl md:hidden block"></i>
                    <a href="#services" className="font-medium opacity-75">Layanan Kami</a>
                </li>
                <li className="flex items-center gap-3 hover:text-sky-500">
                    <i className="ri-macbook-line text-3xl md:hidden block"></i>
                    <a href="#projects" className="font-medium opacity-75">Project</a>
                </li>
            </ul>
            <div className="social flex items-center gap-2">
                <a href="#footer" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">Social Media</a>
                <i className="ri-menu-line text-3xl md:hidden block" onClick={menuBarClick}></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar