import SettingLayout from '@/layouts/SettingLayout.tsx'
import Menu from '@/pages/SettingPage/Menu'
import { useProviderStore } from '@/store/providerStore'
import { useEffect, useState } from 'react'
import SettingPageSkeleton from './SettingPageSkeleton'

const SettingPage = () => {
  const fetchProviderList = useProviderStore(state => state.fetchProviderList)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProviderList()

    // 模拟一个短暂的加载时间，确保骨架图显示
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="h-full w-full bg-muted dark:bg-gray-900">
        <div className="flex flex-1">
          <aside className="flex w-[300px] flex-col border-r border-neutral-200 bg-white dark:bg-gray-800 dark:border-gray-700">
            <header className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl">
                  <img src="/icon.svg" alt="logo" className="h-full w-full object-contain" />
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">BiliNote</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer"></div>
                <div className="w-6 h-6 rounded bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer"></div>
              </div>
            </header>
            <div className="flex-1 overflow-auto p-4 bg-white dark:bg-gray-800">
              <div className="h-8 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-2"></div>
              <div className="h-8 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-2"></div>
              <div className="h-8 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
            </div>
          </aside>
          <main className="h-screen flex-1 overflow-hidden bg-white dark:bg-gray-800">
            <div className="h-full w-full bg-white dark:bg-gray-800 p-6">
              <div className="h-8 w-1/4 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-4"></div>
              <div className="h-96 w-full bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded"></div>
            </div>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full">
      <SettingLayout Menu={<Menu />} />
    </div>
  )
}
export default SettingPage
