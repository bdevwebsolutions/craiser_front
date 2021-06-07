import React from 'react'

export const TooltipContext = React.createContext<Partial<{showToolTip: boolean, setShowToolTip: React.Dispatch<boolean>}>>({})

const ToolTipProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [showToolTip, setShowToolTip] = React.useState(true);

    React.useEffect(() => {
        if( document.documentElement.offsetWidth < 850 ) {
            setShowToolTip(false);
        } else {
            setShowToolTip(true);
        }
    }, [])

    return <TooltipContext.Provider value={{showToolTip, setShowToolTip}}>{children}</TooltipContext.Provider>
}

export default ToolTipProvider;