import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TopTitle.css";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";

export default function TopTitle() {
  const { t } = useTranslation();
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="TopTitle">
        <div className="TopTitleText">
          <h1 className="text-title">
            {" "}
            {t("hero.1")} <br />{" "}
          </h1>
          <h1 className="text-title"> {t("hero.111")}</h1>
        </div>
      </div>
      <div className="area">
        <div className="breadcrumbs">
          <span className="showHere">{t("hero.11")}: </span>
          <a href="/" className="pathway">
            {t("hero.12")}
          </a>
          <div className="newspaper">
            <div>
              <Calendar onChange={onChange} value={value} />
              <span>
                Fire Alarm System คืออะไร
                ระบบเตือนอัคคีภัยคือระบบที่ประกอบด้วยอุปกรณ์จำนวนหนึ่งที่ทำงานร่วมกันเพื่อตรวจจับและเตือนคน
                อุปกรณ์ภาพ(Visual Appliance)และอุปรณ์เสียง(Audio Appliance)
                เมื่อเกิดเพลิงไหม้ไฟ เกิดก๊าซคาร์บอนมอนอกไซด์หรือเหตุฉุกเฉินอื่น
                ๆ
                สัญญาณเตือนเหล่านี้เกิดขึ้นโดยอัตโนมัติจากเครื่องตรวจจับควัน(Smoke
                Detector)และเครื่องตรวจจับความร้อน(Heat
                Detector)หรืออาจเกิดจากการใช้อุปกรณ์เตือนภัยด้วยมือเช่น Manual
                Call Pointหรือ Pull
                สัญญาณเตือนภัยอาจจะมาจากระฆัง(Bell)หรือหรือแตร(Strobe)
                นอกจากนี้อาจมาจากลำโพงสเตอริโอที่ส่งเสียงปลุกตามด้วยข้อความให้มีการอพยพ
                เสียงที่เตือนผู้คนภายในอาคารไม่ให้ใช้ลิฟท์
                เครื่องควบคุมสัญญาณเตือนไฟอาจตั้งไว้ที่ความถี่และเสียงที่แตกต่างกันรวมทั้งต่ำปานกลางและสูงขึ้นอยู่กับประเทศและผู้ผลิตอุปกรณ์
                ระบบสัญญาณเตือนภัยส่วนใหญ่ในยุโรปมีเสียงเหมือนไซเรนที่มีความถี่ที่สลับกันไปมา
                อุปกรณ์ป้องกันอัคคีภัยอิเล็กทรอนิกส์เรียกว่าแตร(Horn)ในประเทศสหรัฐอเมริกาและแคนาดาสามารถใช้อย่างต่อเนื่องหรือตั้งรหัสต่าง
                ๆ เช่นรหัส 3
                นอกจากนี้อุปกรณ์เตือนภัยไฟไหม้ยังสามารถตั้งค่าระดับเสียงต่างๆได้
                ระบบสัญญาณเตือนไฟไหม้ในสหราชอาณาจักรจะได้รับการทดสอบเป็นประจำทุกสัปดาห์ตามข้อกำหนด
                BS-fire 2013
              </span>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
