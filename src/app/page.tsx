import { EB_Garamond } from 'next/font/google';
import Seperation from './components/Seperation';


const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center 50 font-sans pt-16">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs text-6xl font-normal leading-15 tracking-tight text-white">
            <span className={ebGaramond.className}>
              SIMRS Simpel yang mudah digunakan
            </span>
          </h1>
          <Seperation />
          <p className="max-w-md text-lg leading-8 text-white">
            Electronic Medical Record yang cepat, ringan, dan mudah terintegrasi satu sama lain.
          </p>

        </div>
      </main>
    </div>
  );
}
