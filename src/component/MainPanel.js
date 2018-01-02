import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'

const MainPanel = ({children}) => {
  return (
    <Grid fluid>
      <Row style={{paddingTop: '2em'}}>
        <Col xs={1} sm={2} lg={4} />
        <Col xs={12} sm={8} lg={4} >
          {children}
        </Col>
        <Col xs={1} sm={2} lg={4} />
      </Row>
    </Grid>
  )
}

export default MainPanel
