import React, { useEffect, useRef } from "react";

const SVGnavbar = ({ activeTab, setActiveTab, tabs }) => {
  const menuRef = useRef(null);
  const borderRef = useRef(null);
  const border2Ref = useRef(null);
  const firstRender = useRef(true); // track first render

  useEffect(() => {
    const menu = menuRef.current;
    const border = borderRef.current;
    const border2 = border2Ref.current;
    if (!menu || !border || !border2) return;

    const activeItem = menu.querySelector(".menu__item.active");
    if (!activeItem) return;

    const menuRect = menu.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const left = itemRect.left - menuRect.left - (border.offsetWidth - itemRect.width) / 2;

    // On first render, remove transition temporarily
    if (firstRender.current) {
      border.style.transition = "none";
      border2.style.transition = "none";

      border.style.transform = `scale(1) translate3d(${left}px, 0, 0)`;
      border2.style.transform = `scaleY(-1) translate3d(${left}px, 0, 0)`;

      // Force reflow and re-enable transition
      border.getBoundingClientRect();
      border2.getBoundingClientRect();
      border.style.transition = "";
      border2.style.transition = "";

      firstRender.current = false;
    } else {
      border.style.transform = `scale(1) translate3d(${left}px, 0, 0)`;
      border2.style.transform = `scaleY(-1) translate3d(${left}px, 0, 0)`;
    }
  }, [activeTab, tabs]);

  return (
    <>
      <div className="w-0 h-0">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
              c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
              c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>

      <menu ref={menuRef} className="menutab menutab2 relative flex rounded-2xl bg-black p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`menu__item relative flex items-center justify-center p-2 rounded-full ${activeTab === tab.id ? "active" : ""
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <svg className="icon" viewBox={tab.viewBox}>
              <path d={tab.iconPath} />
            </svg>
            <p className="absolute -bottom-6 text-white text-xs">{tab.label}</p>
          </button>
        ))}

        {/* Top border */}
        <div
          ref={borderRef}
          className="menu__border absolute bottom-full w-20 h-8 bg-black rounded-full transition-transform duration-700"
        />

        {/* Bottom border */}
        <div
          ref={border2Ref}
          className="menu__border absolute w-20 h-8 bg-black rounded-full transition-transform duration-700"
          style={{
            bottom: "-70%", // position below
          }}
        />
      </menu>
    </>
  );
};

export default SVGnavbar;
