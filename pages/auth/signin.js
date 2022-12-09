import { getProviders, SignIn as SingIntoProvider } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'
import LoginBtn from '../../components/LoginBtn';
// import Header from '../../components/Header'
import { useRouter } from 'next/router'

function Signin({ providers }) {
    const router = useRouter()
    const logos = [
        '/facebook.png',
        '/google.png'
    ]
    return (
        <>
            {/* <Header /> */}
            <div className="overflow-hidden flex relative bg-amber-800  flex-col min-h-screen w-full py-10 text-center" >


                <Image
                    src="/registerbg.png"
                    alt=""
                    className=''
                    fill
                    priority
                // absolute={true}
                />



                <div className='bg-black/[.54] max-w-full mx-5 -mb-10 min-h-[520px] '>

                    {/* <div className='p-5 '> */}
                    <h1 className='relative text-white text-2xl p-5 text-bold'>Login</h1>
                    {/* </div> */}


                    <div className='mt-0 relative w-full'>


                        {/* <p className="absolute font-xs z-50 italic">{`This is not a REAL app. I'm just playin'`}</p> */}
                        <form className=" absolute flex flex-col w-full max-w-lg ">
                            <div className="flex flex-wrap my-auto w-full -mx-3 mb-0">
                                <div className="mx-auto md:w-1/2 px-3 mb-6 md:mb-0">
                                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Usuario
                                </label> */}
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Usuario" />
                                    {/* <p className="text-red-500 my-auto text-xs italic">Please fill out this field.</p> */}
                                </div>

                            </div>
                            <div className="w-full flex flex-wrap -mx-3 mb-6">
                                <div className=" mx-auto px-3">
                                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Contraseña
                                </label> */}
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                                </div>
                            </div>

                            {/* <div className=' w-full mx-auto'> */}
                            <div className='flex ml-15 mb-5 relative w-full items-center justify-center  text-white'>
                                <h1 className=' text-center w-full absolute'>INICAR SESSION </h1>
                                <p className='btn text-center mt-10 w-full absolute underline cursor-pointer'>Recordar contraseña</p>
                            </div>
                            {/* 
                            <div className="flex w-full items-center justify-center ">

                                {Object.values(providers).map((provider) => (
                                    <div className='items-center justify-center  bg-blue-500' key={provider.name}>
                                        <LoginBtn provider={provider} logo={'/facebook.png'} />
                                    </div>
                                ))}
                            </div> */}
                            {/* </div> */}
                        </form>

                        <div className="absolute flex flex-row w-full mx-auto h-3 max-w-[50] space-x-2 -bottom-40 justify-center items-center">

                            {Object.values(providers).map((provider) => (
                                <div className='p-4  h-10 flex flex-row items-center mx-auto justify-center' key={provider.name}>
                                    <div className='btn mb-2 mr-2  bg-blue-500' key={provider.name}>
                                        <LoginBtn provider={provider} logos={logos} />
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className='flex px-2 relative pb-4 -bottom-80 text-justify'>

                            <p className=' text-gray-300 h-20 w-80 mx-auto leading-3 py-4 my-auto mb-10 text-xs font-semibold '>Al hacer clic en cualquiera de los botones de inicio de sesión social,
                                acepta los términos de la política de privacidad descritos <span className='btn cursor-pointer underline'>aqui</span></p>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col mt-20 bg-black/[.54] relative mx-5  min-h-[200px] mb-30  px-4'>
                    <p className='mt-10 text-gray-300 w-full text-justify  text-xs mx-auto leading-3 '> Ser el nuevo nunca había sido tan divertido. Enterate
                        de las ultimas promociones, recibe descuentos por
                        tu nueva membresia y accede a nuestra comunidad
                        para compartir y aprovechar todos nuestros beneficios</p>

                    <button
                        className='btn hover:bg-white hover:text-black cursor-pointer text-center w-20 mt-5 py-2  text-xs justify-center bg-black -left-2 '
                        onClick={() => router.push('/auth/register')}
                    >
                        Registrar
                    </button>
                </div>
            </div >


        </>
    )
}
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default Signin