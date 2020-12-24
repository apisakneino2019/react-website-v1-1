import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <h1>about us</h1>
      <section className="footer-subscription">
        <img
          src="/images-all/logo-1.png"
          alt="logo"
          height="auto"
          width="25%"
        />
        <p className="footer-subscription-heading">
          มากกว่าสิบปี ที่ ออลล์เว็บ เทคโนโลยี่
          ได้บริหารและพัฒนาระบบงานอย่างต่อเนื่องเพื่อมุ่งมั่นพัฒนาสินค้าและงานบริการของเราอย่างสร้างสรรค์
          พร้อมกับตอบสนองความต้องการของลูกค้าต่อไป
          โดยเราได้รับความไว้วางใจจากลูกค้า ต้องอาศัยหลักการทำงานที่ว่า
          “ความซื่อสัตย์ คือ คุณธรรมของเรา” นี่เป็นบทพิสูจน์ได้ว่า ออลล์เว็บ
          เทคโนโลยี่
          จะอยู่เคียงข้างคุณในด้านผู้ให้บริการอย่างมีคุณภาพตราบนานเท่านาน
          ออลล์เว็บ เทคโนโลยี่
          ได้ให้บริการดูแลระบบงานสารสนเทศของสำนักงานทั้งหมดแบบครบวงจร อาทิเช่น
          ออกแบบสร้างเว็บไซต์ ด้วยการดีไซน์ที่สวยงาม ทันสมัยและน่าเชื่อถือ
          เหมาะกับทุกท่านที่อยากมีเว็บไซต์เป็นของตัวเอง สามารถนำเว็บไซต์ของท่าน
          ไปใช้ประโยชน์ได้ในหลายรูปแบบ
          เราพร้อมจะนำพาธุรกิจของท่านไปสู่โลกของพาณิชย์อิเล็คทรอนิกส์
          ขอเพียงความไว้วางใจให้เราเป็นผู้ให้บริการ,ผู้ให้คำปรึกษา,ผู้ออกแบบ(webdesign)
          และเป็นผู้ที่เดินเคียงข้างท่านเข้าสู่โลก world wide Marketing
          เรามีทีมงานที่จะวิเคราะห์ความต้องการและแก้ไขปัญหาจากระบบงานเดิม,การจัดการด้าน
          Network เพื่อเพิ่มประสิทธิภาพในการทำงานได้อย่างรวดเร็ว
          เพิ่มเติมช่องทางการทำธุรกิจโดยการจัดทำ Search Engine Optimization หรือ
          SEO เป็นกระบวนการพัฒนาเว็บไซต์
          เพื่อเพิ่มประสิทธิภาพให้กับเว็บไซต์ของท่านสำหรับการค้นหาผ่าน Search
          Engine เช่น
          Google,Yahooโดยการใช้คีย์เวิร์ดในการค้นหาเว็บไซต์ให้ท่านได้อย่างรวดเร็ว
          และ มีประสิทธิภาพมากยิ่งขึ้น
        </p>
        <p className="footer-subscription-text">
          Total security Systems & IT Solutions, Secutech Service Center Total
          Cards &Payments, Designs & Consulting Solutions CCTV/IP Camera &
          Surveillance, Finger Scan, Access Control, Alarm Home & Office
          Automation, E-Home/intelligence & Building, Security System Solution,
          Systems & Solutions for Financial & Banking. Fire & Safety, Safety
          Equipments, Emergency & Rescue Equipments, Police &Person Equipments
          PABX, Fiber Optic, Wi-Fi, Network, LAN, Cabling Network, Server &
          Storage, IT infrastructure, Systems & Equipments for IT Information.
          Audio-Video Systems, Digital ID, POS, Barcode & RFID Solution
          Management Software, Key Components, IT Outsource, Sub-Contractor, MA,
          PM, etc.
        </p>
        {/* <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Fire alarm system</h2>
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
            <h2>Contact Us</h2>
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

            {/* <Link to="">Contact</Link>
            <Link to="">Support</Link>
            <Link to="">Destinations</Link>
            <Link to="">Sponsorships</Link> */}
          </div>
        </div>
        <div className="footer-link-wrapper">
          {/* <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="">Submit Video</Link>
            <Link to="">Ambassadors</Link>
            <Link to="">Agency</Link>
            <Link to="">Influencer</Link>
          </div> */}
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3136.904378559478!2d102.057141!3d14.957799000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x493fec817647dd10!2z4LiB4Lil4LmJ4Lit4LiH4Lin4LiH4LiI4Lij4Lib4Li04LiU4LmC4LiE4Lij4Liy4LiKIENDVFYgSVAgQ2FtZXJhIOC4quC4seC4jeC4jeC4suC4k-C4geC4seC4meC4guC5guC4oeC4oiDguKrguYHguIHguJnguJnguLTguYnguKfguKHguLfguK0g4LiE4Li14Lii4LmM4LiB4Liy4Lij4LmM4LiUIOC5hOC4oeC5ieC4geC4seC5ieC4meC4o-C4luC4ouC4meC4leC5jA!5e1!3m2!1sen!2sth!4v1608796503566!5m2!1sen!2sth"
              width={600}
              height={450}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="" className="social-logo">
              <img src="/images/allweb.png" alt="" width="50%" height="auto" />
              {/* <i class="fab fa-typo3" /> */}
            </Link>
          </div>
          <small class="website-rights">Allweb © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/test"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/test"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/test"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/test"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/test"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
