import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>ระบบอื่นๆที่เกี่ยวข้อง</h2>
            <span>
              ระบบป้องกันอัคคีภัย CL <br />
              ระบบป้องกันอัคคีภัย CL <br />
              ระบบป้องกันอัคคีภัย Notifier <br />
              ระบบป้องกันอัคคีภัย Vigilant
              <br />
              อุปกรณ์ Smoke <br />
              แบบใส่ถ่าน อุปกรณ์ป้องกันการระเบิด EX
              <br />
              อุปกรณ์ทดสอบ Fire Alarm <br />
              อุปกรณ์ System Sensor
              <br /> ระบบป้องกันอัคคีภัย GE
              <br />
              ระบบป้องกันอัคคีภัย NOHMI
            </span>
          </div>
          <div class="footer-link-items">
            <h2>ติดต่อเรา</h2>
            <span>
              บริษัท ออลล์โซลูชั่นส์เทค จำกัด <br /> ALL SOLUTIONS TECH CO.,LTD.
            </span>
            <br />
            <span>
              ที่อยู่ : 47/316 ถ.ป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี 11120
              <br />
              47/316 Poppular Rd., Ban Mai, Pak Kret, Nonthaburi 11120
              (สำนักงานใหญ่)
            </span>
            <br />
            <span>
              ที่อยู่ : 3279/25 ถ.สืบศิริ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000
              <br />
              3279/25 Suebsiri Rd., T.Nimueng, A.Mueng, NakhonRatchasima,
              Thailand 30000 (สำนักงานนครราชสีมา)
            </span>
            <br />
            <span>
              โทรศัพท์/แฟ็กซ์ 02-012-3795 / 065-969-3552
              <br /> Tel./Fax. +662-012-3795 Mobile:+665-969-3552 <br />
              Email: ast.allsolutionstech@gmail.com
            </span>
            <br />
            <span>
              สอบถามข้อมูลเรื่องกล้องวงจรปิด, จำหน่ายกล้องวงจรปิด,
              เครื่องสแกนลายนิ้วมือ,สัญญาณกันขโมยบ้าน, ตู้สาขาโทรศัพท์, วางระบบ
              Network, ติดตั้งประตู AutoDoor, แผงไม้กัน, วางระบบ CarPark,
              ออกแบบระบบขายหน้าร้าน POS ระบบซื้อมาขายไป ระบบจ่ายเงินเดือน
              และอีกมากมาย
            </span>
          </div>

          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>แผนที่ ออลล์เว็บ เทคโนโลยี </h2>
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
                        width="50%"
                        height="auto"
                      />
                      <img
                        style={{ padding: "10px 10px" }}
                        src="/images-notifier/CodeQr.png"
                        alt="QR Code"
                        width="50%"
                        height="auto"
                      />
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
                      <br />
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
                    </td>
                  </tr>
                </body>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-link-items">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="" className="social-logo">
              <img src="/images/allweb.png" alt="" width="50%" height="auto" />
              {/* <i class="fab fa-typo3" /> */}
            </Link>
          </div>

          <div class="social-icons">
            <a
              target="_blank"
              href="https://www.facebook.com/allwebtechnology/"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f  fa-2x" />
            </a>
            <a
              target="_blank"
              href="https://line.me/R/ti/p/%40hua8211q"
              aria-label="line"
            >
              <i class="fab fa-line  fa-2x" />
            </a>
            <a
              target="_blank"
              href="https://allweb.co.th/"
              aria-label="mainwebsite"
            >
              <i class="fa fa-globe fa-2x " aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
