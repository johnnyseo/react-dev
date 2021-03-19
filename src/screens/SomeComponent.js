import React from 'react'

export default function SomeComponent({match}) {    
    return (
        <>
        <div>
            this is some component
            
        </div>
        <div>
            this is someInfo : {match.params.someInfo}
        </div>
        </>
    )
}
