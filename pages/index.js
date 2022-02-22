import Head from 'next/head'

export default function Home() {

  return (
    <body>
  <header>
    <div className="logo">
    <a id="logo" href="">Brayden Lisecki</a>
    </div>
    <nav>    
      <ul className="nav_links">
      <li><a href="/blog">blog</a></li>
      <li><a href="/contact">contact</a></li>
    </ul>
    </nav>
  </header>
  <main>
    <section>
    <h2>Learn About Me</h2>
    <p>I'm a writer, marketer, and thinker. </p>
    <p>I'm currently the Marketing Project Lead for Quorum Information Systems, and I explore everything else online. </p>
    </section>
    <section>
    <h2>Read My Writing</h2>
    <p>I'm a writer, marketer, and thinker. </p>
    <p>I'm currently the Marketing Project Lead for Quorum Information Systems, and I explore everything else online. </p>
    </section>
    <section>
    <h2>Connect With Me</h2>
    <p>hello@braydenlisecki.com</p>
    <p>LinkedIn</p>
    <p>Twitter</p>
    <p>Instagram </p>
    <p>YouTube</p>
    </section>
  </main>
</body>
  )
}
