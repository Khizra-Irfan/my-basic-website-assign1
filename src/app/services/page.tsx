export default function ServicePage() {
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.8",
        }}
      >
        <h1
          style={{
            color: "#2f4f4f",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          ~Web Development Services~
        </h1>

        <ol
          style={{
            color: "#4682b4",
            fontSize: "1.25rem",
            marginBottom: "30px",
          }}
        >
          <li style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#4682b4",
                fontSize: "1.8rem",
                marginBottom: "15px",
              }}
            >
              1. Frontend Development:
            </h3>
            <p
              style={{
                color: "#333",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              I specialize in creating visually appealing and responsive websites
              using modern web technologies. My goal is to build websites that not
              only look great but also offer a smooth user experience across
              different devices.
            </p>
            <ul
              style={{
                color: "#333",
                marginLeft: "10px",
                listStyleType: "disc",
              }}
            >
              <li>
                <b>HTML5 &amp; CSS3:</b> Crafting clean, semantic, and responsive
                layouts.
              </li>
              <li>
                <b>JavaScript &amp; TypeScript:</b> Adding interactivity and
                dynamic content to websites.
              </li>
              <li>
                <b>Responsive Design:</b> Ensuring websites work seamlessly on
                mobile, tablet, and desktop.
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#4682b4",
                fontSize: "1.8rem",
                marginBottom: "15px",
              }}
            >
              2. Next.js Applications:
            </h3>
            <p
              style={{
                color: "#333",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              I&apos;m developing expertise in building web applications with
              Next.js, a powerful React framework. I can help create fast,
              SEO-friendly web applications with server-side rendering (SSR) and
              static site generation (SSG).
            </p>
            <ul
              style={{
                color: "#333",
                marginLeft: "10px",
                listStyleType: "disc",
              }}
            >
              <li>
                <b>Single-Page Applications (SPA):</b> Fast, interactive
                websites.
              </li>
              <li>
                <b>Server-Side Rendering (SSR):</b> Delivering content quickly
                and efficiently.
              </li>
              <li>
                <b>Static Site Generation (SSG):</b> Creating highly performant
                static websites.
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#4682b4",
                fontSize: "1.8rem",
                marginBottom: "15px",
              }}
            >
              3. Custom Website Development:
            </h3>
            <p
              style={{
                color: "#333",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Need a personal or business website? I can help bring your vision
              to life with custom-built websites designed to meet your specific
              needs. Whether it&apos;s a portfolio, blog, or landing page, I can
              build a website tailored to your requirements.
            </p>
            <ul
              style={{
                color: "#333",
                marginLeft: "10px",
                listStyleType: "disc",
              }}
            >
              <li>
                <b>Personal Blogs &amp; Portfolios</b>
              </li>
              <li>
                <b>Landing Pages</b>
              </li>
              <li>
                <b>Business Websites</b>
              </li>
            </ul>
          </li>

          <li>
            <h3
              style={{
                color: "#4682b4",
                fontSize: "1.8rem",
                marginBottom: "15px",
              }}
            >
              4. Website Optimization:
            </h3>
            <p
              style={{
                color: "#333",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              I can help you improve the performance of your website by optimizing
              images, minimizing JavaScript, and reducing page load times. I can
              also help improve SEO so that your website ranks higher in search
              engines.
            </p>
          </li>
        </ol>
      </main>
    </div>
  );
}
