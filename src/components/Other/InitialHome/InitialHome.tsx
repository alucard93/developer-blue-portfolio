import { useState } from 'react'
import Link from 'next/link'
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiDownloadFill,
  RiMailSendFill,
} from 'react-icons/ri'

import { Button } from '@/components/Other/UI/button'
import DevImg from '@/components/Other/DevImg/DevImg'
import Badge from '@/components/Other/Bagde/Badge'
import Socials from '@/components/Other/Socials/Socials'
import Image from 'next/image'

const InitialHome = () => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <Image
        alt="initial image"
        priority
        width={1280}
        src="/perfurado-Juninho-1,35-x-0,50-(arquivo-aberto).png"
        height={380}
        className="w-full h-auto object-contain"
      />

      <section
        id="juninho"
        className="md:pt-24 xl:py-12 xl:pt-0 relative mt-16"
      >
        <div className="container mx-auto">
          <div className="flex justify-between gap-x-8">
            <div
              className="flex max-w-[600px] flex-col justify-center
           mx-auto xl:mx-0 text-center xl:text-left"
            >
              <div
                className="text-xs uppercase font-semibold max-w-[90vw]
            mb-8 text-white tracking-[4px] rounded-full bg-[#00AFEF] h-12 flex items-center justify-center xl:text-base"
              >
                Candidato a Vereador de Niterói
              </div>
              <h1 className="h1 max-w-[90vw] mb-8 text-[#000] font-bold xl:whitespace-nowrap">
                Eu sou{' '}
                <strong className="text-[#00AFEF] font-black">Juninho</strong>
              </h1>
              <div
                className={`${
                  showMore
                    ? 'max-h-full opacity-100'
                    : 'max-h-[240px] opacity-100'
                } transition-all duration-500 ease-in-out overflow-hidden`}
              >
                <p className="text-sm subtitle max-w-[490px] mx-auto xl:mx-0 xl:text-base">
                  Sou Juninho, candidato a vereador com uma trajetória marcada
                  pela dedicação e pelo compromisso com a transformação. Filho
                  de um soldador que participou da construção da icônica Ponte
                  Rio-Niterói, segui os passos do meu pai na metalurgia e, ao
                  longo de 10 anos como soldador,{' '}
                  <u>defendi as lutas trabalhistas</u> e construí amizades que
                  levo comigo até hoje. Minha jornada começou em Tanguá, onde
                  tive o privilégio de ser vereador e{' '}
                  <u>realizar muitas conquistas ouvindo a comunidade</u>. Em
                  2008, encontrei em Niterói o lugar perfeito para viver com
                  minha família e desde então, tenho me empenhado em contribuir
                  para o crescimento e desenvolvimento desta cidade que tanto
                  amo. Estou pronto para transformar Niterói para o melhor e
                  trazer minha experiência e paixão para fazer a diferença!
                </p>
              </div>
              <button
                onClick={handleShowMore}
                className="block md:hidden mt-4 text-primary"
              >
                {showMore ? 'Ver Menos' : 'Continuar Lendo'}
              </button>
              <div
                className="flex flex-col gap-y-3 md:flex-row gap-x-3
             mx-auto xl:mx-0 mb-12 w-full"
              >
                <Socials
                  containerStyles="flex flex-col mt-4 items-center md:flex-row w-full gap-y-3 md:gap-y-0 gap-x-6 mx-auto xl:mx-0"
                  iconsStyles="w-full text-foreground text-[22px] 
            hover:text-primary transition-all"
                />
              </div>
            </div>
            <div className="hidden xl:flex relative min-w-[680px]">
              <Badge
                containerStyles="absolute top-[0] -left-[4rem]  animate-up-down-3"
                icon={<RiBriefcase4Fill />}
                endCountNum={0}
                badgeText="Ex metalúrgico"
              />

              <Badge
                containerStyles="absolute top-[67%] -left-[5rem]  animate-up-down-2"
                icon={<RiTodoFill />}
                endCountNum={24}
                badgeText="Papai da sofia e marido da Yanan"
              />

              <Badge
                containerStyles="absolute top-[200px] -right-8 animate-up-down-1"
                icon={<RiTeamFill />}
                endCountNum={6}
                badgeText="Defensor dos trabalhadores"
              />
              <DevImg
                alt="initial image"
                priority
                containerStyles=" w-[510px] animate-up-down 
            h-[580px] relative aspect-[4/3] flex items-center "
                imgSrc="/developer.webp"
              />
            </div>
          </div>
          <div
            className="hidden xl:flex absolute left-2/4 bottom-44
        xl:bottom-12 animate-bounce"
          >
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </section>
    </>
  )
}

export default InitialHome
