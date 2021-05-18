import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

export const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
});


//Initialse a wallet connection
export const initiateConnection = (dispatch) => {
  
    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession();
    }
    
    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
      if (error) {
        console.log(error);
      }
      dispatch(payload.params[0]);
    });
    
    connector.on("session_update", (error, payload) => {
      if (error) {
        console.log(error);
      }
    
      // Get updated accounts and chainId
      dispatch(payload.params[0]);
    }); 
    
    connector.on("disconnect", (error, payload) => {
      if (error) {
        console.log(error);
      }
    
      // Delete connector
      dispatch({});
    });
}

//Disband a wallet connection
export const disbandConnection = (dispatch) => {
  if(connector.connected){
      connector.killSession()
      dispatch({});
  }
}