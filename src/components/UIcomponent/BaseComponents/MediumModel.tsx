import React, { ReactNode } from 'react'

type MediumModelProps = {
    children: ReactNode
    UniqueId: string
}

function MediumModel(props: MediumModelProps) {
  return (
    <>
    <input type="checkbox" id={props.UniqueId} className="modal-toggle" />
    <label htmlFor={props.UniqueId} className="modal cursor-pointer backdrop-blur-sm">
    <div className="modal-box w-1/2 max-w-5xl scrollbar-style-dark border border-base-300">
            {props.children}
        </div>
    </label>
    </>
  )
}

export default MediumModel