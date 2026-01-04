import Provider from '@/components/Form/modelForm/Provider.tsx'
import { Outlet } from 'react-router-dom'
import Options from '@/components/Form/DownloaderForm/Options.tsx'
const Downloader = () => {
  return (
    <div className={'flex h-full bg-white dark:bg-gray-800'}>
      <div className={'flex-1/5 border-r border-neutral-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-800'}>
        <Options></Options>
      </div>
      <div className={'flex-4/5 bg-white dark:bg-gray-800'}>
        <Outlet />
      </div>
    </div>
  )
}
export default Downloader
