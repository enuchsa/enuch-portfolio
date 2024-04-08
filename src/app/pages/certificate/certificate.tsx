import Image from 'next/image'
import './certificate.css'

export default function Certificate() {
    return (
        <section id="certificates">
            <section className="container">
                <section className="sections-header">
                    <h3>Certificates</h3>
                    <p>I am always empowering myself</p>
                </section>
                <section className='content'>
                    <section className="item">
                        <img src="https://hermes.dio.me/certificates/cover/2GFZNDHQ.jpg" alt="certificate" />
                        <a href="https://www.dio.me/certificate/2GFZNDHQ/share">Link</a>
                    </section>
                    <section className="item">
                        <img src="https://hermes.dio.me/certificates/cover/A0BSGMAI.jpg" alt="certificate" />
                        <a href="https://www.dio.me/certificate/A0BSGMAI/share">Link</a>
                    </section>
                    <section className="item">
                        <img src='https://hermes.dio.me/certificates/cover/KX7GBVMA.jpg' alt="certificate" />
                        <a href="https://www.dio.me/certificate/KX7GBVMA/share">Link</a>
                    </section>
                </section>
            </section>
        </section>
    )
}