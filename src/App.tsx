import React, { useState } from 'react'
import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Map from './images/map.png'
import Yuuji from './images/yuuji.jpg'
import Nobara from './images/nobara.jpg'
import Megumi from './images/megumi.jpg'
import Satoru from './images/satoru.jpg'

function App() {
  const [isToggle, setToggle] = useState(false)

  return (
    <div className="App">
      <nav className="navbar">
        <a href="#">เกี่ยวกับหมอหมึก</a>
        <a href="#">บทความ</a>
        <a href="#">จองคิว</a>
        <button onClick={() => setToggle(!isToggle)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      {isToggle ? (
        <nav className="navbar_toggled">
          <a href="#">เกี่ยวกับหมอหมึก</a>
          <a href="#">บทความ</a>
          <a href="#">จองคิว</a>
        </nav>
      ) : null}
      <div className="content">
        <section className="title">
          <h1>หมอหมึก</h1>
          <p>ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ</p>
          <button onClick={() => alert('What is this?')}>จองคิว</button>
        </section>
        <section className="about">
          <img src={Satoru} alt="image" className="image_mobile"/>
          <div className="content">
            <h3>ประวัติหมอหมึก</h3>
            <p>หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วย ลูกแก้วพยากรณ์ ไพ่ทาโร่ และการดูลายลือ</p>
            <p>
              ด้วยความสามารถที่หลากหลาย
              ทำให้หมอหมึกสามารถเลือกวิธีทำนายที่เหมาะกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
            </p>
          </div>
          <img src={Satoru} alt="image" className="image"/>
        </section>
        <section className="review">
          <h3>รีวิวจากลูกค้า</h3>
          <div className="content">
            <div className="user">
              <img src={Yuuji} alt="image" className="image"/>
              <p className="review_name">แมทธิว นักธุรกิจ</p>
              <p className="review_content">
                หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ
              </p>
            </div>
            <div className="user">
              <img src={Nobara} alt="image" className="image"/>
              <p className="review_name">แมทธิว นักธุรกิจ</p>
              <p className="review_content">
                ต้องขอขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ
              </p>
            </div>
            <div className="user">
              <img src={Megumi} alt="image" className="image"/>
              <p className="review_name">แมทธิว นักธุรกิจ</p>
              <p className="review_content">
                ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา
              </p>
            </div>
          </div>
        </section>
        <section className="contact">
          <img src={Map} alt="map" className="map" />
          <div className="content">
            <h3>ทำนายชะตากับหมอหมึก</h3>
            <p>
              สามารถจองคิวได้ในเว็บหรือ <br />
              อีเมล: octopus_fortune@teller.com
              <br />
              โทรศัพท์: 099 XXXX XXX
              <br />
              และมาที่สำนักที่
              <br />
              ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บเขตอินเตอร์เน็ต กรุงเทพ 99999
              <br />
              ตามเวลาที่นัดไว้
            </p>
            <p>
              จำกัด 10 คิวต่อหนึ่งวัน เปิดทำการ
              <br />
              10.00 - 18.30 น. พัก 12.00 - 13.00
              <br />
              เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
            </p>
          </div>
          <img src={Map} alt="map" className="map_mobile" />
        </section>
      </div>
    </div>
  )
}

export default App
