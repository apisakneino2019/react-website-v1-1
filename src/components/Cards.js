import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Cards() {
  const { t } = useTranslation();
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/img-v1/control.jpg"
              label={t("hero.5")}
              path="/test"
            />

            <CardItem
              src="/img-v1/annunciators.jpg"
              label={t("hero.6")}
              path="/test"
            />

            <CardItem
              src="/img-v1/devices.jpg"
              label={t("hero.7")}
              path="/test"
            />
          </ul>
        </div>

        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/img-v1/heatsmoke.jpg"
              label={t("hero.8")}
              path="/test"
            />

            <CardItem
              src="/img-v1/manual.jpg"
              label={t("hero.9")}
              path="/test"
            />

            <CardItem
              src="/img-v1/modules.jpg"
              label={t("hero.10")}
              path="/test"
            />
          </ul>
        </div>

        <div className="btn__btn">
          <Link to="/Test">
            <button class="button"> {t("hero.5")}</button>
            <button class="button"> {t("hero.6")}</button>
            <button class="button"> {t("hero.7")}</button>
            <button class="button"> {t("hero.8")}</button>
            <button class="button"> {t("hero.9")}</button>
            <button class="button"> {t("hero.10")}</button>
          </Link>
          {/* <h2 className="text-cards">
            ทำไมคุณถึงควรติดตั้งระบบ Fire Alarm ในอาคาร <br />
            การติดตั้ง Fire Alarm
            ก็เหมือนมีเจ้าหน้าที่ผู้เชี่ยวชาญด้านการแจ้งเตือนเหตุเพลิงไหม้
            คอยรักษาความปลอดภัยให้กับอาคารและผู้ที่อาศัยอยู่ในอาคารอยู่ตลอดเวลา
            เมื่อเกิดเหตุเพลิงไหม้การทำงานของระบบ Fire Alarm
            จะทำงานเพื่อส่งสัญญาณเตือนภัยให้ผู้ที่อยู่ในอาคารได้ทราบ
            เพื่อเตรียมการอพยพหรือระงับเหตุได้อย่างรวดเร็ว
            ทำให้ลดอัตราการสูญเสียทั้งชีวิตและทรัพย์สินจากเหตุเพลิงไหม้ได้มากขึ้น
            ถ้าคุณยังมีข้อสงสัยเพิ่มเติม เกี่ยวกับระบบ Fire Alarm
            หรือต้องวางแผนและติดตั้งระบบดับเพลิงในอาคารของคุณ ติดต่อเราได้ที่นี่
            เรามีผู้เชี่ยวชาญด้านระบบดับเพลิงที่คอยให้คำปรึกษากับคุณได้อย่างเต็มที่
          </h2> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
