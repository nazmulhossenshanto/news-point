 
const NewsDetailsCard = ({news}) => {
    const {image_url, title, details, } = news;
  return (
    <div className="space-y-3">
        <img className="h-80 rounded-2xl w-full object-cover" src={image_url} alt=""  />
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-gray-500">{details}</p>
    </div>
  )
}

export default NewsDetailsCard