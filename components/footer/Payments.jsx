import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCPET</h3>
      <div className={styles.footer__flexwrap}>
        <image src="../../../images/payments/visa.webp" alt="" />
        <image src="../../../images/payments/mastercard.webp" alt="" />
        <image src="../../../images/payments/paypal.webp" alt="" />
      </div>
    </div>
  );
}