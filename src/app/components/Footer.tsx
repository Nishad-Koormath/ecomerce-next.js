import React from 'react'
import './nav.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
    <div className="container py-4">
        <div className="row">
            {/* <!-- About Us Section --> */}
            <div className="col-md-4">
                <h5>About Us</h5>
                <p>
                    We are a leading e-commerce platform offering a wide range of products and services to meet your needs.
                </p>
            </div>
            {/* <!-- Links Section --> */}
            <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><Link href="/" className="text-white text-decoration-none">Home</Link></li>
                    <li><Link href="/products" className="text-white text-decoration-none">Shop</Link></li>
                    <li><Link href="/about-us" className="text-white text-decoration-none">About Us</Link></li>
                    <li><Link href="/contact-us" className="text-white text-decoration-none">Contact</Link></li>
                </ul>
            </div>
            {/* <!-- Social Media Section --> */}
            <div className="col-md-4">
                <h5>Follow Us</h5>
                <div>
                    <a href="https://www.facebook.com/" className="text-white text-decoration-none me-3">
                        <i className="bi bi-facebook"></i> Facebook
                    </a>
                    <a href="https://x.com/" className="text-white text-decoration-none me-3">
                        <i className="bi bi-twitter"></i> Twitter
                    </a>
                    <a href="https://www.instagram.com/" className="text-white text-decoration-none">
                        <i className="bi bi-instagram"></i> Instagram
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-secondary text-center py-2">
        <p className="mb-0">© 2024 YourCompany. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer