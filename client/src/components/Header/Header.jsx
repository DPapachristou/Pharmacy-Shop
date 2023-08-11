import "./Header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span>Free shipping with orders over 50€!</span>
        </div>
        <div>
        <img 
        className="headerImg" 
        src="https://s.tmimgcdn.com/scr/800x500/247500/creative-pharmacy-logo-template_247538-original.png"
        alt="" />
        </div>
        <div className="headerProducts">
            <span>Products</span>
        </div>
    </div>
  )
}
