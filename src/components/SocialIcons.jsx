import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className='py-10 bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center'>
   <div className='flex justify-center items-center mt-5 space-x-40 text-blue-600 dark:text-white'>
  <FaFacebook size={35} />
  <FaInstagram size={35} />
  <FaTwitter size={35} />
</div>
</div>
  )
}

export default SocialIcons