import HeroImage from "../assets/images/hero.svg";

function Home() {
  return (
    <div className="home pb-10 ">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Website Profesional Untuk <span className="font-bold text-sky-400">Bisnis Anda</span>
            </h1>
            <p className="text-base/8 mb-7"> Kami menyediakan layanan pembuatan dan pengelolaan website modern yang cepat, aman, dan responsif. 
              Tingkatkan kredibilitas bisnis Anda dengan tampilan yang menarik dan pengalaman pengguna terbaik.
            </p>
            <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
              Pelajari Lebih Lanjut <i className="ri-arrow-right-line ms-1"></i></a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="" className="md:w-full w-[400px] md:m-0 mx-auto"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
