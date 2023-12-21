"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/Button";
import MobileSidebar from "./MobileSidebar";
import { useEffect, useState } from "react";
import { navData } from "../../utils/StaticData";
import ThemeToggler from "../theme";
import SkeletonNavBar from "./SkeletonNavbar"; // Import the Skeleton NavBar component

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with isLoading set to true
  const [sticky, setSticky] = useState<boolean>(false);

  function handleStickyNavbar() {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      setIsLoading(false); // After a delay, set isLoading to false to show the actual NavBar
    }, 100); // Adjust the delay time as needed (1000 milliseconds = 1 second)

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
    className={`top-0 shadow-lg left-0 z-40 flex w-full items-center bg-transparent
    ${
      sticky
      ? "fixed z-[9999] bg-zinc-200 bg-opacity-30 backdrop-blur-sm shadow-sticky backdrop:blur-sm transition transform translate-y-0"
      : ""
    } 
    `}
    >
      {isLoading ? (
        <SkeletonNavBar />
      ) : (
        <header className="w-full h-fit py-4 px-4 md:px-14 flex justify-between items-center">
          <Link href="/" className="font-mono">
            <h3 className="text-3xl font-bold">Logo</h3>
          </Link>

          {isMobile && <MobileSidebar />}

          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList className="md:flex md:space-x-4">
                {Object.entries(navData).map(([category, items], index) => (
                  <NavigationMenuItem key={index}>
                    {Array.isArray(items) ? (
                      <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
                    ) : (
                      <Link href={items.link} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()}`}
                        >
                          {items.text}
                        </NavigationMenuLink>
                      </Link>
                    )}
                    {Array.isArray(items) && (
                      <NavigationMenuContent className="md:w-[400px] lg:w-[500px] lg:flex lg:flex-col lg:space-y-3">
                        <ul className="grid gap-3 p-6 md:grid-cols-2 lg:grid-cols-3">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link href={`/categories${item.link}`}>{item.text}</Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {!isMobile && (
            <div className="flex items-center gap-5">
              <ThemeToggler />
              <Link href="sign-up">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </header>
      )}
    </div>
  );
};

export default NavBar;
