//fragment kodu SideBar.js

const SideBar = ({ sortBy }) =>  {
    const handleOnClick = (e, key, direction) => {
      e.preventDefault();
      sortBy(key, direction);
    };
  
      return (
        <Container>
          <h3>Sort by:</h3>
          <Row>
              <Col>
                <Button onClick={(e) => handleOnClick(e, 'name', 'asc')}> Name A to Z </Button> 
              </Col>
          </Row>
          <Row>
              <Col>
                <Button onClick={(e) => handleOnClick(e, 'name', 'desc')}> Name Z to A </Button> 
              </Col>
          </Row>