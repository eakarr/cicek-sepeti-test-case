const FooterText = (props) => {
  const { text, styles } = props;
  return <p className={styles}>{text}</p>;
};

export default FooterText;
