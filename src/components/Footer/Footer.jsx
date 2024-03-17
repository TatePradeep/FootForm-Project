/* eslint-disable no-unused-vars */
import './footer.css'
import logo from "../../assets/logo.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import up from "../../assets/up.png";

function Footer() {

  return (
    <div id='contact' className='bg-white w-[100vw] absolute'>
      <div className=' p-2 absolute bottom-3 left-[50%] translate-x-[-50%] h-12 w-12 bg-hoverBg rounded-lg cursor-pointer '>
        <a href="#">
          <img src={up} alt="up"/>
        </a>
      </div>
      <footer className="p-16 flex flex-col w-full">
        <div className="grid grid-cols-3 justify-items-center w-full">
          <div className=" w-[100%] place-self-start">
            <div className='flex w-full justify-center h-full pr-16'>
              <img src={logo} alt="logo" className='ml-auto h-full'/>
            </div>
          </div>
          <div className="w-full pr-16 place-self-start">
            <div className="flex flex-col gap-6">
              <div className='text-lg'>Quick Links</div>
              <div className='flex justify-between'>
                <a href='#' className='p-2 rounded-lg opacity-50 transition duration-300 ease-in-out hover:text-hoverColor hover:bg-hoverBg hover:opacity-100'>Services</a>
                <a href='#' className='p-2 rounded-lg opacity-50 transition duration-300 ease-in-out hover:text-hoverColor hover:bg-hoverBg hover:opacity-100'>Project</a>
                <a href='#' className='p-2 rounded-lg opacity-50 transition duration-300 ease-in-out hover:text-hoverColor hover:bg-hoverBg hover:opacity-100'>Pricing</a>
                <a href='#' className='p-2 rounded-lg opacity-50 transition duration-300 ease-in-out hover:text-hoverColor hover:bg-hoverBg hover:opacity-100'>Faqs</a>
                <a href='#' className='p-2 rounded-lg opacity-50 transition duration-300 ease-in-out hover:text-hoverColor hover:bg-hoverBg hover:opacity-100'>Contact</a>
              </div>
              <div className='flex'>
                <div className='w-full flex items-center'>
                  <input type="text" className="w-[250px] bg-transparent border-b-2 border-[#6D6B7B] mb-1 focus:outline-none" placeholder='Subscribe now'/>
                </div>
                <div>
                  <button className=' w-[120px] p-2 bg-hoverBg rounded-lg text-md text-black transition duration-300 ease-in-out hover:text-hoverBg hover:bg-inherit hover:border-hoverBg border-2'>Sign up</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full place-self-start">
            <div className='flex flex-col gap-6'>
              <div className='text-lg'>Address</div>
              <div className='flex flex-col gap-6'>
                <div className='flex gap-2 items-center'>
                  <img src={location} alt="address" className='h-4'/>
                  <div className='opacity-50'>Kothrud, Pune</div> 
                </div>
                <div className='flex gap-2 items-center'>
                  <img src={mail} alt="mail" className='h-4'/>
                  <div className='opacity-50'>support@gmail.com</div> 
                </div>
                <div className='flex gap-2 items-center'>
                  <img src={phone} alt="phone" className='h-4'/>
                  <div className='opacity-50'>(+91) 9823729832</div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='w-full p-4 flex justify-between'>
        <div>Copyright @2024, <span className='text-[#6D6B7B]'>Footform</span> All Rights Reserved</div>
        <div className='flex gap-4 pl-4 pr-4'>
          <div>
            <a href="#" className='opacity-70 p-2 rounded-lg transition duration-300 ease-in-out hover:text-hoverColor hover:bg-[#6D6B7B] hover:opacity-100'>Instagram</a>
          </div>
          <div >
            <a href="#" className='opacity-70 p-2 rounded-lg transition duration-300 ease-in-out hover:text-hoverColor hover:bg-[#6D6B7B] hover:opacity-100'>Twitter</a>
          </div>
          <div>
            <a href="#" className='opacity-70 p-2 rounded-lg transition duration-300 ease-in-out hover:text-hoverColor hover:bg-[#6D6B7B] hover:opacity-100'>Facebook</a>
          </div>
          <div>
            <a href="#" className='opacity-70 p-2 rounded-lg transition duration-300 ease-in-out hover:text-hoverColor hover:bg-[#6D6B7B] hover:opacity-100'>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer