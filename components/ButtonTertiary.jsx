
const ButtonTertiary = ({btnText}) => {
  return (
    <button className='relative cursor-pointer min-w-[184px] inline-flex text-sm items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group bg-[#0e1135] hover:bg-[#151a41] text-white uppercase tracking-[1px]'>
      {btnText}
    </button>
  )
}

export default ButtonTertiary