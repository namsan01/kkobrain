// index.html 역할

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카카오 브레인 블로그 - 클론코드",
  description: "클론 코드를 통한 프로젝트",
  themeColor: "#000000",
  viewport: { width: "device-width", initialScale: 1 },
  icons: {
    icon: "/favicon.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="08fc601fdbc31a914928df033987d05c7f5caefd"
        />
        <meta
          name="google-site-verification"
          content="J3kl5yPvijVI-WopKTkM88UkxqCFQUV_ZPv99rIOjK8"
        />
        <link
          rel="canonical"
          href="https://kkobrain-namsan01.vercel.app"
        ></link>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
