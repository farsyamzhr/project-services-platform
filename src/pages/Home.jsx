import HeroImage from "../assets/images/hero.svg";

function Home() {
  return (
    <div className="home pb-10 ">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Website Profesional Untuk <span className="font-bold text-sky-400">Bisnis Anda</span>
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

        {/* about */}
        <div id="about" className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32">
          <div className="box md:order-1 order-2">
            <img src={HeroImage} alt="" className="lg:w-[500] w-[400px] md:m-0 mx-auto"/>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Website Profesional Untuk <span className="font-bold text-sky-400">Bisnis Anda</span>
            </h1>
            <p className="text-base/loose"> Kami menyediakan layanan pembuatan dan pengelolaan website modern yang cepat, aman, dan responsif. 
              Tingkatkan kredibilitas bisnis Anda dengan tampilan yang menarik dan pengalaman pengguna terbaik.
            </p>
          </div>
        </div>

        {/* services */}
        <div id="services" className="services pt-32">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Layanan</h1>
          <p className="text-center">
            Kami menyediakan berbagai solusi untuk mendukung bisnis Anda tumbuh secara digital.
          </p>
          <div className="service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 text-white">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl"></i>
              <h3 className="text-xl font-bold mt-6 mb-2">
                Pembuatan Website Profesional
                </h3>
              <p className="text-l text-base/loose">
                Bangun website modern, responsif, dan sesuai identitas brand Anda. Kami pastikan tampilan menarik dan performa optimal agar bisnis Anda semakin terpercaya.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl"></i>
              <h3 className="text-xl font-bold mt-6 mb-2">
                Manajemen & Pemeliharaan Website
              </h3>
              <p className="text-l text-base/loose">
                Tidak perlu khawatir soal update atau error! Kami siap mengelola dan menjaga performa website Anda agar tetap stabil, aman, dan bebas bug.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl"></i>
              <h3 className="text-xl font-bold mt-6 mb-2">
                Optimasi SEO & Kecepatan
              </h3>
              <p className="text-l text-base/loose">
                Pastikan website Anda mudah ditemukan di Google. Kami optimalkan struktur, konten, dan kecepatan agar bisnis Anda lebih unggul di hasil pencarian.
              </p>
            </div>
          </div>
        </div>

        {/* projects */}
        <div id="projects" className="projects pt-32">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Project</h1>
          <p className="text-center">Project Unggulan kami, yang telah kami selesaikan untuk berbagai jenis bisnis. Kami fokus pada desain modern, kecepatan, dan pengalaman pengguna yang optimal.</p>
          <div className="projects-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 text-black">
            <div className="box p-2 bg-white shadow">
              <img src={HeroImage} alt="" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">Nama Project</h3>
              <p className="text-l text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, animi eaque odit ea expedita amet alias debitis deserunt voluptatem mollitia possimus veniam sapiente laudantium excepturi quas eos cum. Deleniti, unde.</p>
            </div>
             <div className="box p-2 bg-white shadow">
              <img src={HeroImage} alt="" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">Nama Project</h3>
              <p className="text-l text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, animi eaque odit ea expedita amet alias debitis deserunt voluptatem mollitia possimus veniam sapiente laudantium excepturi quas eos cum. Deleniti, unde.</p>
            </div>
             <div className="box p-2 bg-white shadow">
              <img src={HeroImage} alt="" className="w-full h-[220px]"/>
              <h3 className="text-xl font-bold mt-6 mb-2">Nama Project</h3>
              <p className="text-l text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, animi eaque odit ea expedita amet alias debitis deserunt voluptatem mollitia possimus veniam sapiente laudantium excepturi quas eos cum. Deleniti, unde.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
