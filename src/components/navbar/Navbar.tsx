    import { Link } from "react-router-dom";

    function Navbar() {
    return (
        <>
        <div
            className="w-full flex justify-center py-4
            bg-[#D8BFD8] text-[#5E5C70]"
        >
            <div className="container flex justify-between text-lg font-bold hover:text-[#DCDCF9]">
            <Link to="/home" className="text-xl ">
                FarmaBem
            </Link>

            <div className="flex gap-4 items-center">
                <Link to="/cadastrarprodutos" className="hover:underline hover:text-[#DCDCF9] font-bold">
                Cadastrar Produtos
                </Link>
                <Link to="/cadastrarcategoria" className="hover:underline hover:text-[#DCDCF9] font-bold">
                Cadastrar Categorias
                </Link>

                <Link to="/home" className="hover:underline">
                <div
                    className="flex bg-[#D8BFD8] w-fit px-1.0 py-1.0 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out"
                >
                    <div
                    className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3"
                    >
                    <button
                        title="Go to the home page"
                        className="text-light-blue-light hover:text-[#DCDCF9] dark:text-[#5E5C70] border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                        ></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </Link>
            </div>
            </div>
        </div>
        </>
    )
    }

    export default Navbar;