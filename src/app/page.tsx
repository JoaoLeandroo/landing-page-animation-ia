import ContainerBar from "@/components/ContainerBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ContainerBar>
        <section className="w-full relative h-[600px]">
          <div className="w-full text-center p-3 mt-10 flex items-center justify-center flex-col">
            <h1 className="text-3xl font-extrabold drop-shadow">
              Experience the Future of Image
            </h1>
            <span className="text-2xl drop-shadow text-zinc-300 font-bold animate-bounce w-[290px] rounded bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 mt-2">
              Processing with AI
            </span>
            <p className="text-sm font-extrabold drop-shadow-xl mt-1">
              Transform Your images with AI <br /> Try our revolutionary tool
              today!
            </p>

            <div className="mt-4 relative border border-white rounded-3xl p-1 bg-zinc-300/60">
              <input 
                type="text" 
                className="w-[400px] h-11 pr-28 pl-4 placeholder:text-zinc-600 placeholder:font-medium text-zinc-700 rounded-3xl shadow bg-zinc-300/60 outline-none"
                placeholder="Create Your Idea"/>
              <button className="bg-pink-400 h-11 px-3 hover:opacity-75 transition duration-200 shadow rounded-3xl absolute top-1 right-1">Generate</button>
            </div>
    </div>

          {/* images examples... */}
          <div className="border-4 opacity-75 md:opacity-100 border-red-800 w-[225px] md:w-[320px] md:h-[320px] rotate-[15deg] rounded-lg overflow-hidden select-none shadow-xl absolute -z-10 top-1">
            <Image
              src={"/assets/poo.jpeg"}
              width={320}
              height={320}
              alt="Poo Kong Fuu Panda"
              className="w-full"
            />
          </div>
          <div className="border-4 opacity-75 md:opacity-100 border-yellow-500 w-[140px] h-[140px] rotate-[45deg] rounded-lg overflow-hidden select-none shadow-xl absolute -z-10 bottom-8 left-0 md:left-20">
            <Image
              src={"/assets/homer.jpeg"}
              width={140}
              height={140}
              alt="Homer Simpson"
              className="w-full"
            />
          </div>
          <div className="border-4 opacity-75 md:opacity-100 border-red-950 w-[170px] h-[170px] -rotate-[25deg] rounded-lg overflow-hidden select-none shadow-xl absolute -z-10 top-52 md:top-20 right-3">
            <Image
              src={"/assets/simba.jpeg"}
              width={170}
              height={170}
              alt="Simba - Rei Leão"
            />
          </div>
          <div className="border-4 opacity-75 md:opacity-100 border-zinc-300 w-[140px] h-[140px] md:w-[210px] md:h-[210px] rotate-[15deg] rounded-lg overflow-hidden select-none shadow-xl absolute -z-10 right-20 bottom-20">
            <Image
              src={"/assets/tom.jpeg"}
              width={210}
              height={210}
              alt="Tom"
              className="w-full"
            />
          </div>
        </section>
      </ContainerBar>

      <section className="w-full select-none px-2 py-5 mt-11 bg-gradient-to-r from-yellow-500/85 to-pink-500/85 shadow mb-11">
        <div className="mx-auto flex items-center md:flex-row flex-wrap justify-center gap-10">
          <Image
            src={"/assets/homer-bender.jpeg"}
            width={300}
            height={0}
            alt="Homer e bender"
            className="h-auto hover:animate-bounce w-[150px] md:w-[300px] bg-cover rounded-xl shadow relative md:-bottom-8"
          />

          <Image
            src={"/assets/goku-vegeta.jpeg"}
            width={300}
            height={0}
            alt="Goku e vegeta"
            className="h-auto hover:animate-bounce w-[150px] md:w-[300px] bg-cover rounded-xl shadow relative md:bottom-14"
          />

          <Image
            src={"/assets/poo2.jpeg"}
            width={300}
            height={0}
            alt="Poo Kong fu Panda"
            className="h-auto hover:animate-bounce w-[150px] md:w-[300px] bg-cover rounded-xl shadow relative md:-bottom-8"
          />

          <Image
            src={"/assets/tom-jerry-samurai.jpeg"}
            width={300}
            height={0}
            alt="Tom e Jerry"
            className="h-auto hover:animate-bounce w-[150px] md:w-[300px] bg-cover rounded-xl shadow relative md:bottom-14"
          />

        </div>
      </section>

      <ContainerBar>
        <section className="w-full flex items-center justify-center">
          <Image
            src={"/assets/astronauta.jpg"}
            width={1000}
            height={0}
            alt="Astronauta"
            className="h-auto bg-cover rounded"
          />
        </section>
      </ContainerBar>
    </div>
  );
}
