import React from "react";

const About = () => {
  return (
    <div className="p-4 sm:ml-64 dark:bg-gray-900 overflow-auto dark:text-white h-screen">
      <div className="p-4 rounded-lg mt-14 dark:bg-gray-900">
        <h1 className="text-4xl font-bold mb-8">About PixelPioneer</h1>
        <main className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
          <section
            id="image-caption-generator"
            className="p-4 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Image Caption Generator</h2>
            <p className="prose dark:prose-dark max-w-none">
              The Image Caption Generator is an innovative feature that uses AI
              to generate relevant captions for your images. Simply upload an
              image, and the generator will provide a caption that accurately
              describes the image content.
            </p>
          </section>
          <section
            id="video-caption-generator"
            className="p-4 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Video Caption Generator</h2>
            <p className="prose dark:prose-dark max-w-none">
              The Video Caption Generator takes the concept a step further,
              generating captions for video content. Upload your video and the
              AI will provide a text caption that represents the video content
              accurately.
            </p>
          </section>
          <section
            id="image-generator"
            className="p-4 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Image Generator</h2>
            <p className="prose dark:prose-dark max-w-none">
              Our Image Generator uses AI to create unique images based on your
              input. It provides a new way of generating content for your
              projects, whether for design, art, or more practical applications.
            </p>
          </section>
          <section
            id="video-generator"
            className="p-4 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Video Generator</h2>
            <p className="prose dark:prose-dark max-w-none">
              The Video Generator allows you to generate your own unique videos
              with the help of our AI. Whether you need video content for social
              media, marketing, tutorials, or any other purpose, our Video
              Generator has got you covered.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
