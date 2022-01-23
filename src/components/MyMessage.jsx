


const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
      return (
        <>
        <div style={{float: 'right', marginRight: '18px', color: 'white'}}>
        <div style={{marginLeft:'100px',fontSize: 10,color: 'black'   }}>
        {message.sender.username}</div>
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
        </div>
        </>
      );
    }
  
    return (
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: "#065f9e", fontSize: 18 }}>
        <div style={{fontSize: 10,color: 'orange'  }}>
        {message.sender.username}</div>
        {message.text}   
      </div>
    
    );
  };
  
  export default MyMessage;
  