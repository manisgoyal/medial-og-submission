import DefaultImg from "../images/default_img.jpg";

interface PreviewProps {
  title: string;
  content: string;
  image: string | null;
}

const defText: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const Preview: React.FC<PreviewProps> = ({ title, content, image }) => {
  return (
    <div className="flex justify-center mt-3" title="Preview">
      <div id="preview" className="w-[1200px] h-[630px]">
        <div
          className="flex w-full h-full"
          style={{ backgroundColor: "#1dff254a" }}
        >
          <div
            className="h-full box-border flex items-center justify-center"
            style={{ minWidth: "40%" }}
          >
            <img
              src={image ? image : DefaultImg}
              alt="Image"
              style={{ width: "384px" }}
              className="h-auto border-4 border-accent rounded-xl overflow-hidden m-auto"
            />
          </div>
          <div
            className="h-full box-border text-text flex items-center justify-center overflow-hidden"
            style={{ minWidth: "60%" }}
          >
            <div className="h-full w-full">
              <p
                className="text-4xl text-center capitalize overflow-hidden p-2 whitespace-nowrap overflow-ellipsis"
                style={{ maxHeight: "10%" }}
              >
                {title ? title : "Title"}
              </p>
              <p
                className="text-xl text-justify overflow-hidden p-2 whitespace-nowrap overflow-ellipsis"
                style={{ maxHeight: "90%" }}
              >
                {content ? content : defText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
