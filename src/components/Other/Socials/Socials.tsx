import Link from 'next/link'
import { icons } from '@/data/social'
import { SocialInterface } from '@/interfaces/SocialInterface'

const Socials = ({ containerStyles, iconsStyles }: SocialInterface) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            className="flex w-full max-w-40 h-12 text-[#000]"
            target="_blank"
            href={icon.path}
            key={index}
            aria-label={icon.title}
          >
            <div
              className={`${iconsStyles} w-full flex items-center gap-2 justify-center px-4 h-12 bg-transparent text-black rounded-md text-base font-normal border text-center cursor-pointer transition duration-300 ease-in-out hover:bg-[#00AFEF] hover:text-white`}
            >
              {icon.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
