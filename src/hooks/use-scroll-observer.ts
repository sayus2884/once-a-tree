import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

/**
 * @param  {number} height Scroll's height to set isInPosition to true
 */
const UseScrollObserver = (height?: number) => {
  const [isInPosition, setIsInPosition] = useState(true);

  const handleScrollObserve = () => {
    if (!height) return;

    if (window.scrollY > height) {
      setIsInPosition(false);
    } else {
      setIsInPosition(true);
    }
  };

  /**
   * @param  {string} className class name to scroll to
   * @param  {any} props? react-scroll options https://www.npmjs.com/package/react-scroll#user-content-propsoptions
   */
  const scrollTo = (className: string, props: any = {}) => {
    const options = {
      offset: props.offset || -200,
      ...props,
    };

    scroller.scrollTo(className, options);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScrollObserve);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("scroll", handleScrollObserve);
    };
  }, []);

  return { isInPosition, scrollTo };
};

export default UseScrollObserver;
