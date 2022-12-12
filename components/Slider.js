import Image from 'next/image'
import { useEffect, useState } from 'react'


const Slider = () => {
    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState(1)
    const [transL, setTransL] = useState(false)
    const [transR, setTransR] = useState(false)

    // ************************Más ordenado*****
    // const images = [
    //     { id: 1, pos: 1, link: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', active: true },
    //     { id: 2, pos: 2, link: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp', active: false },
    //     { id: 3, pos: 3, link: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', active: false },
    // ]

    const images2 = [
        'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
        'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
    ]
    useEffect(() => {
        if (transR) {
            setTimeout(() => {
                setTransR(false);

            }, 800)
        }
        if (transL) {
            setTimeout(() => {
                setTransL(false);
                setIndex((index + 1) % images2.length)
                setIndex1((index1 + 1) % images2.length)
            }, 800)
        }
    }, [transR, transL])
    const handlePrev = () => {
        setTransR(true)
        setTransL(false)

        const nextIndex = index - 1;
        const nextIndex1 = index1 - 1;

        if (nextIndex < 0) {
            setIndex(images2.length - 1)

        } else {
            setIndex(nextIndex)

        }
        if (nextIndex1 < 0) {
            setIndex1(images2.length - 1)
        } else {
            setIndex1(nextIndex1)
        }

    }
    const handleNext = () => {
        setTransR(false)
        setTransL(true)

    }
    return (
        <div id="carouselExampleIndicators" className=" carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                >Este es un boton </button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className=" w-full overflow-hidden">
                <div className=" h-50 carousel-item active float-left flex w-full">



                    <img
                        src={images2[index]}
                        className={` absolute w-full object-contain 
                            ${transL ? 'transition duration-500 ease-linear transform -translate-x-full' : transR ? 'animate-slideL' : ''}`}
                        alt="Wild Landscape"
                    />
                    <img
                        src={images2[index1]}
                        className={`absolute object-contain  w-full  
                            ${transL ? 'animate-slideR' : transR ? 'transition duration-500 ease-linear transform -translate-x-full' : ''} `}
                        alt="Wild Landscape"
                    />

                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                onClick={handlePrev}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden text-white">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                onClick={handleNext}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden text-white">Next</span>
            </button>
        </div>
    )
}
export default Slider
