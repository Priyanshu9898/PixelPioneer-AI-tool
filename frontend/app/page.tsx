import HomeLinks from "@/components/HomeLinks";
import {
  CodeGenerator,
  ImageCaption,
  ImageGenerator,
  MusicGenerator,
  VideoCaption,
  VideoGenerator,
} from "@/constants/HomeLinksIcons";
import Link from "next/link";
import 'flowbite';

const Home = () => {
  return (
    <>
      <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <div className="p-4 rounded-lg mt-14 dark:bg-gray-900">
          <section className="bg-white dark:bg-gray-900 py-2">
            <div className=" px-4 mx-auto max-w-screen-xl text-center">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                Explore the Power of AI
              </h1>
              <p className="mb-8 text-sm font-normal text-gray-500 lg:text-lg sm:px-16 lg:px-48 dark:text-gray-400">
                Complete Various Tasks with Our Powerful AI
              </p>
              <div className="mb-4 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link
                  href="/about"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mr-2 mb-2"
                >
                  Get started
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <HomeLinks
                  link={"/caption/image"}
                  title={"Image Caption Generator"}
                  icon={<ImageCaption />}
                />
                <HomeLinks
                  link={"/caption/video"}
                  title={"Video Caption Generator"}
                  icon={<VideoCaption />}
                />
                <HomeLinks
                  link={"/"}
                  title={"Image Generator"}
                  icon={<ImageGenerator />}
                />
                <HomeLinks
                  link={"/"}
                  title={"Video Generator"}
                  icon={<VideoGenerator />}
                />
                <HomeLinks
                  link={"/"}
                  title={"Music Generator"}
                  icon={<MusicGenerator />}
                />
                <HomeLinks
                  link={"/"}
                  title={"Code Generator"}
                  icon={<CodeGenerator />}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
