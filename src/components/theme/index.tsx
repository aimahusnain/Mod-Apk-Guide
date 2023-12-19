
import { MoonIcon, SunIcon } from "../Icons";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button aria-label="ThemeToggler" className="px-3" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {
        theme === 'dark' ? <MoonIcon className='text-black' /> : <SunIcon className='text-black' />
      }
    </button>
  );
}
