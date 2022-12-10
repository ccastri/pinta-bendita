const HeaderItem = ({ Icon, title, onClick }) => {
    return (
        <div className='flex flex-col items-center color-black-300 cursor-pointer group w-12 sm:w-20 hover:text-gray-300'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce' onClick={onClick} />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem