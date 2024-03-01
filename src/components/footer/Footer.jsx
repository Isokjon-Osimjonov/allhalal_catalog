import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li
          onClick={() => {
            window.location.href = `tel: +82 10-7531-9153`;
          }}
        >
          +82 10-7531-9153
        </li>
        <li
          onClick={() => {
            window.location.href = `tel: +82 10-6706-0757`;
          }}
        >
          +82 10-6706-0757
        </li>
        <li>
          <a href="https://t.me/daejeonhalal"> Telegram</a>
        </li>
        <li>
          <a href="https://kko.to/iPG5MZDuim"> Kakao map</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
