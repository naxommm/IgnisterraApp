import React from 'react';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerRoutes from './navigation';


function App() {
  return <GluestackUIProvider mode="light"><ContainerRoutes /></GluestackUIProvider>;
}

export default App;