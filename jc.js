function checkAge() {
    // ดึงค่าที่ผู้ใช้กรอก
    const age = document.getElementById("age").value;

    // ตรวจสอบว่าอายุถึงเกณฑ์หรือไม่
    if (age >= 18) {
        document.getElementById("result").innerHTML ="  <button onclick=\"window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';\">ທ່ານກົງກັບເງື່ອນໄຂ click me!!</button>"
    } else {
        document.getElementById("result").innerHTML = "ອາຍຸຂອງທ່ານຍັງບໍ່ຕົງກັບເງື່ອນໄຂ ກະລຸນາລໍຖ້າຈົນກວ່າອາຍຸຂອງທ່ານຈະເຖິງ 18 ປີ";
    }
}
