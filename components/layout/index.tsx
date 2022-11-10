import React from 'react'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LayoutGrid>{children}</LayoutGrid>
}

// Note: Здесь пишется ваша сетка, переиспользуется в проекте
export const LayoutGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>
}

export default Layout
