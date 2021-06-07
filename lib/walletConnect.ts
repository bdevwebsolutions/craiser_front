import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import React from "react";

//WALLETCONTECTOR OBJECT
export const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
});

type Props = {
  
}


//Initialse a wallet connection
export const initiateConnection = async (setConnectionState: React.Dispatch<boolean>, setAddress: React.Dispatch<string>, setProvider: React.Dispatch<"walletconnect" | "metamask" | undefined>) => {
  
    // Check if connection is already established

    if (!connector.connected) {
      // create new session
      //connector.createSession();
      await connector.connect().then((res) => {
        setConnectionState(true);
        setAddress(res.accounts[0]);
        setProvider('walletconnect');
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
export const disbandConnection = (setConnectionState: React.Dispatch<boolean>, setAddress: React.Dispatch<string>, setProvider: React.Dispatch<"walletconnect" | "metamask" | undefined>) => {
  if(connector.connected){
      connector.killSession()
      setConnectionState(false);
      setAddress("");
      setProvider(undefined);
  }
}
