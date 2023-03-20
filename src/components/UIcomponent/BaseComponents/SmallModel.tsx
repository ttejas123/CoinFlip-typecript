import React, { ReactNode } from 'react'

type SmallModelProps = {
    children: ReactNode
    UniqueId: string
}

function SmallModel(props: SmallModelProps) {
  return (
    <>
    <input type="checkbox" id={props.UniqueId} className="modal-toggle" />
    <label htmlFor={props.UniqueId} className="modal cursor-pointer backdrop-blur-sm">
    <div className="modal-box w-1/3 max-w-5xl scrollbar-style-dark border border-base-300">
            {props.children}
        </div>
    </label>
    </>
  )
}

export default SmallModel