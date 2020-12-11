import React from 'react';
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

import {
    MenuOutline,
    CloseOutline,
    ChevronUpOutline,
    ChevronDownOutline,
    Location,
    Calculator,
    Storefront,
    NavigateCircle,
    Car
} from 'react-ionicons-icon';

const Index = (props) => {
    /* Index Header open icon */
    const headerOpen = <MenuOutline size="20px" />

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
        right: null
    }

    const headerNavNavs = [
        {
            type: "collapse",
            faciliter: {
                text: 'Tools',
                open: <ChevronDownOutline size="20px" />,
                close: <ChevronUpOutline size="20px" />
            },
            collapse: {
                left: [
                    <Link theme="red" variant="nav-red">
                        <span><Location size="20px" /></span>
                        Find a postcode
                    </Link>,
                    <Link theme="red" variant="nav-red">
                        <span><NavigateCircle size="20px" /></span>
                        Track an Item
                    </Link>,
                    <Link theme="red" variant="nav-red">
                        <span><Calculator size="20px" /></span>
                        Calculate postage
                    </Link>,
                    <Link theme="red" variant="nav-red">
                        <span><Storefront size="20px" /></span>
                        Find locations & hours
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
                                    header={<Typography size='h1'>Where every Dad gets his day</Typography>}
                                    body={"Snap up a bargain for Dad, or surprise him with the latest tech. \
                                                        Check out our selection of Dad-centric gifts to make his day, plus \
                                                        enjoy free shipping Australia-wide."}
                                />
                            </div>  
                        </div>

    const headerHeroRight = <img style={{width: "100%"}} src='/images/shutterstock-498020416.jpg' />

    const headerTrack = [
        <div>
            <Field label="Track an item" theme='red'/>
            <div>
                <br />
                <Button type='submit' theme='red' variant='danger' block>Track</Button>
            </div>
        </div>,
        <a href="#" className='icon icon--vertical icon--lg'>
            <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.5C22 1.122 20.879 0 19.5 0h-14A2.503 2.503 0 003 2.5v19C3 22.878 4.121 24 5.5 24h14c1.379 0 2.5-1.122 2.5-2.5v-19zM19.5 22a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5h-14a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h14zM7 9h11V4H7v5zm11 4h-3v-2h3v2zm-7 0h3v-2h-3v2zm-1 0H7v-2h3v2zm5 3h3v-2h-3v2zm-1 0h-3v-2h3v2zm-7 0h3v-2H7v2zm11 3h-3v-2h3v2zm-7 0h3v-2h-3v2zm-1 0H7v-2h3v2z"></path></svg>
            </span>
            <span class='typography typography--sm typography--primary theme-red'>Calculate Postage</span>
        </a>,
        <a href="#" className='icon icon--vertical icon--lg'>
            <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.76 16.333h5.76v5.75h1.92V24H1.92V8.667h-.905a1.01 1.01 0 01-.81-1.617l3.273-5.543c.24-.32.617-.507 1.016-.507h14.052c.4 0 .776.188 1.016.507l3.273 5.543a1.01 1.01 0 01-.81 1.617h-.905v2.875H19.2V8.667H3.84v13.416h1.92v-5.75zM24 24v-8.146a2.4 2.4 0 00-2.4-2.396h-3.84a2.4 2.4 0 00-2.4 2.396V24h1.92v-1.917h4.8V24H24zm-6.72-3.833h4.8v-4.313a.481.481 0 00-.48-.479h-3.84a.48.48 0 00-.48.48v4.312zM9.6 22.083H7.68V18.25H9.6v3.833zm1.92-19.166c1.06 0 1.92.858 1.92 1.916a1.92 1.92 0 01-1.92 1.917c-1.06 0-1.92-.859-1.92-1.917s.86-1.916 1.92-1.916zm9.6 15.333h-2.88v-1.917h2.88v1.917z"></path></svg>
            </span>
            <span class='typography typography--sm typography--primary theme-red'>Find locations & hours</span>
        </a>
    ]

    const headerPriceTable = <Pricetable 
                                    title="Price List"
                                    lists={[
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
                                    ]}
                                />

    const headerHero = <Hero
                        left={headerHeroLeft}
                        right={headerHeroRight}
                        />

    return (
        <Xpresshome
            header={headerNavbar}
            hero={headerHero}
            track={headerTrack}
            pricing={headerPriceTable}
            footer={null}
        />
    )
}

export default Index;