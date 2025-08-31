import data from "../database.json";
import { useParams,useNavigate } from "react-router";
import left_arrow from "../assets/ArrowLeft.png";
import link_arrow from "../assets/link.svg";
import share_icon from "../assets/share.svg";
import { useState } from "react";

function addRefParam(url, ref = "designindex") {
  try {
    const u = new URL(url);
    u.searchParams.set("ref", ref);
    return u.toString();
  } catch {
    return url;
  }
}

// Dynamic meta tags per tool 
export const meta = ({ params }) => {
  const tools = data.find(
    (item) => item.tool_name.toLowerCase() === params.tools.toLowerCase()
  );

  return [
    { title: `${tools?.tool_name} | Design Index` },
    {
      name: "description",
      content: `{${tools?.description}}`,
    },
    { property: "og:title", content: `{${tools?.tool_name}}` },
    { property: "og:description", content: `{${tools?.description}}` },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `{${tools?.og_image_link}}` },
  ];
};

export default function ToolPage() {
  const { tools } = useParams();
  const navigate = useNavigate();

  const selectedItem = data.find(
    (item) => item.tool_name.toLowerCase() === tools?.toLowerCase()
  );

  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!selectedItem) {
    return <div>Tool not found</div>;
  }

  return (
    <div className="flex flex-col items-start justify-center h-auto mt-[100px] p-[5px] w-auto">
      {/* Back button */}
      <div
        onClick={() => navigate(-1)}
        className="flex flex-row items-center justify-start cursor-pointer opacity-70 hover:opacity-100 hover:translate-x-[-2px] transition-all duration-200 ease-in-out"
      >
        <img src={left_arrow} alt="back arrow" className="w-[25px] h-[25px]" />
        <span className="ml-[5px] font-Outfit text-[20px] font-medium text-black">
          back
        </span>
      </div>

      {/* Tool Info */}
      <div className="flex flex-col sm:flex-row items-start justify-start mt-[10px]">
        <img
          src={selectedItem.og_image_link}
          alt="og image"
          className="w-full sm:w-[320px] h-auto rounded-[20px]"
        />
        <div className="flex flex-col items-start justify-start ml-0 sm:ml-[20px]">
          <span className="font-semibold text-[30px] font-Outfit mt-[5px] ">
            {selectedItem.tool_name}
          </span>
          <p className="text-[18px] font-Outfit font-medium mt-[10px]">
            {selectedItem.extended_description}
          </p>

          <div className="flex flex-row gap-x-[10px] mt-[15px]">
            {/* Share button */}
            <div
              onClick={handleCopyLink}
              className="flex flex-row items-center justify-center px-[10px] py-[5px] bg-white shadow-sm border rounded-[10px] hover:cursor-pointer"
            >
              <img src={share_icon} alt="share" className="w-[20px] h-[20px]" />
              <span className="ml-[5px] text-black font-Outfit font-semibold">
                {copied ? "link copied!" : "share"}
              </span>
            </div>

            {/* Visit website */}
            <a
              href={addRefParam(selectedItem.website)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center px-[10px] py-[5px] bg-white shadow-sm border rounded-[10px]"
            >
              <img src={link_arrow} alt="link" className="w-[20px] h-[20px]" />
              <span className="ml-[5px] font-Outfit font-semibold">
                visit website
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
