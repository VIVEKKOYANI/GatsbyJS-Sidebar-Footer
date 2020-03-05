import React from "react"
import Header from '../components/header'
import {Link} from 'gatsby'
export default () =>( 
    
<div style={{color: `purple`, fontSize: `72px`}}>
    <Link  to="/profile" >Profile</Link>
    <Link  to="/product" >Products</Link>
    <Link  to="/contact" >Contact</Link>
    <Link  to="/enquiry" >Enquiry</Link>
    <Link  to="/quality" >Quality</Link>
    <Header  headerText="Hello Gatsby" />
   <h3> Hello world!</h3>
    </div>
)