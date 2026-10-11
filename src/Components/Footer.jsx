import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
import { getSetting } from "../Redux/ActionCreators/SettingActionCreators"

export default function Footer() {
    let [settingData, setSettingData] = useState({
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        map1: process.env.NEXT_PUBLIC_MAP1,
        address: process.env.NEXT_PUBLIC_ADDRESS,
        email: process.env.NEXT_PUBLIC_EMAIL,
        phone: process.env.NEXT_PUBLIC_PHONE,
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP,
        facebook: process.env.NEXT_PUBLIC_FACEBOOK,
        twitter: process.env.NEXT_PUBLIC_TWITTER,
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
        youtube: process.env.NEXT_PUBLIC_YOUTUBE,
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
    })

    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getSetting())
            if (SettingStateData.length) {
                let item = {}
                Object.keys(settingData).forEach(key => {
                    item[key] = SettingStateData[0][key] ? SettingStateData[0][key] : settingData[key]
                })
                setSettingData({ ...item })
            }
        })()
    }, [SettingStateData.length])

    return (
        <>
            <div className="container-fluid bg-dark text-white-50 footer pt-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <Link href="/" className="d-inline-block mb-3">
                                <h1 className="text-white">{settingData.siteName}</h1>
                            </Link>
                            <p className="mb-0 text-light">{settingData.siteName} is your trusted destination for quality products at unbeatable prices. We are committed to delivering a seamless shopping experience, exciting deals, and exceptional customer satisfaction with every purchase.</p>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn " data-wow-delay="0.3s">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <Link href={'{settingData.map1}'} target='_blank' className='d-block text-light mb-2'><i className="fa fa-map-marker-alt me-3"/>{settingData.address}</Link>
                            <Link href={`mailto:${settingData.email}`} target='_blank' className='d-block text-light mb-2'><i className="bi bi-envelope me-3"/>{settingData.email}</Link>
                            <Link href={`tel:${settingData.phone}`} target='_blank' className='d-block text-light mb-2'><i className="bi bi-telephone me-3"/>{settingData.phone}</Link>
                            <Link href={`https://wa.me/${settingData.whatsapp}`} target='_blank' className='d-block text-light mb-2'><i className="bi bi-whatsapp me-3"/>{settingData.whatsapp}</Link>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-square border-2 me-2" href={settingData.facebook} target='_blank'>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-outline-light btn-square border-2 me-2" href={settingData.twitter} target='_blank'>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-outline-light btn-square border-2 me-2" href={settingData.youtube} target='_blank'>
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a className="btn btn-outline-light btn-square border-2 me-2" href={settingData.instagram} target='_blank'>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-outline-light btn-square border-2 me-2" href={settingData.linkedin} target='_blank'>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <h5 className="text-white mb-4">Quick Link</h5>
                            <Link className="btn btn-link text-light" href="">Home</Link>
                            <Link className="btn btn-link text-light" href="/about">About Us</Link>
                            <Link className="btn btn-link text-light" href="/shop">Shop</Link>
                            <Link className="btn btn-link text-light" href="/feature">Feature</Link>
                            <Link className="btn btn-link text-light" href="/faq">Faq</Link>

                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <h5 className="text-white mb-4">Other Links</h5>
                            <Link className="btn btn-link text-light" href="/testimonial">Testimonial</Link>
                            <Link className="btn btn-link text-light" href="/contactus">Contact Us</Link>
                            <Link className="btn btn-link text-light" href="/privacy-policy">Privacy Policy</Link>
                            <Link className="btn btn-link text-light" href="/tc">Terms and Conditions</Link>
                            <Link className="btn btn-link text-light" href="/refund-policy">Refund Policy</Link>
                        </div>
                    </div>
                </div>
                <div className="container wow fadeIn" data-wow-delay="0.1s">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <Link className="border-bottom" href='/'>{settingData.siteName}</Link>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link href="/">Home</Link>
                                    <Link href="/about">About</Link>
                                    <Link href="/feature">Features</Link>
                                    <Link href="/faq">FAQs</Link>
                                    <Link href="/contactus">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
