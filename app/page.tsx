import Link from "next/link";
import Logo from "@/assets/Lifelong Learners.png";
import Image from "next/image";
import Tab from "@/assets/tab.png";
export default function HomePage() {
  return (
    <main className="flex h-screen container mx-auto flex-col justify-center text-center items-center">
      <Image
        className="rounded-full"
        src={Logo}
        width={180}
        height={180}
        alt="Solidity logo"
      />
      <div className="flex flex-row items-start justify-center">
        <h1 className=" text-[52px] py-5 font-bold  text-[#1f55cd]">
          🚀 Curso intensivo: React Native com Expo 🚀
        </h1>
      </div>

      <p className="text-fd-muted-foreground text-[18px] text-center">
        Quer criar aplicativos móveis nativos de forma rápida e eficiente?
        Participe do nosso Crash Course exclusivo e aprenda a desenvolver
        aplicativos com React Native e Expo em apenas duas sessões práticas! Não
        importa se você é um iniciante ou já tem alguma experiência em
        desenvolvimento, este curso foi projetado para ser acessível e prático,
        ajudando você a criar seu primeiro app em tempo recorde.
      </p>
      <div className="flex items-center justify-center mt-4">
        <Link href="/docs" className="text-fd-foreground font-semibold ">
          <div className="px-6 py-4 rounded-full bg-[#1f55cd]  text-white">
            Começar Agora
          </div>
        </Link>
      </div>
      <div className="flex flex-col text-left justify-center items-start mt-4 p-4 ">
        <p>
          Vantagens de Participar: <br />
           ✅ Aprendizado Rápido e Eficiente: Em duas
          sessões, você vai aprender o essencial para começar a desenvolver
          aplicativos móveis que funcionam tanto em iOS quanto em Android,
          usando uma única base de código.
          <br />
          <br />
          <p>
            ✅ Plataforma Simples e Acessível: 
            <br />Com o Expo, a instalação e o
            processo de desenvolvimento são muito mais rápidos, permitindo que
            você teste seus apps diretamente no seu smartphone, sem
            complicações.
          </p>
          <p>
            <br />
            ✅ Aplicação Prática: 
            <br />Além da teoria, cada sessão inclui exercícios
            práticos para que você possa aplicar imediatamente o que aprendeu,
            criando seu próprio aplicativo.
          </p>
          <br />
          <br />
          <p>
            ✅ Ferramentas Gratuitas e de Fácil Uso: Utilize ferramentas
            gratuitas como VS Code e o app Expo Go para visualizar e testar seu
            aplicativo em tempo real, sem precisar pagar por licenças de
            software.
          </p>
          <p>
          <br />
          <br />
            ✅ Conteúdo Estruturado e Direto ao Ponto: O curso está dividido em
            duas partes bem organizadas. Na primeira, você aprenderá os
            conceitos básicos e componentes fundamentais. Na segunda, você
            construirá seu próprio app funcional.
          </p>
        </p>
        <p>
        <br /><br />
          Sessões: Sessão 1: Introdução ao React Native e componentes básicos
          Sessão 2: Construção de um aplicativo simples (lista de tarefas)
          <br /><br />
          Requisitos:<br /> 🖥️ Laptop com internet 📱<br /> Smartphone para testar seu app
          <br />🎯 Vontade de aprender
        </p>
        
      </div>
      <div className="flex items-center justify-center mt-4">
          <Link href="/docs" className="text-fd-foreground font-semibold ">
            <div className="px-6 py-4 rounded-full bg-[#1f55cd]  text-white">
              Começar Agora
            </div>
          </Link>
        </div>
    </main>
  );
}
