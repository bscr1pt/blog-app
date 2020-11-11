import Navbar from './navbar';
import Footer from './footer';
import { Container } from 'reactstrap';


const BaseLayout = (props) => {
  return (
    <div>
      <div style={{paddingBottom: '50px'}}>
        <Navbar changeFilter={props.changeFilter}/>
      </div>
      <Container>
        {props.children}
      </Container>
    <Footer />
    </div>
  )
}


export default BaseLayout;