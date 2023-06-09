import { FC } from 'react'
import DarkSvg from './dark'
import LightSvg from './light'
import { useTheme } from '../../hooks/useTheme'

const ThemeSwitchButton: FC = () => {
  const [isDark, toggle] = useTheme()
  return (
    <>
      <button
        className="relative rounded-xl w-11 h-6 border border-solid border-neutral-300 bg-neutral-200 text-black hover:border-neutral-800"
        onClick={toggle}
      >
        <span className="absolute flex justify-center items-center top-px left-px h-5 w-5 bg-white rounded-full dark:translate-x-full transition-transform">
          {isDark ? <DarkSvg /> : <LightSvg />}
        </span>
      </button>
    </>
  )
}

export default ThemeSwitchButton
