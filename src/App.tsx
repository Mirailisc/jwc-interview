import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#">เกี่ยวกับหมอหมึก</a>
        <a href="#">บทความ</a>
        <a href="#">จองคิว</a>
      </nav>
      <div className="content">
        <section className="title">
          <h1>หมอหมึก</h1>
          <p>ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ</p>
          <button onClick={() => alert("What is this?")}>จองคิว</button>
        </section>
        <section className="about">
          <div className="content">
          <h3>ประวัติหมอหมึก</h3>
          <p>หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วย ลูกแก้วพยากรณ์ ไพ่ทาโร่ และการดูลายลือ</p>
          <p>ด้วยความสามารถที่หลากหลาย ทำให้หมอหมึกสามารถเลือกวิธีทำนายที่เหมาะกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด</p>
          </div>
          <div className="image"></div>
        </section>
        <section className="review">
          <h3>รีวิวจากลูกค้า</h3>
          <div className="content">
            <div className="user">
              <div className="image"></div>
              <p className="review_name">แมทธิว นักธุรกิจ</p>
              <p className="review_content">
                หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลยตอนนี้ขายดีเทน้ำเทท่าเลยครับ
              </p>
            </div>
            <div className="user">
              <div className="image"></div>
              <p className="review_name">แมทธิว นักธุรกิจ</p>
              <p className="review_content">
                หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลยตอนนี้ขายดีเทน้ำเทท่าเลยครับ
              </p>
            </div>
            <div className="user">
              <div className="image"></div>
              <p className="review_name">แมทธิว นักธุรกิจ</p>
              <p className="review_content">
                หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลยตอนนี้ขายดีเทน้ำเทท่าเลยครับ
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
