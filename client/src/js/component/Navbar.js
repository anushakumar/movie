var React =require('react');
var NavLink=require("./NavLink");


var Navbar=React.createClass({
  render:function(){
    return(

    <div className="container-fluid">

      <ul className="nav navbar-nav">
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/allfavmovie">All Fav movies</NavLink></li>
      <li><NavLink to="/about2/mean">About Mean</NavLink></li>
      <li><NavLink to="/moviebox">MovieBox</NavLink></li>
      </ul>

    </div>
    )
  }
});
module.exports = Navbar;
