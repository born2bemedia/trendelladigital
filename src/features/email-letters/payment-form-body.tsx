import { htmlTemplate } from './html-template';

export const paymentFormBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header class="header">
          <img style="width: 696px; height: 90px" src="https://trendelladigital.com/images/email/header.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p style="font-size: 24px; color: #0D0D0D;">Hi, ${username}</p>
          <p class="text">Thanks again for your order. To get started, we just need to confirm your payment. Below you’ll find the details to complete your bank transfer.</p>
          <p class="text">Please include your order number as the payment reference to help us match your payment quickly. Once the transfer is received and verified, we’ll notify you and begin preparing your service setup and schedule.</p>
          <p class="text">If anything in this process is unclear — or if you’d prefer to speak with someone — just reply to this email. We’re happy to walk you through it.</p>
          <p class="text">Your growth journey with Trendella Digital is just beginning, and we’re here to make every step as smooth and intentional as possible.</p>
          <p class="text" style="font-size: 18px;">Best,<br /><strong style="font-weight: 700;">Trendella Digital Operations</strong></p>
        </div>
        <footer style="margin-top: 70px;">
          <img style="width: 696px; height: 90px" src="https://trendelladigital.com/images/email/footer.png" alt="full-logo" class="logoSm" />
        </footer>
      </div>
    `,
    style: `
      .wrapper {
        padding: 8px;
        width: 696px;
        margin: 0 auto;
        background: #ffffff;
      }
      
      .main {
        margin-top: 70px;
        padding: 40px;
        border-radius: 12px;
        background: #FDFDFD;
      }
      
      .header {
        overflow: hidden;
      }
      
      .strong {
        font-weight: 600;
        color: #000;
      }
      
      .title {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .heading {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .text {
        margin-top: 24px;
        color: #0D0D0D;
        font-size: 14px;
      }
      
      .logo {
        width: 159px;
        height: 40px;
      }
      
      .logoSm {
        width: 157px;
        height: 40px;
      }
      
      .footer {
        display: flex;
        border-radius: 12px;
        background: #FFE6E0;
        padding: 20px;
      }
    `,
  });
};
