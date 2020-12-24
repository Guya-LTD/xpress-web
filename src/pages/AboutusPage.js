import React from 'react';
import { NavLink } from 'react-router-i18n';
import Xpressview from '@bit/guya-ltd.gcss.templates.xpressview';
import Navbar from '@bit/guya-ltd.gcss.molecules.navbar';
import Logo from '@bit/guya-ltd.gcss.molecules.logo';
import Link from '@bit/guya-ltd.gcss.atoms.link';
import Nav from '@bit/guya-ltd.gcss.molecules.nav';
import Button from '@bit/guya-ltd.gcss.atoms.button';
import Field from '@bit/guya-ltd.gcss.molecules.field';
import Typography from '@bit/guya-ltd.gcss.atoms.typography';
import Dropdown from '@bit/guya-ltd.gcss.molecules.dropdown';
import Breadcrumb from '@bit/guya-ltd.gcss.molecules.breadcrumb';
import Blockquote from '@bit/guya-ltd.gcss.molecules.blockquote';
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
    Language,
    Car
} from 'react-ionicons-icon';
import I18n from 'I18n';

const RequestPickup = (props) => {
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
                <Link href={locale + '/about-us' } theme="red" size="xs" variant="light-gh" theme="red">
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

    const headerBreadcrumb = <Breadcrumb
                                theme="red"
                                lists={
                                    [
                                        { state: 'none', link: <Link theme="red" cls="white" href={'/' + locale + '/'}><I18n t="home" /> &nbsp;</Link> },
                                        { state: 'active', link: <Link theme="red" cls="white" href="#"><I18n t="about_us" /></Link>}
                                    ]
                                }
                            />

    return (
        <Xpressview
            header={headerNavbar}
            breadcrumb={headerBreadcrumb}
            footer={null}
        >
            <div>
                <h1 className="theme-red typography typography--header"><I18n t='about_us' /></h1>
            </div>
            <div className="row">
                <div className="col-xs-6" style={{color: '#dadada', fontFamily: "APTypeProText", lineHeight: '1.6'}}>
                    <I18n t='about_us_details' />
                </div>
            </div>   
            <br />
            <br />
            <br /> 
        </Xpressview>
    )
}

export default RequestPickup;