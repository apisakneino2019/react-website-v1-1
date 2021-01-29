import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="area" style={{ maxWidth: "100%" }}>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-items">
            <h2>{t("footer.1")}</h2>
            <span>
              <a
                target="_blank"
                href="https://allweb.co.th/2019/%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%87.html"
              >
                {t("footer.2")} <br />
                {t("footer.3")} <br />
                {t("footer.4")}t <br />
                {t("footer.5")}
                <br />
                {t("footer.6")} <br />
                {t("footer.7")} <br />
                {t("footer.8")} <br />
                {t("footer.9")} <br />
                {t("footer.10")}
              </a>
            </span>
          </div>
          <div className="footer-link-items">
            <h2> {t("footer.11")}</h2>
            <span>
              {t("footer.12")} <br />{" "}
            </span>

            <span>{t("footer.13")}</span>

            <span>{t("footer.14")}</span>

            <span>
              {t("footer.15")}
              <br />
              {t("footer.16")}
            </span>
          </div>
          <div className="footer-link-items">
            <h2> {t("footer.17")} </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3136.904378559478!2d102.057141!3d14.957799000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x493fec817647dd10!2z4LiB4Lil4LmJ4Lit4LiH4Lin4LiH4LiI4Lij4Lib4Li04LiU4LmC4LiE4Lij4Liy4LiKIENDVFYgSVAgQ2FtZXJhIOC4quC4seC4jeC4jeC4suC4k-C4geC4seC4meC4guC5guC4oeC4oiDguKrguYHguIHguJnguJnguLTguYnguKfguKHguLfguK0g4LiE4Li14Lii4LmM4LiB4Liy4Lij4LmM4LiUIOC5hOC4oeC5ieC4geC4seC5ieC4meC4o-C4luC4ouC4meC4leC5jA!5e1!3m2!1sen!2sth!4v1608796503566!5m2!1sen!2sth"
              width={400}
              height={350}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
            <div className="map">
              <body>
                <tr>
                  <td>
                    <img
                      style={{ padding: "10px 10px" }}
                      src="/images-notifier/map.jpg"
                      alt="map"
                      width="100%"
                      height="auto"
                    />
                    <img
                      style={{ padding: "10px 10px" }}
                      src="/images-notifier/CodeQr.png"
                      alt="QR Code"
                      width="50%"
                      height="auto"
                    />
                    <tr>
                      <a
                        target="_blank"
                        href="https://line.me/R/ti/p/%40hua8211q"
                        aria-label="line"
                      >
                        <img
                          style={{ padding: "10px 10px" }}
                          src="/images-notifier/line.png"
                          alt="line"
                          width="50%"
                          height="auto"
                        />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/allwebtechnology/"
                        aria-label="Facebook"
                      >
                        <img
                          style={{ padding: "10px 10px" }}
                          src="/images-notifier/facebook.jpg"
                          alt="facebook"
                          width="50%"
                          height="auto"
                        />
                      </a>
                    </tr>
                  </td>
                </tr>
              </body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
