import React, { ChangeEvent, FormEvent } from "react";
import { toPng } from "html-to-image";

interface FormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  previewUrl: string;
  setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<FormProps> = ({
  title,
  setTitle,
  content,
  setContent,
  image,
  setImage,
  previewUrl,
  setPreviewUrl,
}) => {
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(e.target.value);
    setContent(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      console.log(img);
      if (allowedTypes.includes(img.type)) {
        setImage(URL.createObjectURL(img));
        console.log(image);
      } else {
        alert("Please upload a valid image file (jpg, png, webp)");
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const node = document.getElementById("preview");

    if (node) {
      const dataUrl = await toPng(node);
      setPreviewUrl(dataUrl);
    }
  };

  return (
    <div className="bg-primary mx-2 p-2 rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-3">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          required
          className="w-full bg-background px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Content"
          required
          className="w-full bg-background px-4 py-2 border border-secondary fill-background rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="file"
          accept="image/jpeg, image/png, image/webp"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-accent"
        >
          Generate OG Image
        </button>
      </form>

      {previewUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Preview</h2>
          <img
            src={previewUrl}
            alt="OG Image Preview"
            className="w-full max-w-3xl mx-auto"
          />
          <a
            href={previewUrl}
            download="og-image.png"
            className="mt-4 inline-block px-4 py-2 bg-secondary text-white rounded-md hover:bg-accent"
          >
            Download OG Image
          </a>
        </div>
      )}
    </div>
  );
};

export default Form;
