import { FC, useEffect } from "react"
import { FaGithub, FaLinkedin, FaHome  } from "react-icons/fa"
import { IoIosBook  } from "react-icons/io"
import { PiArrowSquareIn } from "react-icons/pi"

import { Outlet, Link } from "react-router-dom"
import { Header, Nav, Main } from "./styles"
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "../constants"

const Layout: FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash)
    return;

    const element = document.querySelector(hash);
    element?.scrollIntoView({behavior: "smooth"});
  }, [window.location.hash])

  return (
    <>
      <Header> 
        <Nav as="nav" className="d-flex w-100 space-between p-3">
          <a href={WHATSAPP_URL} target="_blank">
            <span className="name p-0 m-0">
              Davi
              <PiArrowSquareIn size=".8em" className="ms-1"/>
            </span>
          </a>
          <nav className="ms-3 d-flex align-items-center">
            <Link to="/" className="me-1">
              <FaHome size="1.5em"/>
            </Link>
            <Link to="/projects" className="">
              <IoIosBook size="1.5em"/>
            </Link>
          </nav>
          <div className="d-flex align-items-center ms-auto external-media">
            <a className="me-1" href={GITHUB_URL} target="_blank">
              <FaGithub size="1.5em"/>
            </a>
            <a className="" href={LINKEDIN_URL} target="_blank">
              <FaLinkedin size="1.5em"/>
            </a>
          </div>
        </Nav>
      <hr/>
      </Header>
      <Main>
        <Outlet/>
      </Main>
    </>
  )
}

export default Layout;
