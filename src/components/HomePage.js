import React, { useState, useEffect } from 'react';
import { Link,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col, Row,Navbar,Nav,Button,Modal,Form,FormControl,NavDropdown} from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import logo from '../logo-with-text.svg'
import logoBig from '../logo.jpg'
import Passengers from './Passengers'

import './Main.css'

const HomePage = (props) => {
  return (
   <Passengers />
  )
}

export default HomePage