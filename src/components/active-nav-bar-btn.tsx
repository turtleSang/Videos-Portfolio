import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useEffect, useState } from "react";
export default function ActveBarButton({
  activeNav,
  handleHiden,
  handleShow,
}: {
  activeNav: boolean;
  handleHiden(): void;
  handleShow(): void;
}) {
  let [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    setActive(activeNav);
  }, [activeNav]);

  return (
    <div className="w-8 h-8 overflow-hidden cursor-pointer text-center md:hidden">
      <div
        className={clsx(!active && "-translate-y-8", "duration-300")}
        onClick={() => handleActive()}
      >
        <FontAwesomeIcon
          icon={faClose}
          fontSize={"32px"}
          onClick={() => {
            handleHiden();
          }}
        />
        <FontAwesomeIcon
          icon={faBars}
          fontSize={"32px"}
          onClick={() => handleShow()}
        />
      </div>
    </div>
  );
}
