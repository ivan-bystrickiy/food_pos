import MainSidebar from "../../../blocks/main-sidebar/MainSidebar"

function BaseTemplate(props) {
  return (
    <div className="content-wrapper">
      {/* Sidebar */}
      <MainSidebar />
      {/* Page content */}
      <div className="content">
        { props.children }
      </div>
    </div>
  )
}

export default BaseTemplate
