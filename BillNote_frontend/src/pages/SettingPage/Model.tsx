import Provider from '@/components/Form/modelForm/Provider.tsx'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SettingPageSkeleton from './SettingPageSkeleton'

const Model = () => {
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
      <div className={'flex h-full bg-white dark:bg-gray-800'}>
        <div className={'flex-1/5 border-r border-neutral-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-800'}>
          <div className="h-10 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-2"></div>
          <div className="h-10 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-2"></div>
          <div className="h-10 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
        </div>
        <div className={'flex-4/5 bg-white dark:bg-gray-800 p-6'}>
          <div className="h-8 w-1/4 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-4"></div>
          <div className="h-96 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={'flex h-full bg-white dark:bg-gray-800'}>
      <div className={'flex-1/5 border-r border-neutral-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-800'}>
        <Provider></Provider>
      </div>
      <div className={'flex-4/5 bg-white dark:bg-gray-800'}>
        <Outlet />
      </div>
    </div>
  )
}
export default Model
