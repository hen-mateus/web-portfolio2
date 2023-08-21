import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Project() {
    return (
        <div className="my-5">
            <div className="col-md-12 titulo">
                <p>Projects</p>
            </div>
            <div className="col-md-12 roboto-font">
                <p>I have been working in web development industry for over 3 years.</p>
            </div>
            <div className="container mt-5 projects-main">
                <div className="row">
                    <div className="col-md-7 project-img">
                        <img src="assets/hero-section.svg" alt="Imagem" className="img-fluid" />
                    </div>
                    <div className="col-md-5 ms-2 mt-4">
                        <div className="mb-2 fw-bold">
                            <p> Energy Exchange Website</p>
                        </div>
                        <div className="mb-2 pe-md-5 ps-md-5 fw-semibold color-grey">
                            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                        </div>
                        <div className="mb-2 d-flex justify-content-center roboto-font">
                            <p className='m-2 box-project fw-bold'>React</p>
                            <p className='m-2 box-project fw-bold'>Express</p>
                            <p className='m-2 box-project fw-bold'>Bootstrap</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Code <FontAwesomeIcon icon={faGithub} size="xl" /></a>
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 projects-main">
                <div className="row">
                    <div className="col-md-5 ms-2 mt-4">
                        <div className="mb-2 fw-bold">
                            <p>Dia das Empresas Website</p>
                        </div>
                        <div className="mb-2 pe-md-5 ps-md-5 fw-semibold color-grey">
                            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                        </div>
                        <div className="mb-2 d-flex justify-content-center roboto-font">
                            <p className='m-2 box-project fw-bold'>HTML</p>
                            <p className='m-2 box-project fw-bold'>CSS</p>
                            <p className='m-2 box-project fw-bold'>Javascript</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Code <FontAwesomeIcon icon={faGithub} size="xl" /></a>
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" /></a>
                        </div>
                    </div>
                    <div className="col-md-7 project-img">
                        <img src="assets/hero-section.svg" alt="Imagem" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 projects-main">
                <div className="row">
                    <div className="col-md-7 project-img">
                        <img src="assets/hero-section.svg" alt="Imagem" className="img-fluid" />
                    </div>
                    <div className="col-md-5 ms-2 mt-4">
                        <div className="mb-2 fw-bold">
                            <p>MovieFlix Dashboard</p>
                        </div>
                        <div className="mb-2 pe-md-5 ps-md-5 fw-semibold color-grey">
                            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                        </div>
                        <div className="mb-2 d-flex justify-content-center roboto-font">
                            <p className='m-2 box-project fw-bold'>React</p>
                            <p className='m-2 box-project fw-bold'>Express</p>
                            <p className='m-2 box-project fw-bold'>Bootstrap</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Code <FontAwesomeIcon icon={faGithub} size="xl" /></a>
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 projects-main">
                <div className="row">
                    <div className="col-md-5 ms-2 mt-4">
                        <div className="mb-2 fw-bold">
                            <p>VetClinic Manager App</p>
                        </div>
                        <div className="mb-2 pe-md-5 ps-md-5 fw-semibold color-grey">
                            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                        </div>
                        <div className="mb-2 d-flex justify-content-center roboto-font">
                            <p className='m-2 box-project fw-bold'>C#</p>
                            <p className='m-2 box-project fw-bold'>.NET</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Code <FontAwesomeIcon icon={faGithub} size="xl" /></a>
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" /></a>
                        </div>
                    </div>
                    <div className="col-md-7 project-img">
                        <img src="assets/hero-section.svg" alt="Imagem" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 projects-main">
                <div className="row">
                    <div className="col-md-7 project-img">
                        <img src="assets/hero-section.svg" alt="Imagem" className="img-fluid" />
                    </div>
                    <div className="col-md-5 ms-2 mt-4">
                        <div className="mb-2 fw-bold">
                            <p>FoodMarket App</p>
                        </div>
                        <div className="mb-2 pe-md-5 ps-md-5 fw-semibold color-grey">
                            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                        </div>
                        <div className="mb-2 d-flex justify-content-center roboto-font">
                            <p className='m-2 box-project fw-bold'>C#</p>
                            <p className='m-2 box-project fw-bold'>.NET</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Code <FontAwesomeIcon icon={faGithub} size="xl" /></a>
                            <a href="https://github.com/hen-mateus" target="_blank" className='p-2 text-decoration-none nav-link'>Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}