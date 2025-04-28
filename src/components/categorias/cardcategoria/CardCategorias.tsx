import { Link } from 'react-router-dom'
import Categorias from '../../../models/Categorias'

interface CardCategoriasProps{
    categoria: Categorias
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#D8BFD8] text-[#5E5C70]  text-2xl'>
                Categorias
            </header>
            <p className='p-8 text-3xl bg-[#F7F5F1] h-full text-[#995C98]'>{categoria.descricao}</p>
            
            <div className="flex">
            <Link to={`/editarcategoria/${categoria.id}`}
                className='w-full bg-[#A7A5B6] text-slate-100 bg-	indigo-400 hover:bg-[#DCDCF9]
                flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='text-slate-100 bg-[#995C98] hover:bg-[#D7B7F6] w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias