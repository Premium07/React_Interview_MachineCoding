import { useState } from "react";

const FileExplorer = ({ data }) => {
  const [showChildren, setShowChildren] = useState(false);
  //   console.log(data);

  const handleOpenChild = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div className="pl-2 border-l-2 border-black">
      <h1 className="text-lg font-semibold cursor-pointer">
        {data.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        <span className="ml-2" onClick={handleOpenChild}>
          {data.name}
        </span>
      </h1>
      {showChildren &&
        data?.children?.map((item, index) => {
          return <FileExplorer key={index} data={item} />;
        })}
    </div>
  );
};

export default FileExplorer;
