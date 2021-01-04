import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h2 className="text-cards">
        ทำไมคุณถึงควรติดตั้งระบบ Fire Alarm ในอาคาร
      </h2>
      <h1 className="text-card">
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
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/img-v1/control.jpg"
              text="เพิ่มเติม"
              label="แผงควบคุมสัญญาณเตือนไฟไหม้"
              path="/test"
            />
            <div>
              <h5>โมดูลสัญ</h5>
            </div>
            <CardItem
              src="/img-v1/annunciators.jpg"
              text="เพิ่มเติม"
              label="เครื่องแจ้งเตือนไฟไหม้"
              path="/test"
            />
            <div>
              <h5>โมดูลสัญ</h5>
            </div>
            <CardItem
              src="/img-v1/devices.jpg"
              text="เพิ่มเติม"
              label="อุปกรณ์แจ้งเตือน"
              path="/test"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/img-v1/heatsmoke.jpg"
              text="เพิ่มเติม"
              label="เครื่องตรวจจับความร้อนและควัน"
              path="/test"
            />
            <div>
              <h5>โมดูลสัญ</h5>
            </div>
            <CardItem
              src="/img-v1/manual.jpg"
              text="เพิ่มเติม"
              label="คู่มือการแจ้งเหตุเพลิงไหม้สถานี"
              path="/test"
            />
            <div>
              <h5>โมดูลสัญ</h5>
            </div>
            <CardItem
              src="/img-v1/modules.jpg"
              text="เพิ่มเติม"
              label="โมดูลสัญญาณเตือนไฟไหม้"
              path="/test"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
