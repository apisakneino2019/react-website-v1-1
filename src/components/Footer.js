import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
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
            <h2>About Us</h2>
            {/* <Link to="">Customer Us</Link>
            <Link to="">Testimonials</Link>
            <Link to="">Careers</Link>
            <Link to="">Investors</Link>
            <Link to="">Terms of Service</Link> */}
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <span> บริษัท ออลล์โซลูชั่นส์เทค จำกัด / ALL SOLUTIONS TECH CO.,LTD.
                ที่อยู่ : 47/316 ถ.ป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี 11120    47/316 Poppular Rd., Ban Mai, Pak Kret, Nonthaburi 11120  (สำนักงานใหญ่) 
                 ที่อยู่ : 3279/25 ถ.สืบศิริ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000     3279/25 Suebsiri Rd., T.Nimueng, A.Mueng, NakhonRatchasima, Thailand 30000 (สำนักงานนครราชสีมา) 
                โทรศัพท์/แฟ็กซ์ 02-012-3795 / 065-969-3552  Tel./Fax. +662-012-3795 Mobile:+665-969-3552   Email: ast.allsolutionstech@gmail.com
                สอบถามข้อมูลเรื่องกล้องวงจรปิด, จำหน่ายกล้องวงจรปิด, เครื่องสแกนลายนิ้วมือ,>สัญญาณกันขโมยบ้าน, ตู้สาขาโทรศัพท์, วางระบบ Network,
                 ติดตั้งประตู AutoDoor, แผงไม้กัน, วางระบบ CarPark, ออกแบบระบบขายหน้าร้าน POS ระบบซื้อมาขายไป ระบบจ่ายเงินเดือน และอีกมากมาย</span>
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
            {/* <Link to="">Instagram</Link>
            <Link to="">Facebook</Link>
            <Link to="">Youtube</Link>
            <Link to="">Twitter</Link> */}
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
              to=""
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
