import { Grid, GridCol } from '@mantine/core';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import BookUs from './components/BookUs';

export default function Home() {
  return (
    <div className="container">
      <Grid justify="center">
        <GridCol span={12}>
          <AboutUs />
        </GridCol>
        <GridCol span={12}>
          <Services />
        </GridCol>
        <GridCol span={12}>
          <BookUs />
        </GridCol>
      </Grid>
    </div>
  );
}
