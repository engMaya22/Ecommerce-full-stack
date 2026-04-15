import styles from "./styles.module.css";
const { footerContainer } = styles;

const Footer = () => {
  return (
    <div className={footerContainer}>  Copyright {new Date().getFullYear()} ©{" "} Our eCom. All rights reserved.</div>
  );
};

export default Footer;
