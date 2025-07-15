import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router'

import GlobalFonts from "@/styles/global_fonts";
import GlobalVars from "@/styles/global_vars";
import GlobalStyle from "@/styles/global_style";

import { HomePage } from "@/pages/home";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalFonts/>
		<GlobalVars/>
		<GlobalStyle/>
		<BrowserRouter>
				<Routes>
					<Route index element={<HomePage/>}/>
				</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
