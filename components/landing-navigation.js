export default function LandingNavigation() {
  const menuOptions = [
    {
      text: "All Drawing & Painting",
    },
    {
      text: "Digital illustration",
      subMenu: [
        {
          text: "All Digital illustration",
        },
        {
          text: "Courses",
        },
        {
          text: "Illustration Brushes",
          subMenu: [
            {
              text: "All Illustration Brushes",
            },
            {
              text: "Blender",
            },
            {
              text: "Photoshop",
            },
            {
              text: "Procreate",
            },
          ],
        },
      ],
    },
    {
      text: "Artwork & Commissions",
    },

    {
      text: "Traditional Art",
    },
  ];
  return (
    <section>
      <h2 className="text-2xl">Small improvements</h2>
      <div>
        <h3>
          Improve the submenus of the main navigation when navigating to
          sub-categories:
        </h3>
        <p>
          <strong>Current:</strong>
        </p>
        <p>
          <strong>Proposed change:</strong>
        </p>
        <div className="my-6">
          <button className="bg-black rounded-3xl border border-white font-light shadow-[4px_4px_0_0_rgb(255,255,255)] px-4 py-2">
            Drawing & Painting
          </button>
          <div className="bg-indigo-400 mt-2 shadow-[4px_4px_0_0_rgb(255,255,255)] w-52 text-left rounded-sm ">
            {menuOptions.map((option) => (
              <div key={option.text} className="group relative">
                <button className="hover:bg-white font-light text-left  text-black px-4 w-full flex justify-between">
                  <p className="underline">{option.text}</p>
                  {option.subMenu && (
                    <div>
                      <p className="text-gray-900">&gt;</p>
                    </div>
                  )}
                </button>

                {option.subMenu && (
                  <>
                    <div className="bg-indigo-400 text-white shadow-[4px_4px_0_0_rgb(255,255,255)] w-52 text-left rounded-sm hidden group-hover:block absolute top-0 -right-52">
                      {option.subMenu.map((subOption) => (
                        <button
                          key={option.text}
                          className="hover:bg-white font-light text-left text-black px-4 underline py-3 w-full flex justify-between"
                        >
                          {subOption.text}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
