import { Link } from 'react-router';
import data from '../database.json';


export default function Grid({items}) {
 let filtered = [];
  if (items === "free") {
    filtered = data.filter(
      (item) => item.category === "colour" && item.pricing === "free"
    );
  } else if (items === "paid") {
    filtered = data.filter(
      (item) => item.category === "colour" && item.pricing === "paid"
    );
  } else if (items === "freemium") {
    filtered = data.filter(
      (item) => item.category === "colour" && item.pricing === "free,paid"
    );
  }
  else {
    filtered = data.filter(
      (item) => item.category === "colour"
    );
  }

  return (
    <>
    {filtered.length > 0 ? (
    <div className="h-[80vh] overflow-auto grid grid-cols-1 sm:grid-cols-2 gap-[15px] mt-[10px] w-full pb-[120px] pt-[5px] hide-scrollbar items-start">
        {filtered.map((item) =>
            item ? (
            <Link
            key={item.tool_name}
            to={`/tool/${item.tool_name.toLowerCase()}`}
            className="bg-white rounded-[15px] lg:rounded-[20px] xl:rounded-[24px] justify-start items-center border-[1px] border-[#e1e1e1] flex flex-row hover:shadow-sm hover:translate-y-[-2px] transition-all duration-200 ease-in-out cursor-pointer"
            >
            <img
            alt={item.description.toLowerCase()}
            loading='lazy'
            src={item.og_image_link}
            className="h-[110px] w-[190px] sm:h-[110px] sm:w-[200px] md:h-[130px] md:w-[240px] lg:h-[140px] lg:w-[240px] xl:w-[300px] xl:h-[160px] 2xl:w-[350px] 2xl:h-[195px] rounded-[10px] sm:rounded-[10px] md:rounded-[14px] lg:rounded-[14px] xl:rounded-[18px] flex-shrink-0 overflow-hidden ml-[7px] md:ml-[7px] lg:ml-[8px] xl:ml-[8px] 2xl:ml-[12px] mt-[5px] mb-[5px]"
            />
            <div className='flex flex-col justify-start items-start ml-[15px] mr-[12px] w-auto h-full mt-[10px]'>
                <div className="text-[14px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] text-black font-Outfit font-bold p-0 leading-4 xl:leading-5 mt-[5px] lg:mt-[8px] 2xl:mt-[15px]">{item.tool_name}</div>

                    {item.pricing.length > 5 ? (
                    <div className='flex flex-row items-center justify-start'>
                      <div className="font-Poppins font-semibold flex text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">free</div>
                      <div className="flex font-Poppins font-semibold text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] ml-[5px] 2xl:mt-[15px]">paid</div>
                    </div>
                    ) : item.pricing === 'free' ? (
                        <div className="font-Poppins font-semibold flex text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">free</div>
                    ) : item.pricing === 'paid' ? (
                        <div className="font-Poppins font-semibold text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">paid</div>
                    ) : null}

                    <p className="text-[12px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] font-Outfit font-semibold text-[#595959]  leading-[12px] xs:leading-[15px] sm:leading-3 md:leading-4 lg:leading-5 justify-evenly mr-[5px] mt-[5px] lg:mt-[7px] 2xl:mt-[10px]">
                      {item.description.toLowerCase()}
                    </p>
            </div>
            </Link>
            ) : null
        )} 
    </div>
    )
    :
    <div className="flex flex-col items-center justify-center h-1/2 w-full">
      <span className=" text-[20px] xs:text-[22px] sm:text-[23px] md:text-[24px] xl:text-[28px] 2xl:text-[32px] font-Outfit font-semibold text-black">No tools match this filter</span>
      <span className=" text-[15px] xs:text-[16px]sm:text-[19px] md:text-[20px] xl:text-[24px] 2xl:text-[28px] font-Outfit font-medium text-gray-600 mt-2">Try using the other filters</span>
    </div>
    }
    </>
  );
}
