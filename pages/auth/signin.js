import { getProviders, SignIn as SingIntoProvider } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'
import LoginBtn from '../../components/LoginBtn';
// import Header from '../../components/Header'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

function Signin({ providers }) {
    const router = useRouter()
    const logos = [
        '/facebook.png',
        '/google.png'
    ]
    return (
        <div className="overflow-hidden max-h-full">
            <Header />
            {/* <Header /> */}
            <div className="overflow-hidden flex relative bg-amber-800  flex-col  w-full py-10 text-center" >

                <Image
                    src="/registerbg.png"
                    alt=""
                    className=''
                    fill
                    priority
                // absolute={true}
                />



                <div className='relative bg-black/[.54] max-w-full mx-5  -mb-10  min-h-[460px] '>

                    {/* <div className='p-5 '> */}
                    <h1 className='relative text-white text-2xl p-5 text-bold'>Login</h1>
                    {/* </div> */}


                    <div className='mt-0 relative w-full'>


                        {/* <p className="absolute font-xs z-50 italic">{`This is not a REAL app. I'm just playin'`}</p> */}
                        <form className="  flex flex-col w-full max-w-lg items-center justify-center mx-auto">
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
                            <div className='flex ml-15  relative w-full items-center justify-center  text-white'>
                                <h1 className=' text-center w-full top-5 absolute'>INICAR SESSION </h1>
                                {/* <p className='btn text-center mt-10 w-full absolute underline cursor-pointer'>Recordar contraseña</p> */}
                            </div>
                            <div class=" pt-2 w-full flex mx-auto -mt-10 justify-between ">
                                <div class=" flex w-full mx-[140px] items-center sm:mx-[100]  justify-evenly ">
                                    <div class="flex w-full">
                                        <div class="flex items-center btn  h-5">
                                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <label for="remember" class=" text-sm pl-2 font-medium text-white dark:text-gray-300">Remember me</label>
                                    </div>

                                    <a href="#" class="btn text-sm text-blue-700 hover:underline dark:text-blue-500"> Lost Password?</a>
                                </div>
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

                        <div className=" flex flex-row w-full mx-auto mt-8">

                            {Object.values(providers).map((provider) => (
                                <div className='p-4  flex flex-row items-center mx-auto justify-center' key={provider.name}>
                                    <div className='btn mb-2 mr-2 text-l bg-blue-500' key={provider.name}>
                                        <LoginBtn provider={provider} logos={logos} />
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className='flex    text-justify'>

                            <p className=' absolute text-gray-200 h-20 w-full px-12 mx-auto leading-4  text-sm font-semibold '>Al hacer clic en cualquiera de los botones de inicio de sesión social,
                                acepta los términos de la política de privacidad descritos <span className='btn cursor-pointer underline'>aqui</span></p>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col mt-12 bg-black/[.54] relative mx-5 px-2 min-h-[200px] mb-30  '>
                    <p className='mt-10 text-gray-200 w-full text-justify px-10 text-sm mx-auto leading-4 '> Ser el nuevo nunca había sido tan divertido. Enterate
                        de las ultimas promociones, recibe descuentos por
                        tu nueva membresia y accede a nuestra comunidad
                        para compartir y aprovechar todos nuestros beneficios</p>

                    <button
                        className='btn hover:bg-white hover:text-black cursor-pointer text-center w-20 mt-5 py-2 ml-10  text-xs justify-center bg-black -left-2 '
                        onClick={() => router.push('/auth/register')}
                    >
                        Registrar
                    </button>
                </div>
            </div >


        </div>
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