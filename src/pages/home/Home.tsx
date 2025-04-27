import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="bg-[#F7F5F1]  h-screen">
                <div className='container grid grid-cols-2 text-[#985D98]'>
                    <div className="flex flex-col gap-4 items-center-safe justify-center py-4">
                        <h2 className='text-5xl'>
                            Farma bem
                        </h2>
                        <p className='text-xl'>
                        Simplificando o processo, otimizando seu dia.
                        </p>

    <div className="flex justify-around gap-4">
                                <button
    className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-[#B181B1] rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-[#985D98] focus:outline-offset-4 overflow-hidden"
    >
                        <Link to='/categorias'>Categorias</Link>
    <span
        className="absolute left-[-75p%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
    ></span>

<span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#B181B1] not-only:absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
    ></span>
    <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#B181B1] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
    ></span>
    <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#B181B1] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
    ></span>
    <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#B181B1] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
    ></span>
</button>



<button
    className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-[#B181B1] rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-[#985D98] focus:outline-offset-4 overflow-hidden"
    >
    <span className="relative z-20">Produtos</span>

    <span
        className="absolute left-[-75p%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
    ></span>

    <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#B181B1] not-only:absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
    ></span>
    <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#B181B1] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
    ></span>
    <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#B181B1] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
    ></span>
    <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#B181B1] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
    ></span>
</button>

                        </div>
                    </div>



                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/Pcg9tBi.jpeg"
                            alt="Imagem Página Home"
                            className='w-3/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home