import { useState } from "react";
import Image from "../images/image";
import Template from "../images/template";
import Form from "../components/Form.tsx";
import Preview from "./Preview.tsx";

function Content() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [imageSelector, setImageSelector] = useState(true);

  function selectImageCreator() {
    setImageSelector(true);
  }
  function selectTemplateSelector() {
    setImageSelector(false);
  }
  return (
    <div className="w-full h-fit my-2">
      <div className="max-w-screen-lg box-border mx-auto p-2">
        <div className="rounded-xl bg-secondary w-full box-border py-2">
          <div className="flex justify-evenly mb-2">
            <CustomButton
              isActive={imageSelector}
              onClick={selectImageCreator}
              buttonText="Create an Image"
              svg={Image}
            />
            <CustomButton
              isActive={!imageSelector}
              onClick={selectTemplateSelector}
              buttonText="Select a Template"
              svg={Template}
            />
          </div>
          {imageSelector ? (
            <Form
              title={title}
              image={image}
              content={content}
              previewUrl={previewUrl}
              setPreviewUrl={setPreviewUrl}
              setImage={setImage}
              setContent={setContent}
              setTitle={setTitle}
            />
          ) : (
            <div className="p-12 text-red-900">
              I wanted to create multiple templates to chose from but the time
              was not sufficient, I came to know about the opportunity on 6th
              August's morning.
            </div>
          )}
        </div>
      </div>
      <Preview title={title} image={image} content={content} />
    </div>
  );
}

interface CustomButtonProps {
  isActive: boolean;
  onClick: () => void;
  buttonText: string;
  svg: () => JSX.Element;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  isActive,
  buttonText,
  svg,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative inline-block overflow-hidden rounded-xl uppercase w-[45%] md:w-[49%] box-border p-3 text-xl font-bold font-heading text-center bg-primary hover:cursor-pointer "
    >
      <div className="hidden md:block">{buttonText}</div>
      <div className="flex items-center w-fit md:hidden m-auto">{svg()}</div>
      {!isActive && (
        <div className="w-full h-full bg-secondary opacity-55 absolute inset-0 hover:opacity-0 hover:cursor-pointer" />
      )}
    </div>
  );
};
export default Content;
