import { useRouter } from 'next/router'
import { getProviders, SignIn as SingIntoProvider } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'
import LoginBtn from '../../components/LoginBtn'

function Template({ providers }) {

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



                <div className='bg-black/[.54] max-w-full mx-5 -mb-10 min-h-[720px] '>

                    {/* <div className='p-5 '> */}
                    <h1 className='relative text-white text-center items-center text-2xl p-5 text-bold'>Crea tu cuenta</h1>
                    {/* </div> */}


                    <div className='mt-0 relative w-full'>


                        {/* <p className="absolute font-xs z-50 italic">{`This is not a REAL app. I'm just playin'`}</p> */}
                        <form className=" flex flex-col w-full max-w-lg ">
                            <div className="flex flex-wrap my-auto w-full -mx-3 mb-0">
                                <div className="mx-auto md:w-1/2 px-3 mb-6 md:mb-0">
                                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Usuario
                                    </label> */}
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nombres" />
                                    {/* <p className="text-red-500 my-auto text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="mx-auto md:w-1/2 px-3 mb-6 md:mb-0">
                                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Usuario
                                    </label> */}
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Apellidos" />
                                    {/* <p className="text-red-500 my-auto text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="mx-auto md:w-1/2 px-3 mb-6 md:mb-0">
                                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Usuario
                                    </label> */}
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email" />
                                    {/* <p className="text-red-500 my-auto text-xs italic">Please fill out this field.</p> */}
                                </div>

                            </div>
                            <div className="w-full flex flex-wrap -mx-3 mb-6">
                                <div className=" mx-auto px-3">
                                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Contraseña
                                    </label> */}
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="contraseña" />
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap -mx-3 mb-6">
                                <div className=" mx-auto px-3">
                                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Contraseña
                                    </label> */}
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="confirmar contraseña" />
                                </div>
                            </div>

                            {/* <div className=' w-full mx-auto'> */}
                            <div className='flex ml-15 mb-5 relative w-full items-center justify-center  text-white'>
                                <h1 className=' text-center w-full absolute'>REGISTRARSE </h1>
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

                        <div className=" flex flex-row w-full mx-auto h-3 max-w-[50] space-x-2 my-10 -bottom-80 justify-center items-center">

                            {Object.values(providers).map((provider) => (
                                <div className='p-4  h-10 flex flex-row items-center mx-auto justify-center' key={provider.name}>
                                    <div className='btn mb-2 mr-2  bg-blue-500' key={provider.name}>
                                        <LoginBtn provider={provider} logos={logos} />
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className='relative flex px-2  pb-4 -bottom-120 text-justify'>

                            <p className='absolute text-gray-300 h-20 w-80 mx-auto leading-3 py-4 my-auto mb-10 text-xs font-semibold '>Al hacer clic en cualquiera de los botones de inicio de sesión social,
                                acepta los términos de la política de privacidad descritos <span className='btn cursor-pointer underline'>aqui</span></p>
                        </div>

                    </div>

                </div>
                {/* <div className='flex flex-col mt-20 bg-black/[.54] relative mx-5  min-h-[200px] mb-30  px-4'>
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
                </div> */}
            </div >



            <form class="w-full max-w-lg">
                <div class=" flex flex-wrap -mx-3 mb-6">
                    <div class=" w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name" >
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p class="text-gray-600 text-xs italic">{`Make it as long and as crazy as you'd like `}</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
            </form >
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
export default Template