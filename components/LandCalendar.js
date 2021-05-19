import React from 'react'
import Link from 'next/link'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'








const LandCalendar = () => {
    const width = window.innerWidth;
    console.log(width)

    const key = 'AIzaSyC2RKZtrNZFHEbAWwVUXQG03bJ0KU5wqkE'
    const calId = 'c_g8lgrj65eooh8eqa6m8k6jq1kc@group.calendar.google.com'

    return (
        <div className="w-11/12 mx-auto text-gray-700 calendar">
            <h1 className="text-2xl text-center text-vacblue font-extrabold uppercase">Group Exercise Class Schedule</h1>
            {width >= 1024 ? 
                (<FullCalendar
                    plugins={[ timeGridPlugin, googleCalendarPlugin ]}
                    googleCalendarApiKey={key}
                    defaultView="timeGridWeek"
                    events={{
                        googleCalendarId: calId,
                        className: 'gcal-event' // an option!
                      }}
                      title
                      minTime="07:00:00"
                      maxTime="19:00:00"
                      slotDuration="00:15:00"
                      allDaySlot={false}
                      header={{
                          left: '',
                          center: '',
                          right: ''
                      }
                      }
                    />) 
                : ( <FullCalendar 
                    className="leading-relaxed "
                    plugins={[ listPlugin, googleCalendarPlugin ]}
                    googleCalendarApiKey={key}
                    defaultView="listWeek"
                    events={{
                        googleCalendarId: calId,
                        className: 'gcal-event'
                    }}
                    listDayAltFormat={false}
                    header={{
                        left: 'title',
                        center: '',
                        right: ''
                    }
                    }
      
                />)}
                <Link href="https://6f181fd4-e3ce-4953-aba8-3b69188f6289.filesusr.com/ugd/135029_3c849c95599b4140a3d41b5f542c8f66.pdf">
                    <a>
                        <button className="mt-8 w-max p-4 md:text-lg bg-vacblue shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-vacpurple uppercase sm:col-start-2">
                            <FontAwesomeIcon icon={faPrint} className="mr-2"/>Print Version    
                        </button>
                    </a>
                </Link>
        </div>
    )
}

export default LandCalendar