import type { ReactNode, FC } from 'react'
import { Suspense } from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useTheme } from '@/contexts/ThemeContext'
import { Toaster } from 'react-hot-toast'
import LoadingSpinner from '@/components/LoadingSpinner'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'BiliNote - 视频笔记生成器',
  description: '通过视频链接结合大模型自动生成对应的笔记',
}

const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme: currentTheme } = useTheme()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#3c77fb',
          colorBgLayout: currentTheme === 'dark' ? '#1f1f1f' : '#f5f5f5',
          colorBgContainer: currentTheme === 'dark' ? '#141414' : '#ffffff',
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div className="min-h-screen bg-background font-sans text-foreground">
          <Toaster
            position="top-center" // 顶部居中显示
            toastOptions={{
              style: {
                borderRadius: '8px',
                background: '#333',
                color: '#fff',
              },
            }}
          />
          {children}
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  )
}

export default RootLayout
