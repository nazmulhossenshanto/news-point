 import { format } from 'date-fns';
import headerImg from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='my-10 flex flex-col justify-center items-center space-y-4'>
        <img src={headerImg} alt="" />
        <p className='text-gray-500'>Journalism Without Fear or Favour</p>
        <p className='text-gray-500'> <span className='text-black font-semibold'>{ format(new Date( ), "EEEE, ") }</span>{ format(new Date( ), "MMMM dd, yyyy") }</p>
    </div>
  )
}

export default Header;