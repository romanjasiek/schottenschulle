import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BurnsSupperImage from '../assets/img/burnssupper/burnssupper.jpg';

const BurnsSupper = () => {
  return (
    <div>
      <section className='burns-supper' id='burnssupperanchor'>
        <Container fluid className='burns-supper__container'>
          <h3 className='burn-supper__heading'>Burns Supper</h3>
          <Row xs='auto'>
            <Col md={6} lg={6}>
              <img
                className='burns-supper__img'
                loading='lazy'
                src={BurnsSupperImage}
                alt='Burns Supper'
              />
            </Col>
            <Col md={6} lg={6}>
              <p className='burns-supper__text'>
                Das “<strong>Burns Supper</strong>” ist ein traditioneller
                schottischer Abend zum Gedenken an <strong>Robert Burns</strong>
                .
              </p>
              <p className='burns-supper__text'>
                Höhepunkt des Abends ist das traditionelle schottische Essen “
                <strong>The Haggis</strong>”, dazu hören Sie von mir auf der
                Bagpipe “<strong>A man's a man for a'that</strong>” und “
                <strong>There was a lad was born in Kyle</strong>”. Am späteren Abend gibt
                es schottische Tanzmusik mit Strathspeys, Jigs, Reels und
                Hornpipes. Zum Schluß spiele ich “
                <strong>Auld Lang Syne</strong>”.
              </p>
              <h3 className='burn-supper__heading'>Robert Burns</h3>
              <p className='burns-supper__text'>
                <strong>Robert Burns</strong> gilt neben{' '}
                <strong>Walter Scott</strong> als der größte schottische
                Dichter, Lieder- und Geschichtensammler. Er war Freimaurer und
                hatte wegen seiner zahlreichen Liebschaften große Probleme mit
                der Kirche.
              </p>
              <p className='burns-supper__text'>
                <strong>1786</strong> veröffenlichte er seine Gedichte,
                geschrieben im schottischen Dialekt, in der{' '}
                <strong>Kilmarnock Edition</strong>
                und wurde damit über Nacht in ganz Schottland berühmt.
              </p>
              <p className='burns-supper__text'>
                Er starb sehr früh an einem rheumatischen Leiden.
              </p>
              <p className='burns-supper__text'>
                Zu seinem Begräbnis kam sowohl die bessere Gesellschaft als auch
                ca. 10.000 Leute aus dem einfachen Volk.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BurnsSupper;
