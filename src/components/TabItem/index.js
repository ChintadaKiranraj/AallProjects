import './index.css'

const TabItem = props => {
  const {onChangeProjectId, tabDetails, isActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const isActive = isActiveTabId ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    onChangeProjectId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActive}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
