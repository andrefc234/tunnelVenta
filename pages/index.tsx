import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useInView } from 'react-intersection-observer';
import Fade from 'react-bootstrap/Fade';
import {Button, Container,Modal, ModalProps,Navbar,Form} from 'react-bootstrap'
import { animateScroll as scroll } from 'react-scroll';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import axios from 'axios'
export default function Home() {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(false);
  const [openmodal, setopenmodal] = useState(false)
  const Footer = () => {
    return (
      <footer className="bg-dark text-light">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-4">
              <img src="logo.png" alt="Logo" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-sm-6">
                  <h5>Contactanos</h5>
                  <p>Blvd. Bernardo Quintana 9691, Sur<br />Santiago de Querétaro, Qro.<br />Telefono: 442 749 2083</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    );
  };
  
 
  
  
  
  
  const Formulario = () => {
    const [isDownloading, setIsDownloading] = useState(false);
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const data = {
        phone: form.phone.valueOf(),
        name: form.name.valueOf()
      };
  console.log(data)
      try {
        setIsDownloading(true);
  
        // Send the form data to your API
      const response = await axios.post('/api/data',data)
  
        // Download the PDF file from the public folder
        const downloadLink = document.createElement('a');
        downloadLink.href = '/presentacion.pdf';
        downloadLink.download = 'Recorrido-Unique-Living.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      } finally {
        setIsDownloading(false);
      }
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label  className='text-dark'>Tu nombre</Form.Label>
          <Form.Control id="name" type="text" placeholder="Ingresa tu nombre" required />
        </Form.Group>
        <br/>
        <Form.Group controlId="phone">
          <Form.Label  className='text-dark'>Numero Whatsapp</Form.Label>
          <Form.Control  id="phone"  type="tel" placeholder="Ingresa tu numero de Whatsapp" required />
        </Form.Group>
  
        <div  className='text-center'>
          <hr/>
          <Button className='text-dark m-5' size="lg" variant="warning" type="submit" disabled={isDownloading}>
            {isDownloading ? 'Descargando...' : 'Ver'}
          </Button>
        </div>
      </Form>
    );
  }
  
  useEffect(() => {
    if (inView) {
      setOpen(true);
    }
  }, [inView]);
  const scrollToDiv = () => {
    const targetElement = document.getElementById('start');
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      scroll.scrollTo(offsetTop, {
        duration: 500,
        delay: 100,
      });
    }
  };
  function MD(props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
       
        className='text-white'
      >
        <Modal.Header closeButton  className='bg-dark' closeVariant='white' >
        <Modal.Title id="contained-modal-title-vcenter " className='text-white'>
        <div className="mx-auto">

        <img src="logo.png" width={60} height={50}/>
   
    </div>
              </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {props.body}
          
        </Modal.Body>
       
      </Modal>
    );
  }
  return (
    <>
      <Head>
        <title>Unique Living</title>
        <meta name="description" content="Unique Living Queretaro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar variant="danger" bg="danger">
  <Container>
    <div className="mx-auto">
      <Navbar.Brand href="#home">
        <img src="logo.png" width={120} height={100}/>
      </Navbar.Brand>
    </div>
  </Container>
</Navbar>
    <section >
    <div ></div>
    <Container fluid className={styles.bgImageFirst }>
    <div id='start'>
      
     <div > <h1 className=' mr-2 text-center text-danger p-5' >Recorrido virtual <br /> de tu próximo Loft en  Quer&eacute;taro. <br />Desde $1,850,000*MXN</h1></div>
      
      <div  className='text-center'>
       <Button className='text-dark m-5' size="lg" variant="warning" onClick={() => setopenmodal(true)}>Ver Recorrido</Button>
        
        <p className='text-center text-light'>*Sujeto a cambios sin previo aviso</p>
      </div>
    </div>
    </Container>
    <Container>
      <div  ref={ref}>
      <Fade in={open}>
<div className='text-center h2 m-5 p-5'>
En Unique Living nos complace poder guiar tu experiencia en la que
descubres tu espacio ideal y lo diseñas a tu estilo único.
</div>

</Fade>
      </div>
   
    </Container>
   <Container fluid className={styles.bgImageSecond }>
    <br/>
    <div className='p-5'></div>
    <br/>
    <br/>

   <div > <h1 className=' text-center align-middle text-white p-5' >Un ambiente especialamente
 <br /> diseñado  para ti </h1></div>

<div className='pt-5'>
<div  className='text-center'>
    <Button className='text-white m-5' size="lg" variant="danger" onClick={scrollToDiv} >Ver Recorrido</Button>
    </div>
</div>
    
    <h1 className=' text-center align-middle text-white p-5' >Descarga el recorrido virtual<br /> y conoce tu proximo loft </h1>
   
   </Container>
  </section>
  <Footer/>
  <MD
      show={openmodal}
      onHide={() => setopenmodal(false)}
      body={<Formulario />}
      title='Descargar'
    />
     </>
  )

}
