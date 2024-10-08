import Link from "next/link";

const Logo = () => {

  return ( 
    <Link href="/">
      <p className="sm:text-3xl text-2xl font-bold text-primary tracking-[4px] relative whitespace-nowrap">Candidato a Vereador de Niterói</p>
    </Link>
  );
};

export default Logo;
