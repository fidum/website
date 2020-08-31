import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function FidumMark({ className }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="#00a1ff">
            <path d="M58 21.41c-2.48.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.83-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.83 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.02.63-13.5 1.31zM187 22.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.83-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.82 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.83 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31zM315 21.41c-2.48.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.83-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.82 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.83 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.02.63-13.5 1.31zM58 150.41c-2.48.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.82-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.82 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.02.63-13.5 1.31zM188 148.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.82-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.82 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.82 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31zM58 281.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.82-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.82 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31z"/>
        </svg>
    )
}

function FidumLogo({ className }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 1600 400">
            <path fill="#00a1ff" d="M1202 19.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.83-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.83 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31zM1331 20.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.83-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.83 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31zM1459 19.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.83-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.83 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31zM1202 148.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.82-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.82 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31zM1332 146.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.82-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.82 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31zM1202 279.41c-2.47.68-7.42 2.78-10.99 4.66-3.56 1.89-8.96 5.91-12 8.94-3.03 3.04-7.05 8.44-8.93 12-1.88 3.57-4.02 8.74-4.74 11.49-.72 2.75-1.32 8.82-1.32 13.5s.6 10.75 1.32 13.5c.72 2.75 2.86 7.92 4.74 11.49 1.88 3.56 5.9 8.96 8.93 12 3.04 3.03 8.44 7.05 12 8.93 3.57 1.88 8.74 4.02 11.49 4.74 2.75.72 8.83 1.32 13.5 1.32s10.75-.6 13.5-1.32c2.75-.72 7.92-2.86 11.49-4.74 3.56-1.88 8.96-5.9 12-8.93 3.03-3.04 7.05-8.44 8.93-12 1.88-3.57 4.02-8.74 4.74-11.49.72-2.75 1.32-8.82 1.32-13.5s-.6-10.75-1.32-13.5c-.72-2.75-2.86-7.92-4.74-11.49-1.88-3.56-5.9-8.96-8.93-12-3.04-3.03-8.44-7.05-12-8.93-3.57-1.88-8.74-4.02-11.49-4.74-2.75-.72-9.05-1.28-14-1.24-4.95.04-11.03.63-13.5 1.31z"/>
            <path fill="#000000" fillRule="evenodd" d="M1075 17l.49 2.25c.26 1.24.49 81.34.51 353.75l-2.25.54c-1.24.29-9.67.4-35.25-.04l-.27-130c-.15-71.5-.6-130.35-1-130.77-.4-.42-2.39 3.86-4.41 9.5-2.03 5.65-6.19 17.58-9.25 26.52-3.07 8.94-8.05 23.45-11.07 32.25-3.02 8.8-8.02 23.31-11.1 32.25-3.08 8.94-8.08 23.45-11.1 32.25-3.02 8.8-6.91 20.05-11.83 34l-11.48.26c-6.32.14-11.82-.09-12.21-.5-.4-.42-2.28-5.26-4.17-10.76-1.9-5.5-6.89-19.9-11.1-32-4.21-12.1-8.25-23.8-8.98-26-.72-2.2-5.68-16.6-11.01-32-5.33-15.4-12.08-34.97-15.01-43.5-2.93-8.53-5.82-16.96-6.42-18.75-.6-1.79-1.43-2.99-1.84-2.67-.41.32-.98 58.94-1.75 259.92h-36v-354h47.78l13.16 39c7.24 21.45 20.57 60.99 29.61 87.87 9.05 26.88 16.79 49.38 17.2 50 .53.8 1.05.69 1.75-.37.56-.82 1.64-3.53 2.42-6 .77-2.47 7.54-22.5 15.05-44.5 7.51-22 14.94-43.83 16.52-48.5 1.58-4.67 8.09-23.6 14.46-42.05 6.37-18.46 12.12-34.54 12.77-35.75 1.16-2.16 1.54-2.2 45.78-2.2zm-853.5 2.5l.24 26.5c.19 20.27-.05 26.67-1 27.23-.68.41-24.3.75-52.49.75-44.66.02-51.31.21-51.75 1.52-.28.83-.49 20.51-.48 43.75 0 23.24.34 42.8.75 43.47.55.93 11.41 1.29 88.73 1.78v53l-89 1L116 374H98c-9.9 0-18.67-.23-19.5-.5-1.32-.44-1.52-21.08-1.67-176.83-.09-96.99.21-176.64.68-177.01.46-.37 33.05-.56 143.99-.16zm133-.51l.75 14.26c.41 7.84.74 18.64.75 33.75l-15.25.02c-8.39 0-15.8.34-16.48.75-.97.57-1.18 28.28-.77 257.73l32 1v47h-103v-47l31-1 .23-128.5c.18-100.95-.03-128.66-1-129.23-.68-.41-7.87-.75-30.73-.77l-.17-23.33c-.09-12.84.21-23.64.67-24 .46-.37 23.6-.67 102-.68zm81.85.02c31.51.01 38.97.3 49.15 1.9 6.6 1.05 15.15 3.1 19 4.57 3.85 1.48 9.92 4.22 13.5 6.1s7.67 4.43 9.1 5.67c1.43 1.24 4.13 3.62 6 5.29 1.87 1.68 5.46 5.5 7.98 8.5 2.52 3 6.67 9.29 9.21 13.96 2.54 4.67 6.23 12.55 8.19 17.5 1.96 4.95 4.86 14.4 6.45 21 1.59 6.6 3.6 16.28 4.46 21.5.87 5.22 2.32 18.72 3.22 30 1.27 15.85 1.52 27.53 1.08 51.5-.32 17.05-1.23 37.53-2.04 45.5-.8 7.98-2.22 18.55-3.15 23.5-.92 4.95-2.76 13.27-4.07 18.5-1.31 5.23-4.08 13.77-6.16 19-2.07 5.23-5.45 12.65-7.49 16.5-2.05 3.85-6.35 10.15-9.56 14-3.21 3.85-8.51 9.19-11.78 11.87-3.27 2.68-8.86 6.34-12.44 8.13-3.58 1.8-9.87 4.2-14 5.34-4.12 1.13-12.56 2.76-18.75 3.61-8.47 1.17-20.38 1.55-85.25 1.55l-.25-175.75c-.14-96.66-.09-176.54.1-177.5.32-1.63 2.9-1.75 37.5-1.74zm2.15 300.49c22.48-.21 32.82-.77 37.5-1.38 4.68-.61 10.75-1.9 13.5-2.87 2.75-.97 7.48-3.16 10.5-4.86 3.02-1.71 7.98-5.78 11-9.05 3.02-3.27 6.95-8.85 8.71-12.39 1.77-3.55 4.09-9.38 5.15-12.95 1.07-3.57 2.64-9.87 3.49-14 .86-4.12 2.06-11.55 2.68-16.5.62-4.95 1.37-22.5 1.67-39 .41-23.06.16-34.28-1.08-48.5-.89-10.18-2.52-23-3.62-28.5-1.09-5.5-2.92-12.7-4.05-16-1.13-3.3-3.49-8.65-5.25-11.9-1.76-3.24-5.45-8.15-8.2-10.91-2.75-2.76-6.8-6.15-9-7.52-2.2-1.38-6.36-3.33-9.25-4.34-2.89-1-8.74-2.5-13-3.33-4.99-.96-13.72-1.5-24.5-1.5h-16.76l.51 245.5zm219-300l.63 116c.4 74.39 1.02 119.59 1.74 126 .61 5.5 1.78 13.6 2.6 18 .82 4.4 2.44 10.93 3.59 14.5 1.16 3.57 3.53 9.37 5.27 12.88 1.84 3.7 5.17 8.22 7.92 10.75 2.61 2.4 7.11 5.47 10 6.8 2.89 1.34 8.85 2.93 13.25 3.52 5.68.77 10.32.78 16 .03 5.3-.7 10.19-2.13 14.5-4.25 3.58-1.75 8.2-5 10.27-7.21 2.08-2.21 5.3-6.95 7.15-10.52 1.86-3.57 4.3-9.65 5.42-13.5 1.12-3.85 2.72-11.27 3.54-16.5.83-5.23 1.81-11.3 2.17-13.5.36-2.2.95-57.78 1.95-243h38V142c0 112.75-.15 123.61-1.82 136.5-1.01 7.7-2.71 18.73-3.79 24.5s-3.58 15.45-5.57 21.5c-1.98 6.05-4.94 13.48-6.57 16.5-1.63 3.02-4.9 8.2-7.27 11.5-2.36 3.3-6.48 8.07-9.14 10.6-2.66 2.52-7.2 6.01-10.09 7.75-2.89 1.73-7.61 4.08-10.5 5.22-2.89 1.14-8.62 2.74-12.75 3.55-4.12.8-12.23 1.73-18 2.05-7.44.41-13.85.08-22-1.13-6.33-.94-14.42-2.81-18-4.16-3.58-1.34-9.2-4.11-12.5-6.15-3.3-2.03-7.72-5.28-9.82-7.21-2.1-1.94-5.99-6.45-8.63-10.02-2.65-3.57-6.16-9.2-7.81-12.5-1.65-3.3-4.59-10.95-6.54-17-1.95-6.05-4.48-15.95-5.62-22-1.15-6.05-2.82-17.98-3.72-26.5-1.38-13.08-1.72-33.97-2.19-133.66-.43-92.95-.28-118.61.69-120.27 1.2-2.05 1.83-2.11 37.64-1.57z"/>
        </svg>
    )
}

export default function Header() {
    return (
        <header className="flex justify-between items-center py-5 md:py-10">
            <div>
                <Link href="/">
                    <a aria-label="Tailwind CSS Blog">
                        <FidumMark className="h-6 sm:hidden"/>
                        <FidumLogo className="hidden sm:block h-6"/>
                    </a>
                </Link>
            </div>
            <div className="text-base leading-5">
                <a
                    href="https://twitter.com/danmasonmp"
                    className="font-medium text-3xl text-gray-500 hover:text-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon className="mr-5" icon={faTwitter}/>
                </a>
                <a
                    href="https://github.com/fidum"
                    className="font-medium text-3xl text-gray-500 hover:text-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon className="mr-5" icon={faGithub} />
                </a>
                <a
                    href="https://danielmason.co.uk"
                    className="font-medium text-3xl text-gray-500 hover:text-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faUserCircle} />
                </a>
            </div>
        </header>
    )
}
