"use client";

import FileUpload from "@/components/FileUpload";
import Heading from "@/components/Heading";
import { ImageCaption } from "@/constants/HomeLinksIcons";
import React from "react";

const VideoCaption = () => {
  return (
    <>
      <Heading
        icon={<ImageCaption width={10} height={10}/>}
        title={"Video Caption Generator"}
        description="Upload Your Video and Generate Accurate Caption for Your Video"
      />
      <FileUpload />
    </>
  );
};

export default VideoCaption;
