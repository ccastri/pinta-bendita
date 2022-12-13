import { signIn as SingIntoProvider } from 'next-auth/react'



const LoginBtn = ({ provider }) => {

    return (
        <div className='flex w-full items-center justify-center  bg-blue-500'>
            {/* {logos.map(logo => <> */}

            <img
                className='h-full pl-2'
                src={`/${provider.name}.png`}
                alt=""
            />

            <button className=" bg-blue-500  text-sm py-2 px-1 text-white " onClick={() => SingIntoProvider(provider.id, { callbackUrl: '/' })}>
                Iniciar sesion {provider.name}
            </button>
        </div >
    )
}

export default LoginBtn