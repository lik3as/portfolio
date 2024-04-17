import { FC } from "react"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { PiArrowSquareIn } from "react-icons/pi"

import { Outlet } from "react-router-dom"
import { Header, Nav, Main } from "./styles"
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "../constants"

const Layout: FC = () => {
  return (
    <>
      <Header> 
        <Nav as="nav" className="d-flex w-100 space-between p-3">
          <a href={WHATSAPP_URL} target="_blank">
            <span className="name">
              Davi
              <PiArrowSquareIn size=".8em" className="ms-1"/>
            </span>
          </a>
          <div className="d-inline ms-auto">
            <a className="me-1" href={GITHUB_URL} target="_blank">
              <FaGithub size="1.8em"/>
            </a>
            <a className="" href={LINKEDIN_URL} target="_blank">
              <FaLinkedin size="1.8em"/>
            </a>
          </div>
        </Nav>
      <hr/>
      </Header>
      <Main className="p-3">
        <Outlet/>
      </Main>
    </>
  )
}

export default Layout;
