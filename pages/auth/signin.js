import { getProviders, signIn as SingIntoProvider } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'
// import Header from '../../components/Header'

function signin({ providers }) {
    return (
        <>
            {/* <Header /> */}
            <div className="flex relative flex-col min-h-screen w-full py-2 text-center max-h-screen" >


                <Image
                    src="/registerbg.png"
                    alt=""
                    fill
                    priority
                // absolute={true}
                />


                <div className='p-5 absolute mb-10'>
                    <h1 className='text-white text-xl bold'>Login</h1>

                </div>

                <div className='mt-20 absolute w-full'>


                    {/* <p className="absolute font-xs z-50 italic">{`This is not a REAL app. I'm just playin'`}</p> */}
                    <form className=" absolute  w-full max-w-lg ">
                        <div className="flex flex-wrap my-auto w-full -mx-3 mb-0">
                            <div className="mx-auto md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Username
                                </label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                {/* <p className="text-red-500 my-auto text-xs italic">Please fill out this field.</p> */}
                            </div>

                        </div>
                        <div className="w-full flex flex-wrap -mx-3 mb-6">
                            <div className=" mx-auto px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Password
                                </label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                            </div>
                        </div>

                        {/* <div className=' w-full mx-auto'> */}

                        <div className=" absolute mx-auto w-full items-center">

                            {Object.values(providers).map((provider) => (
                                <div key={provider.name}>
                                    <button className="  p-3 bg-blue-500 rounded-lg text-white" onClick={() => SingIntoProvider(provider.id, { callbackUrl: '/' })}>
                                        Sign in with username
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* </div> */}
                    </form>


                    <div className="absolute mx-auto -bottom-80 mt-10 w-full items-center">

                        {Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SingIntoProvider(provider.id, { callbackUrl: '/' })}>
                                    Sign in with {provider.name}
                                </button>
                            </div>
                        ))}
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