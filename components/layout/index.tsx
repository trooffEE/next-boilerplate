import React from 'react'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LayoutGrid>{children}</LayoutGrid>
}

// Note: Здесь пишется ваша сетка, переиспользуется в проекте
export const LayoutGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-5 grid-cols-4 gap-x-4 tablet:mx-10 tablet:grid-cols-8 laptop:grid-cols-16 laptop:gap-x-5">
      <aside>
        <div>logo</div>

        <div>dasdasd</div>
        <div>dasdasd</div>
        <div>dasdasd</div>
        <div>dasdasd</div>
        <div>dasdasd</div>
        <div>dasdasd</div>
        <div>dasdasd</div>
      </aside>
      {children}
    </div>
  )
}

export default Layout
