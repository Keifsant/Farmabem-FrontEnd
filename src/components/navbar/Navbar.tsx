import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
        bg-[#D8BFD8] text-[#5E5C70]'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-xl ">Início</Link>

                    <div className='flex gap-4 '>
                        <Link to = '/cadastrarprodutos' className='hover:underline'>Cadastrar Produtos</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>
                        <Link to='/home' className='hover:underline'>Voltar</Link>                   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar