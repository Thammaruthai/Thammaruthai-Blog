export function HeroSection() {
  return (
    <>
      <section className="w-full flex justify-center items-center py-8 ">
        <div
          id="heroSectionContent"
          className="w-10/12 flex justify-between items-center gap-14 max-sm:flex-col max-sm:w-11/12"
        >
          <div
            id="preWord"
            className="flex flex-col text-right w-4/12 gap-6 max-sm:w-full max-sm:text-center"
          >
            <div
              id="preWord_head"
              className="text-[#26231E] font-semibold Stay Inspired max-sm:text-[2.5rem]"
            >
              <h2 className="text-5xl">Stay Informed, Stay Inspired</h2>
            </div>

            <div id="preWord_content" className="text-[#75716B] font-medium">
              <h3 className="text-base">
                Discover a World of Knowledge at Your Fingertips. Your Daily
                Dose of Inspiration and Information.
              </h3>
            </div>
          </div>

          <div
            id="profilePic"
            className="w-1/3 h-[529px] overflow-hidden max-sm:w-full"
          >
            <img
              src="./src/img/profilePic.jpg"
              alt="my profile picture"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>

          <div
            id="about author"
            className="w-4/12 text-[#75716B] max-sm:w-full"
          >
            <div id="author_section">
              <h4 className="text-xs">-Author</h4>
              <h2 className="text-2xl font-semibold text-[#43403B]">
                Thammaruthai W.
              </h2>
            </div>

            <div
              id="author_content"
              className="flex flex-col gap-4 py-4 font-medium"
            >
              <h3 className="text-base">
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
              </h3>
              <h3>
                When i’m not writing, I spends time volunteering at my local
                animal shelter, helping cats find loving homes.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
