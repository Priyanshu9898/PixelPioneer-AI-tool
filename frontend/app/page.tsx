import HomeLinks from "@/components/HomeLinks";

const Home = () => {
  return (
    <>
      <div className="p-4 sm:ml-64 dark:bg-gray-900 h-screen">
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
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                {/* <a
                  href="#"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Learn more
                </a> */}
              </div>
              <div>
                <HomeLinks
                  link={"/caption/image"}
                  title={"Image Caption Generator"}
                />
                <HomeLinks
                  link={"/caption/video"}
                  title={"Video Caption Generator"}
                />
                <HomeLinks
                  link={"/"}
                  title={"Image Generator"}
                />
                <HomeLinks
                  link={"/"}
                  title={"Video Generator"}
                />
                {/* <HomeLinks
                  link={"/caption/image"}
                  title={"Image Caption Generator"}
                /> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
