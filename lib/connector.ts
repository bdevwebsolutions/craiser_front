import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import React from "react";

//WALLETCONTECTOR OBJECT
export const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
});


//Initialse a wallet connection
export const initiateConnection = async (setConnectionState: React.Dispatch<boolean>) => {
  
    // Check if connection is already established

    if (!connector.connected) {
      // create new session
      //connector.createSession();
      await connector.connect().then((res) => {
        setConnectionState(true);

            // Subscribe to connection events
        connector.on("connect", (error, payload) => {
          if (error) {
            console.log(error);
          }
          
        });
        
        connector.on("session_update", (error, payload) => {
          if (error) {
            console.log(error);
          }

        }); 
        
        connector.on("disconnect", (error, payload) => {
          if (error) {
            console.log(error);
          }

        });
      }).catch(err => {
        console.error(err);
        location.reload();
        
      })
    
    }
}

//Disband a wallet connection
export const disbandConnection = (setConnectionState: React.Dispatch<boolean>) => {
  if(connector.connected){
      connector.killSession()
      setConnectionState(false);
  }
}
