import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import IMG20220815112254 from "./tanviProfile.jpg"
class Profile extends React.Component {
render() {
return (
<div className="container">
<strong><h2>{this.props.name}</h2></strong>
<div className='row'>
<div className='col-md-4'>
<img src={IMG20220815112254} alt="Tanvi"/>
</div>
</div>
<p>
</p>
<p>
{this.props.bio}
</p>
<p>
<hr/>
<h2><i>Experience :</i></h2>
<p>
<h4>Intern at PNT Robotics</h4>
<h4>Jr. Editor at ISA-VESIT</h4>
<h4>Intern at Isotronica</h4>
</p>
<br/>
<hr/>
<strong><h3><i>Personal Details :</i></h3></strong>
<p>Phone no: 9696969696</p>
<p>Email Id: tanvisaraf@gmail.com</p>
<p>LinkedIn: <a href="https://www.linkedin.com/in/tanvi-saraf-906940260"
target="_blank"><b>https://www.linkedin.com/in/tanvi-saraf-906940260</b></a></p>
</p>
<p>
<Link to={'/contact'}>Contact Me</Link>
</p>
</div>
);
}
}
class Home extends React.Component {
render() {
const d = { name: "Tanvi Saraf", bio: "Creative mind and aesthetic personality." };
return (
<div>
<Profile name={d.name} bio={d.bio} />
</div>
);
}
}
export default Home;