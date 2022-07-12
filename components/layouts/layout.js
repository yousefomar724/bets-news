import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'
import { useState, useRef, useEffect } from 'react'

export default function Layout({ settings, children }) {
  const targetRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(targetRef.current.offsetHeight)
  }, [])

  var marginTop = height + 'px'

  return (
    <>
      <Header
        settings={settings}
        targetRef={targetRef}
        headerHeight={marginTop}
      />
      <main className={`min-h-screen`} style={{ marginTop: marginTop }}>
        {children}
      </main>
      <Footer settings={settings} />
    </>
  )
}
