import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categorias from "../../../models/Categorias"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('403')) {

            }
        }
    }


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function DeletarCategorias() {
        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`);
            alert('Categoria deletada com sucesso!');
            retornar();
        } catch (error: any) {
            alert('Erro ao deletar a categoria.');
        } finally {
            setIsLoading(false);
        }
    }

    function retornar() {
        navigate("/categorias")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-[#5E5C70] text-center my-4'>Deletar Categoria</h1>
            <p className='text-center text-[#5E5C70] font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-[#D8BFD8] text-[#5E5C70] text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-[#F7F5F1] text-[#995C98] h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-[#A7A5B6] hover:bg-[#DCDCF9] w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-[#995C98] 
                                hover:bg-[#D7B7F6] flex items-center justify-center'
                                onClick={DeletarCategorias}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria