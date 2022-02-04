import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import ThereWasALad from '../assets/audio/therewasalad.mp3';
import MyLove from '../assets/audio/mylove.mp3';

import BurnsConnectionImage from '../assets/img/burnsconnection/burnsconnection.jpg';

const BurnsConnection = () => {
  return (
    <div>
      <section className='burns-connection' id='burnsconnectionanchor'>
        <Container fluid className='burns-connection__container'>
          <Row xs='auto'>
            <Col>
              <h3 className='burns-connection__heading'>Burns Connection</h3>
              <img
                className='burns-connection__img'
                loading='lazy'
                src={BurnsConnectionImage}
                alt='Burns Connection'
              />
              <p className='burns-connection__image-caption'>
                Die Burns Connection (v. l. n. r.): Dave Donaldson, Karl-Heinz
                Lembke, Peter Schultze, Wendy Faulkner, Max Schultze, Astrid
                Schultze und Marie Schultze
              </p>
            </Col>
            <Col>
              <p className='burns-connection__text'>
                <strong>Burns Connection</strong> sind{' '}
                <strong>Wendy Faulkner</strong> aus <strong>Aberfoyle</strong>,{' '}
                <strong>Dave Donaldson</strong> aus <strong>Dundee</strong>{' '}
                (Akkordeon) sowie “<strong>Schottenschulle</strong>”{' '}
                <strong>Peter Schultze</strong>,{' '}
                <strong>Astrid Schultze</strong>,{' '}
                <strong>Marie Schultze</strong>, <strong>Max Schultze</strong>{' '}
                und “<strong>Lemmer</strong>” <strong>Karl-Heinz Lembke</strong>{' '}
                (Geige), alle aus <strong>Berlin</strong>.
              </p>
              <p className='burns-connection__text'>
                Uns verbindet die Liebe zu Liedern und Gedichten des
                schottischen Nationaldichters <strong>Robert Burns</strong>.
              </p>
              <p className='burns-connection__text'>
                Wir singen und spielen traditionelle schottische Lieder,
                schottische Akkordeon- und Geigenmusik und Dudelsackmusik. Die
                verwendeten Instrumente sind Akkordeon, Geige, Highland Pipes,
                Small Pipe, Bodhran, Gitarre, Waldzither.
              </p>
              <p className='burns-connection__text'>
                Seit vielen Jahren machen wir Musik beim{' '}
                <strong>Robert Burns Supper</strong> im <strong> BIP</strong> in
                <strong>Berlin-Pankow</strong> und in{' '}
                <strong>Inversnaid</strong> in Schottland.
              </p>
              <p className='burns-connection__text'>
                Damit Sie einen kleinen Eindruck davon bekommen, wie sich die{' '}
                <strong>Burns Connection</strong> anhört, haben wir nachfolgend
                zwei Hörbeispiele für Sie. Wir wünschen viel Vergnügen!
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <h3 className='burns-connection__songtitle'>
                There Was A Lad Was Born In Kyle
              </h3>
              <ReactAudioPlayer
                src={ThereWasALad}
                controls
                controlsList='nodownload'
                preload='metadata'
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <h3 className='burns-connection__songtitle'>
                My Love She's But A Lassie Yet
              </h3>
              <ReactAudioPlayer
                src={MyLove}
                controls
                controlsList='nodownload'
                preload='metadata'
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BurnsConnection;
