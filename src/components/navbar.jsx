export function NavBar() {
  return (
    <>
      <nav className="w-full flex justify-center items-center border-b-2 border-stone-200">
        <div className="flex flex-row justify-between items-center py-4 w-10/12">
          <div className="text-3xl">hh.</div>

          <div className="flex flex-row justify-between items-center gap-4 max-sm:hidden">
            <button className="border-2 border-gray-500 bg-white w-32 h-12 rounded-full">
              Log in
            </button>
            <button className="border-2 border-black bg-[#26231E] w-32 h-12 text-slate-50 rounded-full">
              Sign in
            </button>
          </div>

          <div id="hambarger" className="sm:hidden ">
            <svg
              className="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
