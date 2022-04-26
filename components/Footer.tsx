const Footer = () => (
  <footer className="py-16">
    <div className="container flex flex-col pd:flex-row items-center mx-auto">
      <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
        {/* <img src="/twitter.png" alt="" /> */}
        <ul className="flex text-black uppercase gap-12 text-xs">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Data Science</li>
          <li className="cursor-pointer">React</li>
          <li className="cursor-pointer">Social Media</li>
        </ul>
      </div>
      <div className="flex gap-10 pt-12 pd:mt-0">
        <li>
          <i className="fa-brands fa-linkedin bg-white cursor-pointer"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter-square bg-white cursor-pointer"></i>
        </li>
        <li>
          <i className="fa-brands fa-github-square bg-white cursor-pointer"></i>
        </li>
        <li>
          <i className="fa-brands fa-xing-square bg-white cursor-pointer"></i>
        </li>
      </div>
    </div>
  </footer>
);

export default Footer;
