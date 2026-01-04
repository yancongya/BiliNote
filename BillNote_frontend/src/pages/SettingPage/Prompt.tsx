import { useState, useEffect } from 'react'
import SettingPageSkeleton from './SettingPageSkeleton'

const Prompt = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟一个短暂的加载时间，确保骨架图显示
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <div className="h-8 w-1/3 mb-4 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="h-4 w-1/2 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
        </div>

        <div className="space-y-4">
          <div className="h-12 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="h-12 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="h-12 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="h-10 w-32 self-start bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
        </div>
      </div>
    )
  }

  return <div className={'flex h-full w-full bg-white dark:bg-gray-800'}>prompt</div>
}

export default Prompt
