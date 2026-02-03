import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

function Layout({ children, headerVariant = 'inner', headerContent, pageClassName = '' }) {
  return (
    <div className={`site-root${pageClassName ? ` ${pageClassName}` : ''}`}>
      <SiteHeader variant={headerVariant}>{headerContent}</SiteHeader>
      {children}
      <SiteFooter />
    </div>
  )
}

export default Layout
