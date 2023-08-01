"use client";

import FileUpload from "@/components/FileUpload";
import Heading from "@/components/Heading";
import { ImageCaption } from "@/constants/HomeLinksIcons";
import React from "react";

const ImageCaptionPage = () => {
  return (
    <>
      <Heading
        icon={<ImageCaption width={10} height={10} />}
        title="Image Caption Generator"
        description="Upload Your Image and Generate Accurate Caption for Your Image"
      />
      <FileUpload />
    </>
  );
};

export default ImageCaptionPage;
