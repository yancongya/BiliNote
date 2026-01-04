import { FC, useEffect, useState } from 'react'
import HomeLayout from '@/layouts/HomeLayout.tsx'
import NoteForm from '@/pages/HomePage/components/NoteForm.tsx'
import MarkdownViewer from '@/pages/HomePage/components/MarkdownViewer.tsx'
import { useTaskStore } from '@/store/taskStore'
import History from '@/pages/HomePage/components/History.tsx'
import NoteFormSkeleton from '@/pages/HomePage/components/NoteFormSkeleton.tsx'

type ViewStatus = 'idle' | 'loading' | 'success' | 'failed'
export const HomePage: FC = () => {
  const tasks = useTaskStore(state => state.tasks)
  const currentTaskId = useTaskStore(state => state.currentTaskId)

  const currentTask = tasks.find(t => t.id === currentTaskId)

  const [status, setStatus] = useState<ViewStatus>('idle')
  const [loading, setLoading] = useState(true)

  const content = currentTask?.markdown || ''

  useEffect(() => {
    if (!currentTask) {
      setStatus('idle')
    } else if (currentTask.status === 'PENDING') {
      setStatus('loading')
    } else if (currentTask.status === 'SUCCESS') {
      setStatus('success')
    } else if (currentTask.status === 'FAILED') {
      setStatus('failed')
    }

    // 模拟一个短暂的加载时间，确保骨架图显示
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [currentTask])

  // useEffect( () => {
  //     get_task_status('d4e87938-c066-48a0-bbd5-9bec40d53354').then(res=>{
  //         console.log('res1',res)
  //         setContent(res.data.result.markdown)
  //     })
  // }, [tasks]);

  if (loading) {
    return (
      <HomeLayout
        NoteForm={<NoteFormSkeleton />}
        Preview={
          <div className="h-full w-full bg-muted rounded p-4">
            <div className="h-6 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-2"></div>
            <div className="h-6 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-2 w-3/4"></div>
            <div className="h-6 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded w-1/2"></div>
          </div>
        }
        History={<div className="h-10 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-shimmer rounded mb-2"></div>}
      />
    )
  }

  return (
    <HomeLayout
      NoteForm={<NoteForm />}
      Preview={<MarkdownViewer status={status} />}
      History={<History />}
    />
  )
}
