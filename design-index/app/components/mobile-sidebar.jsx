export default function Mobile_sidebar() {
  return (
    <div className="md:hidden fixed top-0 left-0 w-[80%] sm:w-[50%] h-screen bg-white z-50 shadow-lg justify-center items-end">

            <div className="flex flex-col w-full h-auto p-[10px]">
              <div className="flex flex-row items-center justify-between mb-4 w-auto h-auto">
                <Link to="/" onClick={() => setSidebar(false)} className="flex flex-row items-center justify-start w-auto h-auto mb-[5px] p-[10px]">
                  <img src={logo} alt="design index logo" className="w-[30px] h-[30px] rotate-[5deg]" />
                  <span className="text-[25px] text-black font-Fustat font-semibold ml-[5px] items-center justify-start">design index.</span>
                </Link>
                <img onClick={() => setSidebar(false)} src={sidebar_close_icon} alt="close sidebar" className="w-[36px] h-[36px] p-[5px]"/>
              </div>

              <div className="flex flex-col items-start justify-start w-full h-auto overflow-y-auto hide-scrollbar">
                {navItems.map(({ path, label, icon }) => (
                  <Link
                    key={path}
                    to={path}
                    className="flex items-center gap-[10px] cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    onClick={() => setSidebar(false)}
                  >
                    <img src={icon} alt={label} className="w-[35px] h-[35px] border-[1.5px] border-[#EBEBEB] rounded-[8px] p-[5px]" />
                    <span className="text-[25px] font-Outfit font-semibold text-black ">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:hidden items-start justify-start w-[80vw] h-auto px-[19px] bg-white fixed bottom-[80px] left-0px">
                <div className="flex flex-row items-center justify-start w-full h-auto mb-[5px]">
                  <img src={logo} alt="design index logo" className="w-[22px] h-[22px]  sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] 2xl:h-[40px] 2xl:w-[40px] rotate-[5deg]" />
                  <span className="text-[19px] sm:text-[19px] md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] text-black font-Fustat font-semibold ml-[5px]">design index.</span>
                </div>
                <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] text-[#575757] font-Outfit leading-4 font-medium">collection of the best design resources on the internet</p>
                <div className='flex flex-row items-center'>
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">made with</p>
                  <img src={heart} alt="Made with Love" className=" w-[15px] h-[15px] md:w-[15px] md:h-[15px] lg:w-[17px] lg:h-[17px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] mx-[2px]" />
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">by Atharv Remeshan</p>
                </div>
                <div className='flex flex-row items-center'>
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">location - Mumbai,India</p>
                  <img src={india} alt="indian flag" className="w-[15px] h-[10px]md:w-[17px] md:h-[12px] lg:w-[19px] lg:h-[14px] xl:w-[22px] xl:h-[16px] 2xl:w-[24px] 2xl:h-[18px] ml-[5px]" />
                </div>
                <div className='flex flex-row items-start justify-center mt-[5px]'>
                  <img src={twitter} loading="lazy" alt="X logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] mr-[5px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://x.com/atharv_rem", "_blank")} />
                  <img src={insta} loading="lazy" alt="Instagram logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] mr-[5px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://instagram.com/atharv_remeshan", "_blank")} />
                  <img src={linkedin} loading="lazy" alt="LinkedIn logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://www.linkedin.com/in/atharv-rem", "_blank")} />
                </div>
            </div>

            <Link to="/submit-a-tool" className="w-[70vw] sm:w-[45vw] h-auto px-[20px] bg-white border-[1.5px] border-[#e3e3e3] p-[2px] flex flex-row items-center justify-center fixed bottom-[20px] left-[20px] sm:left-[20px] rounded-[18px]" onClick={() => setSidebar(false)}>
                <img src={send} alt="submit icon" className="w-[25px] h-[25px]" />
                <span className="text-[25px] font-Outfit font-semibold ml-[10px]">submit a tool</span>
            </Link>
        </div>
  );
}
