import { useLocalStorage } from "@vueuse/core";

export const useTheme = () => {
  return useLocalStorage("theme", "dark");
};
