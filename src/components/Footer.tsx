import styles from "css/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerIcon}>
         
         
        </div>
        <div className={styles.footerDetails}>
          <p>
          <svg className={styles.footerCode} aria-hidden="true" focusable="false" data-prefix="far" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z" ></path></svg>
          {" "} with {" "}
          ❤️ {" "} by {" "} <a href="https://github.com/MaiaVinicius/maiavinicius.me">MaiaVinicius</a>
          {" "} © 2023
          </p>
          <p>
            Built with {" "} React • Hosted on <a href="netlify.com">Netlify</a> • Code on <a href="https://github.com/MaiaVinicius/maiavinicius.me">Github</a>.
          </p>

          <div>

          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}
          >
            LinkedIn
          </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
