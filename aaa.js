const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper 🅰️
async function main() {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "coincardbomay@gmail.com", //Tài khoản gmail vừa tạo
      pass: "ducdapdachoicanbuco", //Mật khẩu tài khoản gmail vừa tạo
    },
    tls: {
      // do not fail on invalid certs 🚩
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: "coincardbomay@gmail.com", // sender address
    to: "duc.phan622@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
