import Categorias from "./Categorias";

export default interface Produtos {
    id: number;
    nome: string;
    preco: number;
    descricao: string
    foto: string;
    fabricante: string;
    categorias?: Categorias[] | null;
}  