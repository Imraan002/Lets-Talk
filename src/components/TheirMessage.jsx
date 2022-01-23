const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
       <div>
         <div style={{fontSize:10,color:'blue',marginLeft:'150px'}}>
          {message.sender.username}
        </div>
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
        </div>
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            color: "white",
            backgroundColor: "#6e1973",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
            fontSize: 18
          }}
        > 
        <div style={{fontSize:10,color:'yellow'}}>
          {message.sender.username}
        </div>
          {message.text}
        </div>
      )}
    </div>
    
  );
};

export default TheirMessage;
