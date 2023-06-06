import "./layouts.css"

export const DontHideContentUnderDashboard =({opened ,setOpened , children})=>{
     return(
        <div className={opened ? "pl-220 content-container pr-24" : "content-container pr-24" }>
          {children}
        </div>
     )
}

export const FlexContainerForContents = ({children})=>{
  return(
      <div className="flex-container-wrapper--content">

      </div>
  )
}