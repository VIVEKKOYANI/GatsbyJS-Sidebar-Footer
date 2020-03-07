import React from "react"
import Header from '../components/header'
import {Link} from 'gatsby'
import Layout from '../components/layout'
export default () =>( 
    
<Layout>
<div style={{margin: `3rem auto`, maxWidth: 600, color: `purple`, fontSize: `25px`}}>
    
    <Link  to="/profile" >Profile</Link>
    <Link  to="/product" >Products</Link>
    <Link  to="/contact" >Contact</Link>
    <Link  to="/enquiry" >Enquiry</Link>
    <Link  to="/quality" >Quality</Link>
    <Header  headerText="Hello Gatsby" />
   <h3> Hello world!</h3>
    </div>
    </Layout>
)