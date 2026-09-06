import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

 
const FindUs = () => {
  return (
    <div>
        <h1 className="text-xl font-bold mb-5">FindUs On</h1>
        <div>
            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 join-item justify-start text-gray-600"><FaFacebook size={20 }  ></FaFacebook> Facebook</button>
                <button className="btn bg-base-100 join-item justify-start text-gray-600"><FaTwitter size={20}></FaTwitter> Twitter</button>
                <button className="btn bg-base-100 join-item  justify-start text-gray-600"><FaInstagram size={20}></FaInstagram> Instagram</button>
            </div>
        </div>
    </div>
  )
}

export default FindUs