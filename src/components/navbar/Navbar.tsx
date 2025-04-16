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
                        <Link to='/temas' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar Categorias</Link>
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