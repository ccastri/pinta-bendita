import React from 'react'

const CenterBanner = ({
    headline,
    text,
    buttonText,
    buttonLink,
    width,
    maxWidth,
    height,
    maxHeight,
    backgroundColor,
    buttonBackgroundColor,
    closeButtonClicked, }
) => {

    return (





        <div
            className="banner_centered flex justify-center content-center flex-col items-center fixed z-50 inset-1/2 transform -translate-x-2/4 -translate-y-2/4 shadow-lg max-h-full overflow-auto max-w-full"
            style={{
                backgroundColor: backgroundColor || "#fecaca",
                height: height || "70%",
                maxHeight: maxHeight || "550px",
                width: width || "80%",
                maxWidth: maxWidth || "1000px",
            }}
        >
            <div
                className="cursor-pointer m-3 text-center absolute top-0 right-0 px-2 py-1"
                onClick={() => closeButtonClicked()}
            >
                X
            </div>
            <h1 className="my-0 uppercase">{headline}</h1>
            <div
                className="my-0 text-center uppercase prose"
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <a
                className="shadow-md py-3 px-5 mt-8 mb-4 rounded-lg"
                style={{ backgroundColor: buttonBackgroundColor || "#ffffff" }}
                href={buttonLink}
            >
                {buttonText}
            </a>
        </div>
    )

}

export default CenterBanner