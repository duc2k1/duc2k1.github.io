### 25/5/2022
- FBI :
- Tài khoản outlook: Cntt8@fbilogistics.vn - 3WpV#UFrcVXX 
### 25/4/2022

- Chính thức được nếm mùi đời - Officially taste life

### 17/4/2022

- when are you planning to revise the schedule?
- Hi, jorge. How's preparation coming along for the new sculpture exhibit?
- Well, we're a little bit behind acctually... the Museum of Plastic Arts is loaning us several sculptures, but the shipment's been delayed.
- Oh, no. Is there any way I can help/
- Well... the rest of the sculptures should be here this afternoon, and this the list of things that still need ti get done
- Hmmm.... how about you finish setting up the final pieces, and I'll upload photographs of the completed displays to our Web site
- That'd be great - thanks.
- Where does the conversation most like take place?
- At a museum
- What problem does the man mention
- A shipment is late
- What will the woman most likely do next
- Upload some images

### 9/4/2022

```
string? username = Console.ReadLine();
int? age = int.TryParse(Console.ReadLine(), out int result) ? result : (int?)null;

Username:
Age:
Info user: ,
```

- int: co dau, 32 bit
- sbyte: co dau, 8 bit
- byte: ko dau, 8 bit
- short: co dau, 16 bit
- ushort: ko dau, 16 bit
- long: co dau, 64 bit
- ulong: ko dau, 64 bit
- float: so thuc cham dong, 32 bit, ex: 1.1f
- double: so thuc cham dong, 64 bit
- decimal: so thuc cham dong, 128 bit, ex: 1.1m
- char: 1 ky tu, 16 bit
- bool: true/false
- string: chuoi
- object: kieu co so - moi doi tuong deu ke thua tu object

```c#
int.Parse("") -> Unhandled exception. System.FormatException: Input string was not in a correct format.
string? username = null;
float a = 1.1f;
decimal b = 1.1m;
```

```c#

```

### 8/4/2022

- Dear Ms.Wilson
- I hope this email finds you well
- With reference to our previous meeting. I would like to send you the quotation of our fingerprint door locks
- The prices of all models are stated in the detailed quotation attached below
- With reference to our previous meeting. I would like to send you the quotation of our fingerprint door locks
- The prices of all models are stated in the detaild quotation attached below
- For further information, please contact me via email or at 0326861356
- I'm looking goward to hearing from you
- Thanks
- Yours truly
- How are you? How are you doing? How are things? How have you been?
- Thank you for contacting ABC company
- Thank you for your prompt reply
- Thank you for getting back to me
- Dear Accounting Department
- Dear Marketing Team and HR team
- Personal details
- Carrer Objective
- Education and Qualifications
- Work Experience
- Interests
- Achievements
- Skills
- References
- ✍️ Ngay cuoi cung di lam o MCOM

### 5/4/2022

- C# in Visual Studio Code: cw + tab -> System.Console.WriteLine
- C# in Visual Studio: cw + tab -> Console.WriteLine

- Kinh nghiệm chuyên môn từ 4 tháng trở lên về .Net, Entity Framework, LINQ,
- Nắm vững kiến thức basic +OOP, .Net core MVC.

### 4/4/2022

```c#
    int iMax = int.MaxValue;// 2147483647
    int iMin = int.MinValue;// -2147483648
    int iWhat = iMax + 1;// -2147483648

    decimal deMax = decimal.MaxValue;//  79228162514264337593543950335
    decimal deMin = decimal.MinValue;// -79228162514264337593543950335
    decimal deWhat = deMax + 1;// System.OverflowException: 'Value was either too large or too small for a Decimal.'
```

- ㊗️ Learn C#

### 30/3/2022

- ✨ OOP Javascript

### 25/3/2022

```js
context.allow("read", "Address"); // All record in Address table can be read

const doc = await addressService.findOne({ _id: id });
context.allow("read", doc); // Record has id: id can be read
```

### 23/3/2022

```js
async function sendNotificationToCustomer(
  customerId: string,
  statusMsg: string
) {
  try {
    const notify = new NotificationBuilder(
      `Kết quả kết nối tài khoản momo`,
      statusMsg
    ).sendTo(NotificationTarget.CUSTOMER, customerId);
    await InsertNotification([notify.build()]);
  } catch (err) {
    logger.error(`Lỗi khi gửi thông báo cho khách hàng`, err);
  }
}
```

```json
{
  "editor.inlineSuggest.enabled": true,
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontFamily": "Fira Code",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "git.enableSmartCommit": true,
  "turboConsoleLog.includeFileNameAndLineNum": false,
  "turboConsoleLog.insertEnclosingClass": false,
  "turboConsoleLog.insertEnclosingFunction": false,
  "turboConsoleLog.delimiterInsideMessage": "",
  "workbench.iconTheme": "material-icon-theme",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.referencesCodeLens.enabled": true,
  "typescript.referencesCodeLens.enabled": true,
  "workbench.colorTheme": "Andromeda Colorizer",
  "editor.renderLineHighlight": "none",
  "breadcrumbs.enabled": false,
  "editor.guides.indentation": false,
  "turboConsoleLog.logMessagePrefix": "👌",
  "editor.renderWhitespace": "none",
  "editor.minimap.enabled": false,
  "editor.renderControlCharacters": false,
  "github.copilot.enable": {
    "*": true,
    "yaml": true,
    "plaintext": true,
    "markdown": true
  },
  "editor.suggestSelection": "recentlyUsed"
}
```

### 21/3/2022

- Gpsmart: login in with admin account

- await globalCustomer.updateOne({ $set: { "context.lastLoginAt": new Date() } }); -> ko can save

- ISODate("2022-03-21T04:08:44.039Z")

```json
{
  "data": {
    "loginGlobalCustomerByPhone": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiR0xPQkFMQ1VTVE9NRVIiLCJfaWQiOiI2MjM3ZjQwNjI4NjBiMDQ2YTAzZDQ4ZjYiLCJ1c2VybmFtZSI6IiIsImlhdCI6MTY0NzgzNTcyNCwiZXhwIjoxNjUwNDI3NzI0fQ.XBd695bKSi-bV4NBEC4EmxMR21Q9SaVGX8GK7FzW1FM"
    }
  }
}
```

```js
👌 ~ context Context {
  meta: {},
  isAuth: true,
  isTokenExpired: false,
  memberCode: undefined,
  campaignCode: undefined,
  collaboratorId: undefined,
  xPageId: undefined,
  xPsId: undefined,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJfaWQiOiI2MjE4OWMwMTFkN2I2MzAwMWNhNWVmMzUiLCJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNjQ3ODMwNjU1LCJleHAiOjE2NTA0MjI2NTV9.ryj_-e6pt4uGS53OPliD15X94R9dpM0DeI49NIm8k0w',
  parseHeader: [Function (anonymous)],
  modifyMemberCode: [Function (anonymous)],
  tokenData: {
    role: 'ADMIN',
    _id: '62189c011d7b63001ca5ef35',
    username: 'Admin',
    iat: 1647830655,
    exp: 1650422655
  },
  _extensionStack: GraphQLExtensionStack { extensions: [] }
}
```

### 18/3/2022

```js
 return await ProductModel.aggregate([
      { $match: { productTagIds: { $in: ids } } },
      { $unwind: "$productTagIds" },
      { $group: { _id: "$productTagIds", count: { $sum: 1 } } },
    ]).then((res) => {
      console.log("👌 ~ res", res);
      const keyByIds = _.keyBy(res, "_id");
      return ids.map((id) => _.get(keyByIds, `${id}.count`, 0)) as number[];
    });
```

- Career Path: con duong su nghiep 🌄

```js
import { Types } from "mongoose";
productCount: async (root: any, args: any, context: Context) => {
  return await ProductCountLoader.load(root._id.toString());
  // ⚠️ typeof root._id is object
};
```

- ✖️ Multiplication: phép nhân
- 🔢 Numberic: số học, thuộc về số học
- 🌇 Opreation: phép toán, thao tác
- 👉 Output: kết quả
- 👏 Perform: thực hiện, thực thi
- 🏃 Process: xử lý
- 🔌 Processor: bộ xử lý
- Pulse: xung, xung điện
- ⚡️ Register: thanh ghi, đăng ký
- Signal: dấu, dấu hiệu, tín hiệu 💡
- Solution: giải pháp, phương án 💡
- Store: lưu trữ, lưu trữ dữ liệu 💻

### 16/3/2022

```js
const promotion = {};
console.log(promotion.limit); // undefined
console.log(promotion.limit.abccc); // TypeError: Cannot read property 'abccc' of undefined
console.log(promotion.limit?.abccc); // undefined
```

### 15/3/2022

- Bị viêm họng và sổ mũi do uống nhiều nước đá

### 10/3/2022

- Bị thủy đậu

### 6/3/2022

- http://192.168.1.41/ - a Thach
- 89.187.163.178 - a Thach

```json
{
  "editor.inlineSuggest.enabled": true,
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontFamily": "Fira Code",
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "git.enableSmartCommit": true,
  "turboConsoleLog.includeFileNameAndLineNum": false,
  "turboConsoleLog.insertEnclosingClass": false,
  "turboConsoleLog.insertEnclosingFunction": false,
  "turboConsoleLog.delimiterInsideMessage": "",
  "workbench.iconTheme": "material-icon-theme",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.referencesCodeLens.enabled": true,
  "typescript.referencesCodeLens.enabled": true,
  "workbench.colorTheme": "Andromeda Colorizer",
  "editor.renderLineHighlight": "none",
  "breadcrumbs.enabled": false,
  "editor.guides.indentation": false,
  "turboConsoleLog.logMessagePrefix": "👌",
  "editor.renderWhitespace": "none",
  "editor.minimap.enabled": false,
  "editor.renderControlCharacters": false,
  "github.copilot.enable": {
    "*": true,
    "yaml": true,
    "plaintext": true,
    "markdown": true
  },
  "editor.suggestSelection": "recentlyUsed"
}
```

### 4/3/2022

- 🎂 Birthday

### 3/3/2022

- 📌 (node:8875) UnhandledPromiseRejectionWarning: OverwriteModelError: Cannot overwrite `ClassroomSessionn` model once compiled.
  -> Xóa folder dist và chạy lại lệnh `yarn watch-ts`
- 📌 [error] Start Frontend Error Could not find a production build in the '/home/duc/doc-sach-nhanh/next/.next' directory. Try building your app with 'next build' before starting the production server. https://nextjs.org/docs/messages/production-start-no-build-id
  -> Do config NEXT_DEV_MODE trong file .env là false nên ko server ko build next -> ko phải error -> nếu cần front end thì config thành true
- 📌 post: context.auth(ROLES.ALL)

### 2/3/2022

- 🏘️ Bắt đầu làm việc tại nhà

### 1/3/2022

```json
{
  "editor.inlineSuggest.enabled": true,
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontFamily": "Fira Code",
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "git.enableSmartCommit": true,
  "turboConsoleLog.includeFileNameAndLineNum": false,
  "turboConsoleLog.insertEnclosingClass": false,
  "turboConsoleLog.insertEnclosingFunction": false,
  "turboConsoleLog.delimiterInsideMessage": "",
  "workbench.iconTheme": "material-icon-theme",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.referencesCodeLens.enabled": true,
  "typescript.referencesCodeLens.enabled": true,
  "workbench.colorTheme": "Andromeda Colorizer",
  "editor.renderLineHighlight": "none",
  "breadcrumbs.enabled": false,
  "editor.guides.indentation": false,
  "turboConsoleLog.logMessagePrefix": "👌",
  "editor.renderWhitespace": "none",
  "editor.minimap.enabled": false,
  "editor.renderControlCharacters": false,
  "github.copilot.enable": {
    "*": true,
    "yaml": true,
    "plaintext": true,
    "markdown": true
  }
}
```

- 🚲 Ngay 1 dap xe

### 28/2/2022

- 📌 To cache data, use file "cache" in folder helper

```js
.sort({ _id: -1 });
```

```js
db.persons.createIndex({ name: 1 }, { unique: true });
db.persons.createIndex({ age:1 });
{
  "createdCollectionAutomatically" : false,
  "numIndexesBefore" : 1,
  "numIndexesAfter" : 2,
  "ok" : 1
}
db.getCollection('persons').getIndexes();
```

```json
{
  "q": {
    "order": {
      "_id": -1
    }
  }
}
```

### 25/2/2022

```json
{
  "editor.inlineSuggest.enabled": true,
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontFamily": "Fira Code",
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "git.enableSmartCommit": true,
  "turboConsoleLog.includeFileNameAndLineNum": false,
  "turboConsoleLog.insertEnclosingClass": false,
  "turboConsoleLog.insertEnclosingFunction": false,
  "turboConsoleLog.delimiterInsideMessage": "",
  "workbench.iconTheme": "material-icon-theme",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.referencesCodeLens.enabled": true,
  "typescript.referencesCodeLens.enabled": true,
  "workbench.colorTheme": "Andromeda Colorizer",
  "editor.renderLineHighlight": "none",
  "editor.lineNumbers": "off",
  "breadcrumbs.enabled": false,
  "editor.guides.indentation": false,
  "turboConsoleLog.logMessagePrefix": "👌",
  "editor.renderWhitespace": "none",
  "editor.minimap.enabled": false,
  "editor.renderControlCharacters": false,
  "editor.suggestSelection": "recentlyUsed"
}
```

### 24/2/2022

```json
{
  {
  "editor.inlineSuggest.enabled": true,
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontFamily": "Fira Code",
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "git.enableSmartCommit": true,
  "turboConsoleLog.includeFileNameAndLineNum": false,
  "turboConsoleLog.insertEnclosingClass": false,
  "turboConsoleLog.insertEnclosingFunction": false,
  "turboConsoleLog.delimiterInsideMessage": "",
  "workbench.iconTheme": "material-icon-theme",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.referencesCodeLens.enabled": true,
  "typescript.referencesCodeLens.enabled": true,
  "workbench.colorTheme": "Andromeda Colorizer"
}

}
```

### 23/2/2022

- GraphqlResolver.loadById(StudentLoader, "studentId")
- 🔗 http://localhost:5555/graphql
- 🔗 https://docsachnhanh.mcom.app/graphql
- organizationalStatistics

### 🎉 22/2/2022

- 📌 model.find({ \_id: { $in: ids } })
- 📌 const token = new Token("id", "role");// ,"payload", "expiresIn"

### 21/2/2022

- ✅ Rut tien thuong ky thi web tai Dong A Bank - Done - 176k
- ✅ Mua xe dap - Done - 1tr7

### 20/2/2022

- 💪 Rut tien thuong ky thi web tai Dong A Bank - TODO

### 19/2/2022

### 18/2/2022

- ✍️ [Backend] Khóa học - Chưa có API star number, lượt xem, Chổ còn trống, thông tin khóa học, timeline của lớp học, khóa học liên quan, cảm nhận từ học viên - 90% (chua co timeline)

### 17/2/2022

- 🧑‍🤝‍🧑 Thêm 1 ô tên Nguyễn Văn Lý vào ở ghép trọ a Thạch

### 16/2/2022

- 📌 resetUserPassword.graphql.ts - doc-sach-nhanh
- 😐 Nothing

### 15/2/2022

- 📌 To install tsc.1️⃣ First install typescript.2️⃣ Then run `yarn global add tsc`.
- [Backend] Số lượng học viên của lớp học - Doing

### 14/2/2022

- 🖥️ Install windows 11 - Doing -> Cancled (Reinstall Zorin OS)
- 🏃 ⚠️ Continue do task Quy trình mua khoá học dành cho học viên - 3/20

### 12/2/2022

- nodejs - global, local
- mongo
- single node
- replicate set - primary node , secondary node
- sharding

### 11/2/2022

- 📌 const order = await orderService.findOne({ \_id: id }); -> order.organId is Object ⚠️
- context Context {
  meta: {},
  isAuth: true,
  isTokenExpired: false,
  token: Token {
  \_id: '61f110cdb05de61bb48545eb',
  role: 'STUDENT',
  payload: { username: 'Student', iat: 1644564894, exp: 1647156894 },
  expiresIn: '30d'
  }
- 💪 🥬 Config IP VPS for modem Viettel
- 💪 🥬 Use printer to print manga, hentai,...
- 🏃 ⚠️ 60% Continue task [Backend] API Order
- 📌 Zorin OS is better than Linux Mint

### 10/2/2022

- [Backend] API Order 🏃 ⚠️ 50%
  buyerId?: string; // Id cua nguoi mua
  buyerName?: string; // Ten cua nguoi mua
  organId?: string; // Id cua don vi
  organName?: string; // Ten cua don vi
  subTotal?: number; // Tong tien
  discount?: number; // Giam gia
  amount?: number; // Tong tien phai thanh toan (da bao gom giam gia)
  orderDetails?: Array<IOrderDetail>; // Chi tiet don hang
  orderPayment?: IOrderPayment; // Thanh toan
  status?: Status; // Trang thai
  inviterId?: string; // Id cua nguoi moi (user)
  inviterCommission?: number; // Hoa hong cua nguoi moi (user)
  rewardPoint?: number; // Diem thuong

### 9/2/2022

- [Backend] API cho phép người dùng xem danh sách khoá học - ✅

### 8/2/2022

- [Backend] API cho phép người dùng xem danh sách khoá học - 💪 🥬
- [Backend] Cung cấp API comment và đánh giá buổi học - ✅

### 7/2/2022

- Cong chung so yeu ly lich - 💪 🥬
- Rut tien thuong MB Bank - 💪 🥬

- [Backend] Cung cấp API comment và đánh giá buổi học - 🏃 ⚠️ 50%

- Hoan tat va di in ho so, bao cao:

* Don xin viec, so yeu ly lich (MCOM) - 💪 🚨
* Bao cao, nhat ky thuc tap doanh nghiep - 💪 ⚠️

- On thi cho mon kiem thu va android - 💪 ⚠️
- Lam xong bai tap mongodb cua trung tam it house - 💪 ⚠️

- Buy 💸 :

* Xe dap - 💪 🥬
* Tui xe dap - 💪 🥬
* Bong den led - ✅
* Vim - ✅
* May cat toc - 💪 🥬
* Dau goi X-men - 💪 🥬
* Cay lau nha - ✅
* Day dat cho - 💪 🥬
* Mu bao hiem - 💪 🥬
* Gong kinh can - 💪 🥬
* May hut bui - 💪 🥬

### 4/2/2022

- Hoan tat va di in ho so, bao cao:

* Don xin viec, so yeu ly lich (MCOM) - 💪 🚨
* Bao cao, nhat ky thuc tap doanh nghiep - 💪 ⚠️

- On thi cho mon kiem thu va android - 💪 ⚠️
- Lam xong bai tap mongodb cua trung tam it house - 💪 ⚠️

- Buy 💸 :

* Xe dap - 💪 🥬
* Tui xe dap - 💪 🥬
* Bong den led - 💪 🥬
* Vim - 💪 🥬
* May cat toc - 💪 🥬
* Dau goi X-men - 💪 🥬
* Cay lau nha - 💪 🥬
* Day dat cho - 💪 🥬
* Mu bao hiem - 💪 🥬
* Gong kinh can - 💪 🥬
* May hut bui - 💪 🥬

### 31/1/2022

- Nuoc 🌊 sot me rang cham rong nho 🍇 an nhu lon 😠

### 26/1/2022

- BitB: fbgUkccxQjqXL7B8Mput
- [Backend] Xây dụng model Document cho Tổ chức - Doing
- [Backend] Cung cấp API thêm student vào lớp học - Doing

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
