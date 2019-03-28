import * as React from 'react';

import About from 'Sections/About/About';
import Contact from 'Sections/Contact/Contact';
import Donate from 'Sections/Donate/Donate';
import Landing from 'Sections/Landing/Landing';
import Mission from 'Sections/Mission/Mission';
import Services from 'Sections/Services/Services';
import Meet from 'Components/Sections/Meet/ Meet';

const Routes = () => (
  <React.Fragment>
    <Landing />
    <Mission />
    <About />
    <Services />
    <Meet />
    <Donate />
    <Contact />
  </React.Fragment>
);

export default Routes;
