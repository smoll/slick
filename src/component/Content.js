import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'
import Header from './Header'
import Footer from './Footer'

const Content = ({children}) => {
  return (
    <div>
      <Header />
      <Grid fluid>
        <Row style={{paddingTop: '2em'}}>
          <Col xs={1} sm={2} />
          <Col xs={12} sm={8}>
            {children}
          </Col>
          <Col xs={1} sm={2} />
        </Row>
      </Grid>
      <Footer />
    </div>
  )
}

export default Content
