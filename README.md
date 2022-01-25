### 25/1/2022

- [Backend] Xây dụng model Document cho Tổ chức - Doing
- [Backend] Cung cấp API thêm student vào lớp học - Doing
- [Backend] API Đăng ký tài khoản học viên - Done
- [Backend] API xác thực tài khoán học viên qua email - Done

### 24/1/2022

- Làm task được giao
- [Backend] Gửi email xác thực tài khoản học viên

### 23/1/2022

- Chuan bi cho ngay mai di lam: Chan, case pc, chuot eblue EMS146 PRO.

### 22/1/2022

- Cai win 11, mua 1 con chuot eblue, 1 use kignston 32G va 1 cai chan 4xxk - Done
- Ngay dau hoc khoa hoc online nodejs - typescript - graphql- mongodb tai ITHOUSE do anh Duong day

### 21/1/2022

- DM cà phê Phố gói uống như loz, uống cà phê Trung Nguyên loại I tỉnh ngủ cả ngày :||||||
- Source code: smart loyalty SHB
- [Backend] Bổ sung fiedd posId cho model member - Done
- [Backend] Bổ sung fiedd posId cho model user - Done
- [Backend] Bổ sung fiedd posId cho model activity - Done

### 20/1/2022

- Buy pc with CPU AMD 5700g, 32g RAM DDR4 Gskill, 500G SSD Samsung 970 EVO Plus, PSU 550W Corsair, Case Golden Field, Mainboard B550 Aorus -> Done
- Tiep tuc lam task export file excel -> Doing

### 19/1/2022

- Tiếp tục làm task của mình
- Học MONGODB (https://www.youtube.com/watch?v=udwFO6f7Vyo&list=PLWkguCWKqN9PbQhhsrewFd3TPuo3kLPQ1&index=21)

- sort({index:-1}) -> skip(10) -> limit(10)
- .find({})
- count()

- batchSize(100) - lay hang theo kích thước lô

### 18/1/2022

- Ve so do exportMemberBySegment.route
- ROBO MONGO connect to url database -> on TLS tab:
  -- Check Use TLS protocol
  -- Authentication method - Self-signed Certificate
- Viet bao cao thuc tap doanh nghiep -DOing
- Ve so do he thong backend smart royalty -Doing
- graphql
  -- modules
  -- context.ts
  -- helper.ts
  --- ../helpers/redis.ts
  -- index.ts
  --- ../configs.ts
  --- ./context.ts
  --- ../loaders/logger.ts
  --- ../helpers/common.ts

### 17/1/2022

- Hôm nay ngồi chơi, chả làm cái mẹ gì cả
- Tiep tuc viet bao cao va nhat ky thuc tap doanh nghiep - Doing
- Mcom: admin - ZTEGCE55DEDC

### 16/1/2022

- Cong chung so yeu ly lich - Doing

### 15/1/2022

- Di photo va ghi don xin viec va so yeu ly lich(can co cong chung) -DOing-Mai lam
- Bang cap dang co - DOne
- CHung minh nhan dan - Done
- So ho khau / So tam tru - Done
- Giay kham suc khoe - Done
- Anh 3x4 - Done

### 14/1/2022

-
- File: testCalculateSummary.test.ts
- 1: Dau tien la start date va end date
- 2: filter bao gom: start date, end date, month, year, myear
- 3: queue (hàng đợi): la 1 object co kieu du lieu la BeeQueue
- 4: batch async (ko đồng bộ hàng loạt):
- 5: select("\_id code accountDate"): Chỉ định các trường tài liệu sẽ bao gồm hoặc loại trừ (còn được gọi là truy vấn "phép chiếu")
- 6: cursor(): để lấy dữ liệu theo kiểu phân trang, mỗi lần lấy 1 record (https://www.geeksforgeeks.org/how-does-query-prototype-cursor-work-in-mongoose/)
-
- Test tu thang 1 -> 12
- Chay script tính dữ liệu tháng trong file testCalculateSummary.test.ts
- Co gang hoan thanh 2 task fix bug aum trong hom nay - Done

### 13/1/2022

- Hoc graphql - Done

### 12/1/2022

- Member code: MB100000026
  -- Vòng quay tài sản =
  SUM(GIÁ TRỊ KHỚP LỆNH trong tháng)
  / AVG(AUM trong tháng)

-- GIÁ TRỊ AUM (AUM data): 110 .NGÀY AUM: full
-- count AUM: 2
-- GIÁ TRỊ KHỚP LỆNH (filled value data): 1_010 .NGÀY KHỚP LỆNH: full

-- CHỈ SỐ VÒNG QUAY TÀI SẢN (AUM): 0 <-> Expect: 1_010/(110/2)=18.363636363636363
------- THÁNG: full

- Co ve da fix dc bug
  -- $gte: new Date(timeRange.$gte),
  $lte: new Date(timeRange.$lte),
- SU dung mongodump de export database va mongorestore de import database
- Hoan thien nhat ky thuc tap - Processing
- Tiep tuc fix bug aum
- Xin chu ky va dau moc cho thang lon Long - De khi khac lam

### 11/1/2022

- Dit cu mày thang lon, nhin cc
- Find list of all products sold
  -- db.purchase_orders.aggregate(
  [
  ]
  )

```javascript
db.purchase_orders.distinct("product");
db.purchase_orders.count({ product: "toothbrush" });
db.purchase_orders.insertMany();
```

```javascript
[
  { product: "toothbrush", total: 4.75, customer: "Mike" },
  { product: "guitar", total: 199.99, customer: "Tom" },
  { product: "milk", total: 11.33, customer: "Mike" },
];
```

### 6/1/2022

- Install android studio: https://vitux.com/how-to-install-android-studio-on-ubuntu-20-04/

### 5/1/2022

- Tim dc cong viec thong qua fb https://www.facebook.com/groups/224105692857136/posts/347369943864043/?comment_id=360896765844694&reply_comment_id=360903432510694&notif_id=1641302255425104&ref=notif&notif_t=group_comment_mention
- Pass pv cty MCOM vs muc luong 7tr, 2 thang dau thu viec 85%
