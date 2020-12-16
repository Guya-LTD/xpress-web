import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-i18n';
import Xpresshome from '@bit/guya-ltd.gcss.templates.xpresshome';
import Navbar from '@bit/guya-ltd.gcss.molecules.navbar';
import Logo from '@bit/guya-ltd.gcss.molecules.logo';
import Link from '@bit/guya-ltd.gcss.atoms.link';
import Hero from '@bit/guya-ltd.gcss.molecules.hero';
import Pricetable from '@bit/guya-ltd.gcss.molecules.pricetable';
import Nav from '@bit/guya-ltd.gcss.molecules.nav';
import Button from '@bit/guya-ltd.gcss.atoms.button';
import Blockquote from '@bit/guya-ltd.gcss.molecules.blockquote';
import Field from '@bit/guya-ltd.gcss.molecules.field';
import Typography from '@bit/guya-ltd.gcss.atoms.typography';
import Dropdown from '@bit/guya-ltd.gcss.molecules.dropdown';
//import Formcontrol from '@bit/guya-ltd.gcss.organisms.formcontrol';
import {
    MenuOutline,
    CloseOutline,
    ChevronUpOutline,
    ChevronDownOutline,
    Location,
    Calculator,
    Storefront,
    NavigateCircle,
    HelpCircle,
    Language
} from 'react-ionicons-icon';
import I18n from 'I18n';
import Async from 'react-async';

//const { API_GATEWAY } = process.env;

const API_GATEWAY = 'http://127.0.0.1:50000';

const PRICE_URL = API_GATEWAY + '/api/v1/prices';

const asyncRetrivePriceList = async({ signal }) => {
    const res = await fetch(PRICE_URL, { signal })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

const Index = (props) => {
    /* Localization */
    const locale = props.match.params.locale == null ? 'en' : props.match.params.locale;

    /* Index Header open icon */
    const headerOpen =  <MenuOutline size="45px"/>

    const headerClose = <CloseOutline size="20px" />

    const headerBrand = {
        small: <Logo src={process.env.PUBLIC_URL + "/images/xpress-logo.png"} size="sm"/>,
        large: <Logo src={process.env.PUBLIC_URL + "/images/xpress-logo.png"} size="sm"/>
    }

    const headerSearch = {
        sticky: null
    }

    const headerCollapse = {
        search: null,
        left: null,
        right: <span>
                <Link theme="red" size="xs" variant="light-gh" theme="red">
                    <span className="link__icon" style={{marginRight: "6px"}}>
                    <svg className="icon icon--xs" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="null" fill-rule="evenodd" d="m6.12052,0.16667l-0.36282,1.25291l-1.5722,-0.34655l-0.16931,1.46617l-0.50794,1.65277l-0.77401,0.85304l-0.55632,1.27956l-0.12094,0.6931l-0.62888,0.47984l-0.33863,1.78606l0,0.1866l0.04838,1.33288l-0.1935,0.53315l-0.72563,0.02666l-0.43538,0.95967l0.82238,0.13329l0.70144,0.82638l0.24188,0.66644l0.62888,0.39986l0.84657,1.83937l0.70144,0.29323l0,0.95967l0.48375,0.55981l0.94332,0l1.74152,1.43951l0.43538,0l0.31444,-0.02666l0.29025,0.1866l0.91913,0.13329l0.387,-0.71975l1.23357,-0.6931l0.55632,0.55981l0.91913,0l0.36282,-0.53315l0.87076,-0.02666l1.1852,-1.19959l1.78989,-0.07997l3.72491,-5.0916l-1.16101,0.02666l-4.47473,-2.02598l-0.53213,-0.58647l-0.50794,-0.82638l-0.53213,-0.93302l0.26606,-0.61312l-0.31444,-0.29323l-0.31444,0.13329l-0.74982,-0.02666l-0.04838,-0.53315l-0.12094,-0.45318l0.43538,-0.79973l0.45957,-0.74641l-0.48375,-0.55981l-0.60469,-0.98633l-0.60469,-0.55981l-0.387,-0.58647l-1.1852,-0.66644l-0.94332,-0.02666l-0.33863,-0.34655l-0.77401,0.39986l-0.84657,-0.77307z" id="ET"/>
                        </svg>
                    </span>
                    <I18n t="about_us" />
                </Link> 
                <Link theme="red" size="xs" variant="light-gh" theme="red">
                    <span className="link__icon" style={{marginRight: "6px"}}>
                        <HelpCircle size="22px" fill="#858585" />
                    </span>
                    <I18n t="help_and_support" />
                </Link>
                <a className='link link--xs link--light-gh theme-red' style={{marginLeft: "15px"}}>
                    <Dropdown
                        type="is-hoverable"
                        trigger={
                            <Language size="22px" fill="#858585" />
                        }
                        >
                        <NavLink ignoreLocale to="/en" className="link link-md theme-read linkdropdown-item">
                            English
                        </NavLink>
                        <NavLink ignoreLocale to="/am" className="link link-md theme-read linkdropdown-item">
                            እማርኛ
                        </NavLink>
                    </Dropdown>
                </a>
            </span>
    }

    const headerNavNavs = [
        {
            type: "collapse",
            faciliter: {
                text: <I18n t="tools" />,
                open: <ChevronDownOutline size="20px" />,
                close: <ChevronUpOutline size="20px" />
            },
            collapse: {
                left: [
                    <Link theme="red" variant="nav-red">
                        <span><Location size="20px" /></span>
                        <I18n t="find_a_postcode" />
                    </Link>,
                    <Link theme="red" variant="nav-red">
                        <span><NavigateCircle size="20px" /></span>
                        <I18n t="track_an_item" />
                    </Link>,
                    <Link theme="red" variant="nav-red">
                        <span><Calculator size="20px" /></span>
                        <I18n t="calculate_postage" />
                    </Link>,
                    <Link theme="red" variant="nav-red">
                        <span><Storefront size="20px" /></span>
                        <I18n t="find_locations_and_hours" />
                    </Link>
                ],
                right: null
            }
        }
    ]

    const headerNav = <Nav
                        type="single"
                        navs={headerNavNavs}
                        />
    
    /* Index Header */
    const headerNavbar = <Navbar 
                    open={headerOpen} 
                    close={headerClose} 
                    brand={headerBrand}
                    collapse={headerCollapse}
                    nav={headerNav}
                   />

    const headerHeroLeft = <div className='row'>
                            <div class='col-md-2' />
                            <div class='col-md-8'>
                                <Blockquote
                                    theme='red'
                                    size='lg'
                                    variant='primary'
                                    variant='danger'
                                    header={<Typography size='h1'><I18n t="slogan" /></Typography>}
                                    body={
                                        <>
                                        <I18n t="slogan_description" />
                                        <br /><br />
                                        <Button theme="red" variant="danger" size="lg" href={locale + '/request-pickup'} type="link"><I18n t="request_pickup" /></Button>
                                        </>
                                    }
                                />
                            </div>  
                        </div>

    const headerHeroRight = <img style={{width: "100%"}} src={process.env.PUBLIC_URL + '/images/shutterstock-498020416.jpg'} />

    const headerTrack = [
        <div>
            <Field label={<I18n t="track_an_item" />} theme='red' placeholder="0000000"/>
            <div>
                <br />
                <Button type='submit' theme='red' variant='danger' block><I18n t="track" /></Button>
            </div>
        </div>,
        <a href="#" className='icon icon--vertical icon--lg'>
            <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.5C22 1.122 20.879 0 19.5 0h-14A2.503 2.503 0 003 2.5v19C3 22.878 4.121 24 5.5 24h14c1.379 0 2.5-1.122 2.5-2.5v-19zM19.5 22a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5h-14a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h14zM7 9h11V4H7v5zm11 4h-3v-2h3v2zm-7 0h3v-2h-3v2zm-1 0H7v-2h3v2zm5 3h3v-2h-3v2zm-1 0h-3v-2h3v2zm-7 0h3v-2H7v2zm11 3h-3v-2h3v2zm-7 0h3v-2h-3v2zm-1 0H7v-2h3v2z"></path></svg>
            </span>
            <span class='typography typography--sm typography--primary theme-red'><I18n t="calculate_postage" /></span>
        </a>,
        <a href="#" className='icon icon--vertical icon--lg'>
            <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.76 16.333h5.76v5.75h1.92V24H1.92V8.667h-.905a1.01 1.01 0 01-.81-1.617l3.273-5.543c.24-.32.617-.507 1.016-.507h14.052c.4 0 .776.188 1.016.507l3.273 5.543a1.01 1.01 0 01-.81 1.617h-.905v2.875H19.2V8.667H3.84v13.416h1.92v-5.75zM24 24v-8.146a2.4 2.4 0 00-2.4-2.396h-3.84a2.4 2.4 0 00-2.4 2.396V24h1.92v-1.917h4.8V24H24zm-6.72-3.833h4.8v-4.313a.481.481 0 00-.48-.479h-3.84a.48.48 0 00-.48.48v4.312zM9.6 22.083H7.68V18.25H9.6v3.833zm1.92-19.166c1.06 0 1.92.858 1.92 1.916a1.92 1.92 0 01-1.92 1.917c-1.06 0-1.92-.859-1.92-1.917s.86-1.916 1.92-1.916zm9.6 15.333h-2.88v-1.917h2.88v1.917z"></path></svg>
            </span>
            <span class='typography typography--sm typography--primary theme-red'><I18n t="find_locations_and_hours" /></span>
        </a>
    ]


    /*
        [
                                        {
                                            name: "Price One",
                                            sign: "Birr",
                                            currency: "20",
                                            cent: "99",
                                            per: "/MON",
                                            href: "#",
                                            text: "Sign UP",
                                            features: [
                                                {
                                                    value: "20GB",
                                                    name: "Bandwidth"
                                                }
                                            ]
                                        }
                                    ]

    */

    const headerHero = <Hero
                        left={headerHeroLeft}
                        right={headerHeroRight}
                        />

    return (
        <Xpresshome
            header={headerNavbar}
            hero={headerHero}
            track={headerTrack}
            footer={null}
        >
            <Async promiseFn={asyncRetrivePriceList}>
                {({ data, error, isPending }) => {
                    if(isPending) return "Loading..."
                    if(error) {console.log("Price Error: " + error.message); return null;}
                    if(data)
                        return(
                            <Pricetable 
                                    title="Price List"
                                    sign={<I18n t="birr" />}
                                    locale={locale}
                                    href="#"
                                    text={<I18n t="request_pickup" />}
                                    per={<I18n t="per_km" />}
                                    weight_name={<I18n t="weight" />}
                                    weight_unit={<I18n t="weight_unit" />}
                                    length_name={<I18n t="length" />}
                                    length_unit={<I18n t="length_unit" />}
                                    width_name={<I18n t="width" />}
                                    width_unit={<I18n t="width_unit" />}
                                    height_name={<I18n t="height" />}
                                    height_unit={<I18n t="height_unit" />}
                                    lists={data}
                                />
                        )
                }}
            </Async>
        </Xpresshome>
    )
}

export default Index;