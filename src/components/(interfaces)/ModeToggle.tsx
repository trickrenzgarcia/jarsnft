import { Moon, Sun } from "lucide-react";

type ModeToggleProps = {
  setTheme: (theme: string) => void;
  theme: string | undefined;
};
export default function ModeToggle({ setTheme, theme }: ModeToggleProps) {
  return (
    <div className="h-[50px] w-[50px] cursor-pointer rounded-[10px] bg-gray-200 text-2xl dark:bg-card">
      {theme === "dark" ? (
        <div
          className="flex h-full w-full items-center justify-center"
          onClick={() => setTheme("light")}
        >
          <Moon className="h-6 w-6" />
        </div>
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          onClick={() => setTheme("dark")}
        >
          <Sun className="h-6 w-6" />
        </div>
      )}
    </div>
  );
}
