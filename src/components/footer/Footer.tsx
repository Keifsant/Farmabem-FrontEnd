import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-white text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                    Cuidando da sua saúde com excelência desde 2010.
                        </p>
                    <p className='text-lg'>© {data} FarmaBem. Todos os direitos reservados.</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='bold' />
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                        <WhatsappLogo size={48} weight='bold'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer 