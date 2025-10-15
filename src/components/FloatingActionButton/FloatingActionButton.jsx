import whatsAppIcon from '../../assets/svgs/whatsApp.svg';
import messageIcon from '../../assets/svgs/message.svg';
import './FloatingActionButton.css';

const FloatingActionButtons = ({ onClickSend }) => {
  return (
    <div className="fab-container">
      <button className="fab-whatsApp-icon" onClick={onClickSend} title="Send">
        <img
          src={whatsAppIcon}
          alt="WhatsApp icon"
          className="whatsApp-icon"
        />
      </button>
      <button className="fab-message-icon" onClick={onClickSend} title="Send">
        <img
          src={messageIcon}
          alt="Message icon"
          className="message-icon"
        />
      </button>
    </div>
  );
};

export default FloatingActionButtons;
