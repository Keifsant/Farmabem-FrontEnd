
function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Farma bem
                        </h2>
                        <p className='text-xl'>
                            Cuidado da sua saúde com excelência
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Serviços
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/2zvbvzaqt/Acne%20treatment-amico.png?updatedAt=1744812483586.png"
                            alt="Imagem Página Home"
                            className='w-1/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home