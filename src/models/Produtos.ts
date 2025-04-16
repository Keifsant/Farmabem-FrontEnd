import Categorias from "./Categorias";

export default interface Produtos {
    id: number;
    nome: string;
    preco: number;
    descrição: string
    foto: string;
    fabricante: string;
    categorias?: Categorias[] | null;
}