import { htmlTemplate } from './html-template';

export const requestFormBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header class="header">
          <img style="width: 696px; height: 110px" src="https://trendelladigital.com/images/email/header.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p style="font-size: 24px; color: #0D0D0D;">Hi, ${username}</p>
          <p class="text">Thank you for placing your order with <strong style="font-weight: 700;">Idelaria</strong> — we’re excited to support your next stage of growth.</p>
          <p class="text">We’ve successfully received your request, and our team is preparing the next steps. If you selected bank transfer as your payment method, you’ll receive a separate email shortly with full payment instructions.</p>
          <p class="text">Once payment is confirmed, we’ll begin work on your selected service and guide you through the onboarding or setup process.</p>
          <p class="text">Here’s what you can expect: clear communication, expert guidance, and a strategy that actually fits how you want to grow — not just what others say you should do.</p>
          <p class="text">If you have any questions or want to share something specific about your business before we get started, feel free to reply to this email or reach us directly at info@idelaria.com.</p>
          <p class="text">We’re truly looking forward to partnering with you.</p>
          <p class="text" style="font-size: 18px;">Warm regards,<br /><strong style="font-weight: 700;">The Idelaria Team</strong></p>
        </div>
        <footer style="margin-top: 70px;">
          <img style="width: 696px; height: 110px" src="https://trendelladigital.com/images/email/footer.png" alt="full-logo" class="logoSm" />
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
