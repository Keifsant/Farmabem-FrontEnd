import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#D8BFD8] text-[#5E5C70]">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl'>
                    Seu tempo é valioso, nosso sistema também.
                        </p>
                    <p className='text-lg'>© {data} FarmaBem. Todos os direitos reservados.</p>

                    <div>
                    <p className='text-lg flex justify-center'>Nos acompanhe nas redes sociais </p>
                    <div className='social-links-horizontal flex justify-center-safe'>
                        <LinkedinLogo size={48} weight='light' />
                        <InstagramLogo size={48} weight='light' />
                        <FacebookLogo size={48} weight='light' />
                        <WhatsappLogo size={48} weight='light'/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer 