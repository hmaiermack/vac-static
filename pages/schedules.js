import React from 'react'

const schedules = () => {
    return (
        <div className="container h-screen">
            <iframe 
            src="https://calendar.google.com/calendar/embed?height=1400&amp;wkst=1&amp;bgcolor
            =%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=bXM1Y2VkYWhlcXZrN2JsOWFlNm1iNWV1a2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;
            color=%234285F4&amp;mode=WEEK&amp;showTabs=0&amp;showPrint=1&amp;showTz=0&amp;showDate=1&amp;showNav=1" className="w-9/12 h-5/6 overflow-hidden calendar" ></iframe>
        </div>

    )
}

export default schedules
