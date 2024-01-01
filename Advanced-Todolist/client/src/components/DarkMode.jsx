import { useEffect, useState } from 'react'

const DarkMode = () => {
    const [darkMode, setdarkMode] = useState(false)

  const ThemeMode = () => {


    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setdarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setdarkMode(false)
    }

    // Whenever the user chooses light mode
    localStorage.theme = 'light'

    // Whenever the user chooses dark mode
    localStorage.theme = 'dark'

    // Whenever the user chooses to respect the OS preference
    localStorage.removeItem('theme')
  }

  useEffect(() => {
    ThemeMode()
  }, [])


  const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setdarkMode((prevDarkMode) => {
      return !prevDarkMode
    })
  }
  return (
         <>
            <div className="w-full flex items-center justify-center ">

                <input checked={darkMode} id="checkbox" type="checkbox" onChange={handleDarkMode} />
                <label className="switch" htmlFor="checkbox">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/moon-symbol.png" alt="moon-symbol" className='bg-white rounded-full'/>
                </label>

            </div>
        </>
  )
}

export default DarkMode