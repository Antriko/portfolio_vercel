import Image from 'next/image'
import Link from 'next/link'
import { DiTerminal } from 'react-icons/di'

const Header = () => {
    return(
        <div className="w-full bg-dark flex flex-col-reverse sm:flex-row justify-center py-24 min-h-screen" id="header">
            <div className="flex flex-col justify-center px-6 w-full sm:w-1/2 pt-10 sm:pt-0 sm:pb-0">
                <div className="grid justify-center sm:justify-end">
                    <Image 
                        src="/profile.jpg"
                        width={200}
                        height={200}
                        alt="Me"
                        className="rounded-md"
                    />
                </div>
            </div>
            <div className="mh-4 flex flex-col px-6 text-center sm:text-start justify-center w-full sm:w-1/2">
                <div className="pb-6 text-5xl font-bold">
                    Antriko<br/>
                    <span className="typing">Hajdari</span>
                </div>
                <div className="pt-1 pb-2 text-lg font-semibold flex justify-center sm:justify-normal">
                    <div className="pr-2">
                        <DiTerminal className="w-full h-full" />
                    </div>
                    Software Developer
                </div>
                <div className="pt-1 text-lg">AntrikoH@gmail.com</div>
                <div className="pt-1 text-lg">07597117427</div>
                <div className="pt-4 text-lg w-50">
                    <Link href="https://github.com/Antriko" target="_blank" className="bg-light font-medium rounded-md text-black px-5 py-2.5 text-center">GitHub</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;