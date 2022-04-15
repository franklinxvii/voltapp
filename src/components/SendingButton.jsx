import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";



function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  function SendingButton() {
    const [isSending, setSending] = useState(false);
  
    useEffect(() => {
      if (isSending) {
        simulateNetworkRequest().then(() => {
          setSending(false);
        });
      }
    }, [isSending]);
  
    const handleClick = () => setSending(true);
  
    return (
      <Button
        variant="primary"
        disabled={isSending}
        onClick={!isSending ? handleClick : null}
      >
        {isSending ? 'Envoi…' : 'Envoyer le rapport'}
      </Button>
    );
  }

  export default SendingButton;