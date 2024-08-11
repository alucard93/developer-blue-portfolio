import CountUp from 'react-countup'

import { BagdeInterface } from '@/interfaces/BagdeInterface'

const Badge = ({ containerStyles, icon, badgeText }: BagdeInterface) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary"></div>
        <div
          className="max-w-[90px] whitespace-nowrap leading-none text-[15px]
          font-medium text-[#00054E]"
        >
          {badgeText}
        </div>
      </div>
    </div>
  )
}

export default Badge
