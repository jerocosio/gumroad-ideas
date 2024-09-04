export default function LandingNavigation() {
  const menuOptions = [
    {
      text: "Architecture",
    },
    {
      text: "Branding",
      subMenu: [
        {
          text: "Business cards",
        },
        {
          text: "Logos",
        },
        {
          text: "Social media",
        },
      ],
    },
    {
      text: "Entertainment design",
    },
    {
      text: "Fashion design",
    },
    {
      text: "Fonts",
    },
    ,
    {
      text: "Graphics",
      subMenu: [
        {
          text: "Business cards",
        },
        {
          text: "Logos",
        },
        {
          text: "Social media",
        },
      ],
    },
    ,
    {
      text: "Icons",
      subMenu: [
        {
          text: "Business cards",
        },
        {
          text: "Logos",
        },
        {
          text: "Social media",
        },
      ],
    },
    {
      text: "Industrial design",
    },
    {
      text: "Interior design",
    },
    {
      text: "Print & packaging",
    },
    {
      text: "UI & Web",
    },
    {
      text: "Wallpapers",
    },
  ];
  return (
    <section>
      <h2 id="nav">Landing navigation</h2>
      <div>
        <p>
          Make some small changes to the nav menu to make it more user-friendly.
        </p>
        <p>
          <strong>Problem:</strong>
        </p>
        <ul>
          <li>
            If a user wants to see the sub-menu items of the nav it needs to
            click on them.
          </li>
          <li>
            This causes some weird interactions, for example if the users wants
            to see sub-menu items on the bottom of the nav, the buttons will
            move to the top of the nav after clicking on it.
          </li>
          <li>
            If a user wants to quickly go back and forth between the menu and
            sub-menu items, they need to click way too many times.
          </li>
          <li>
            As some of the menus are too tall, users need to scroll to see all
            the options. (Not ideal)
          </li>
        </ul>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>
            Allow the sub-menus to appear when the user is hovering over them.
          </li>
          <li>
            Experiment with adding columns on the categories so that all of them
            are visible above the fold.
          </li>
          <li>
            The top item on the categories irrelevant ("All Design"), as the
            user could already acces them by clicking in the top button.
          </li>
        </ul>
        <div className="my-6">
          <button className="bg-black rounded-3xl border border-white font-light shadow-[4px_4px_0_0_rgb(255,255,255)] px-4 py-2">
            Design
          </button>
          <div className="bg-yellow-400 mt-2 shadow-[4px_4px_0_0_rgb(255,255,255)] grid grid-cols-4 w-full text-left rounded-sm ">
            {menuOptions.map((option, index) => (
              <div key={index} className="group relative">
                <button className="hover:bg-white font-light text-left  text-black px-4 w-full flex justify-between">
                  <p className="underline">{option.text}</p>
                  {option.subMenu && (
                    <div>
                      <p className="text-gray-900">&gt;</p>
                    </div>
                  )}
                </button>

                {option.subMenu && (
                  <div className="bg-white z-40 text-black shadow-[4px_4px_0_0_rgb(0,0,0)] w-52 text-left rounded-sm hidden group-hover:block absolute top-0 -right-52">
                    {option.subMenu.map((subOption, index) => (
                      <button
                        key={index}
                        className="hover:bg-gray-200 font-light text-left text-black px-4 underline py-3 w-full flex justify-between"
                      >
                        {subOption.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
