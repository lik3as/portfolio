import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router'

import { HomePage } from "@/pages/home";
import GlobalStyle from "@/styles/global_style";
import GlobalVars from "@/styles/global_vars";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle/>
		<GlobalVars/>
		<BrowserRouter>
				<Routes>
					<Route index element={<HomePage/>}/>
				</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
