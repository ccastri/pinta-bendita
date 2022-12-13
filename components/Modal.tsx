import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../slices/modal/modalSlice"



const Modal = () => {
    const router = useRouter()
 const dispatch = useDispatch();
    return (
        <div className=' relative flex z-10000 right-0 top-0 border-black-100 justify-end'>

            <div className='bg-black mt-0 flex flex-col justify-end w-50  w-full ml-[650px]'>

                <p>
                    Inicia sesion y aprovecha las promociones para los benditos
                </p>
                <button 
                    className='bg-amber-600'
                    onClick={()=> router.push('/auth/signin')}>
                    Iniciar Sesion
                </button>
                <button className='bg-amber-600'
                    onClick={() => dispatch(closeModal())}
                >
                    Iniciar Sesion
                </button>
            </div>
        </div>
    )
}

export default Modal