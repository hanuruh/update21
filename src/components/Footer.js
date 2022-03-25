import React from 'react';
import FooterContainer from '../styled-components/FooterContainer';
import '@fortawesome/fontawesome-free/js/all.js';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="redes-sociais">
                <a href="https://www.facebook.com/nuccfcup/" target="_blank" rel="noreferrer noopener"  title="Facebook"
                   className="x1"><i className="fab fa-facebook-f fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/nucc_fcup/" target="_blank" rel="noreferrer noopener" title="Instagram"
                   className="x1"><i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/company/nucc-fcup" target="_blank" rel="noreferrer noopener" title="Linkedin"
                   className="x1"><i className="fab fa-linkedin-in fa-2x"></i>
                </a>
                <a href="https://twitter.com/nuccfcup" target="_blank" rel="noreferrer noopener" title="Twitter"
                   className="x1"><i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://youtube.com/channel/UCRX39nFDLSN4CAV40iUbZ8g" target="_blank" rel="noreferrer noopener" title="Youtube"
                   className="x1"><i className="fab fa-youtube fa-2x"></i>
                </a>
            </div>
            <div className="py-1 text-left copyright">
                <span className={"ml-3"}><small >Copyright © NuCC 2021</small></span>
                <a href={"https://www.linkedin.com/in/anacfmoreira"} target="_blank" rel="noreferrer noopener" className={"text-light"}>
                    <span className={"float-right mr-2"}>
                        <small>
                            FE by Ana Moreira
                        </small>
                    </span>
                </a>
                <a href={"https://www.linkedin.com/in/eduardo-morgado-b5312618a"} target="_blank" rel="noreferrer noopener" className={"text-light"}>
                    <span className={"float-right mr-2"}>
                        <small>
                            BE by Eduardo Morgado
                        </small>
                    </span>
                </a>
            </div>

        </FooterContainer>
    )
}

export default Footer;