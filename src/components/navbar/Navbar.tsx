import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
        bg-white text-black'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Farma Bem</Link>

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Carrinho
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar