import { useEffect, useState, useCallback } from "react"

export const useTheme = () => {
  const [theme, setTheme] = useState(
    typeof window === "undefined"
      ? "light"
      : window.localStorage.getItem("__theme") || "light"
  )

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark")
      window.localStorage.setItem("__theme", "light")
    } else {
      document.body.classList.add("dark")
      window.localStorage.setItem("__theme", "dark")
    }
  }, [theme])

  const setIsLightTheme = useCallback(value => {
    setTheme(value ? "light" : "dark")
  }, [])

  return [theme, { setIsLightTheme }]
}
