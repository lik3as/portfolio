import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router'

import { HomePage } from "@/pages/home";
import GlobalStyle from "@/styles/global_style";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle/>
		<BrowserRouter>
				<Routes>
					<Route index element={<HomePage/>}/>
				</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
