
import { MoonIcon, SunIcon } from "../Icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/Button";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="ghost" aria-label="ThemeToggler" className="px-3" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {
        theme === 'dark' ? <MoonIcon className='text-white' /> : <SunIcon className='text-black' />
      }
    </Button>
  );
}
