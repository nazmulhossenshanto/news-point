import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

 
const FindUs = () => {
  return (
    <div>
        <h1 className="text-xl font-bold mb-5">FindUs On</h1>
        <div>
            <div className="join join-vertical w-full">
                <a href="https://www.facebook.com/zayan.shanto" target="_blank" rel="noopener noreferrer" className="btn bg-base-100 join-item justify-start text-gray-600"><FaFacebook size={20 }  ></FaFacebook> Facebook</a>
                <a className="btn bg-base-100 join-item justify-start text-gray-600"><FaTwitter size={20}></FaTwitter> Twitter</a>
                <a className="btn bg-base-100 join-item  justify-start text-gray-600"><FaInstagram size={20}></FaInstagram> Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default FindUs