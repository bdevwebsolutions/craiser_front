# CRAISER - DAPP FUNDRAISING 
## OVERVIEW
---
### Components

    - banner    
        - Top component mostly jsx and styling
        -  Connect
            - Used to connect a wallet if not yet connected
            - Initiates listeners if a wallet was not previously connected
    
    - explorer
        - Normal nav 

---

### Context


    - ConnectionContext
        - Provides a getter and setter for the connected wallet
        - Initiates listeners if a wallet was previously connected
        

---

### Lib

    - Connector
        - Walletconnection instance
            - initiateConnection
                - function used to initiate the connection and listen to events for updating state
            - disbandConnection
                - function used to disband connection and clear state
    
    - WalletFunctions
        - No use

---

### Misc
    - Pages
        - Try to stay single page as much as possible for easier state management
    
    - Styles
        -Some global styles and a typscript color object

        ---
