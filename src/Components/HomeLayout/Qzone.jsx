 import swimmingImg from '../../assets/swimming.png'
 import playImg from '../../assets/playground.png'
 import classImg from '../../assets/class.png'
const Qzone = () => {
  return (
    <div>
        <h1 className="text-xl font-bold mb-5">QZone</h1>
        <div className='space-y-5'>
            <img src={swimmingImg}alt="" />
            <img src={classImg} alt="" />
            <img src={playImg} alt="" />
        </div>
    </div>
  )
}

export default Qzone