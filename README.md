### 18/1/2022

- Viet bao cao thuc tap doanh nghiep -DOing
- Ve so do he thong backend smart royalty -Doing

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

-- db.purchase_orders.distinct("product")
-- db.purchase_orders.count({product: "toothbrush"})
-- db.purchase_orders.insertMany(
[
{product: "toothbrush", total: 4.75, customer: "Mike"},
{product: "guitar", total: 199.99, customer: "Tom"},
{product: "milk", total: 11.33, customer: "Mike"},
]

### 6/1/2022

- Install android studio: https://vitux.com/how-to-install-android-studio-on-ubuntu-20-04/

### 5/1/2022

- Tim dc cong viec thong qua fb :https://www.facebook.com/groups/224105692857136/posts/347369943864043/?comment_id=360896765844694&reply_comment_id=360903432510694&notif_id=1641302255425104&ref=notif&notif_t=group_comment_mention
- Pass pv cty MCOM vs muc luong 7tr, 2 thang dau thu viec 85%
