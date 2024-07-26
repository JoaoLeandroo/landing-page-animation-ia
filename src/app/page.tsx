import ContainerBar from "@/components/ContainerBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ContainerBar>
        <section className="w-full relative h-[600px]">
          <div className="w-full text-center p-3 mt-10">
            <h1 className="text-3xl font-bold drop-shadow">
              Experience the Future of Image
            </h1>
            <p className="text-xl font-light">
              Transform Your images with AI <br /> Try our revolutionary tool
              today!
            </p>
          </div>

          {/* images examples... */}
          <div className="border-4 border-red-800 w-[320px] h-[320px] rotate-[15deg] rounded-lg overflow-hidden select-none shadow-xl absolute -z-10 top-1">
            <Image
              src={"/assets/poo.jpeg"}
              width={320}
              height={320}
              alt="Poo Kong Fuu Panda"
            />
          </div>
          <div className="border-4 border-yellow-500 w-[140px] h-[140px] rotate-[45deg] rounded-lg overflow-hidden select-none shadow-xl absolute -z-10 bottom-8 left-20">
            <Image
              src={"/assets/homer.jpeg"}
              width={140}
              height={140}
              alt="Homer Simpson"
            />
          </div>
          <div className="border-4 border-red-950 w-[170px] h-[170px] rotate-[6deg] rounded-lg overflow-hidden select-none shadow-xl absolute -z-10 right-3">
            <Image
              src={"/assets/simba.jpeg"}
              width={170}
              height={170}
              alt="Simba - Rei Leão"
            />
          </div>
          <div className="border-4 border-zinc-300 w-[210px] h-[210px] rotate-[15deg] rounded-lg overflow-hidden select-none shadow-xl absolute -z-10 right-20 bottom-20">
            <Image
              src={"/assets/tom.jpeg"}
              width={210}
              height={210}
              alt="tom"
            />
          </div>
        </section>
      </ContainerBar>

      <section className="w-full p-2 h-[300px] mt-11 bg-gradient-to-r from-yellow-500/85 to-pink-500/85 shadow mb-11">
        <div className="mx-auto flex items-center justify-center gap-10">
          <Image
            src={"/assets/homer-bender.jpeg"}
            width={300}
            height={0}
            alt="Homer e bender"
            className="h-auto bg-cover rounded-xl shadow relative -bottom-8"
          />

          <Image
            src={"/assets/goku-vegeta.jpeg"}
            width={300}
            height={0}
            alt="Goku e vegeta"
            className="h-auto bg-cover rounded-xl shadow relative bottom-14"
          />

          <Image
            src={"/assets/poo2.jpeg"}
            width={300}
            height={0}
            alt="Poo Kong fu Panda"
            className="h-auto bg-cover rounded-xl shadow relative -bottom-8"
          />

          <Image
            src={"/assets/tom-jerry-samurai.jpeg"}
            width={300}
            height={0}
            alt="Tom e Jerry"
            className="h-auto bg-cover rounded-xl shadow relative bottom-14"
          />

        </div>
      </section>

      <ContainerBar>
        <section>area final</section>
      </ContainerBar>
    </div>
  );
}
