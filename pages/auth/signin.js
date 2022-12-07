import { getProviders, signIn as SingIntoProvider } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'
// import Header from '../../components/Header'

function signin({ providers }) {
    return (
        <>
            {/* <Header /> */}
            <div className="flex fixed bg-amber-800  flex-col min-h-screen w-full py-2 text-center max-h-screen" >


                <Image
                    src="/registerbg.png"
                    alt=""

                    fill
                    priority
                // absolute={true}
                />
                <div className='relative top-0 bg-white h-20 mb-0'>

                </div>
                <div className='bg-black/[.54] max-w-full mx-5 mt-10 min-h-[455px] '>

                    <div className='p-5 absolute mb-10'>
                        <h1 className='text-white text-xl bold'>Login</h1>
                    </div>


                    <div className='mt-20 relative w-full'>


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
                            <div className='flex ml-15 mb-10 relative w-full items-center  text-white'>
                                <h1 className=' text-center w-full absolute'>INICAR SESSION </h1>
                                <p className='text-center mt-10 w-full absolute'>Recordar contraseña</p>
                            </div>

                            <div className=" relative ml-8  -mr-20">

                                {Object.values(providers).map((provider) => (
                                    <div className='flex absolute flex-grow ml-20 -mr-40 bg-blue-500  items-center' key={provider.name}>
                                        <img
                                            className='pl-2'
                                            src='/facebook.png'
                                            alt=""
                                        />
                                        <button className="p-3 text-white" onClick={() => SingIntoProvider(provider.id, { callbackUrl: '/' })}>
                                            Iniciar sesion
                                        </button>
                                    </div>
                                ))}
                            </div>
                            {/* </div> */}
                        </form>

                        <div className="absolute mt-20 -bottom-80 justify-center items-center">

                            {Object.values(providers).map((provider) => (
                                <div className='flex flex-grow ml-20 bg-blue-500  items-center' key={provider.name}>

                                    <Image
                                        className="m-0 p-0 bg-white"
                                        height={50}
                                        width={50}
                                        src="/google.png" alt="" />
                                    <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SingIntoProvider(provider.id, { callbackUrl: '/' })}>
                                        Inicar sesion {provider.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

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

export default signin