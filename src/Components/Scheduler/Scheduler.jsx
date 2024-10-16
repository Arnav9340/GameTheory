import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import React, { useEffect, useRef } from 'react';
import "./Scheduler.css";
// Simple Card component
const Card = ({ children, className }) => (
  <div className={`${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const TaskCard = ({ event }) => (
    <Card className="card relative shadow-md rounded-lg text-black">
  <CardContent className="p-4">
    <div className="flex flex-row">
   
      

      {/* Status aligned to the right */}
      {event.extendedProps.status && (
        <p className="text-red-500 text-xs ml-auto bg-yellow-200">{event.extendedProps.status}</p>
      )}
    </div>
    <div>
        <h3 className="font-semibold text-sm">{event.title}</h3>
        
      </div>
    {event.extendedProps.items && (
          <p className="text-xs">{event.extendedProps.items} items</p>
    )}
    {/* Additional description below */}
    {event.extendedProps.description && (
      <p className="text-xs text-gray-600 mt-2">{event.extendedProps.description}</p>
    )}

    {event.extendedProps.amount && (
      <p className="font-semibold text-red-500 text-xs mt-2">₹{event.extendedProps.amount}</p>
    )}
  </CardContent>
</Card>

  );
  
  
const ScheduleCalendar = () => {
  const calendarRef = useRef(null);

  const events = [
    { title: 'Abbas', start: '2024-02-27T04:00:00', end: '2024-02-27T05:00:00', resourceId: 'court1' },
    { title: 'Viny Hasya', start: '2024-02-27T04:00:00', end: '2024-02-27T05:00:00', resourceId: 'court2' },
    { title: 'Shantanu', start: '2024-02-27T05:00:00', end: '2024-02-27T06:00:00', resourceId: 'court1', className: 'bg-red-100 text-black' },
    { title: 'Kailash', start: '2024-02-27T05:00:00', end: '2024-02-27T06:00:00', resourceId: 'court2', className: 'bg-red-100', extendedProps: { items: 6, amount: 300 } },
    { title: 'Venkatesh', start: '2024-02-27T05:00:00', end: '2024-02-27T06:00:00', resourceId: 'court3', className: 'bg-red-100', extendedProps: { items: 6, status: 'Collect' } },
    { title: 'Blocked', start: '2024-02-27T06:00:00', end: '2024-02-27T07:00:00', resourceId: 'court2', className: 'bg-gray-200' },
    { title: 'Blocked', start: '2024-02-27T06:00:00', end: '2024-02-27T07:00:00', resourceId: 'court5', className: 'bg-gray-200' },
    { title: 'Blocked', start: '2024-02-27T06:00:00', end: '2024-02-27T07:00:00', resourceId: 'court6', className: 'bg-gray-200' },
    { title: 'Coaching', start: '2024-02-27T08:00:00', end: '2024-02-27T10:00:00', resourceId: 'court4', className: 'bg-blue-100', extendedProps: { description: 'Sourav Kumar', status: '4/6' } },
    { title: 'Coaching', start: '2024-02-27T08:00:00', end: '2024-02-27T10:00:00', resourceId: 'court5', className: 'bg-blue-100', extendedProps: { description: 'Sourav Kumar', status: '4/6' } },
    { title: 'Indrajeet', start: '2024-02-27T10:00:00', end: '2024-02-27T11:00:00', resourceId: 'court4', className: 'bg-yellow-100' },
    { title: 'Indrajeet', start: '2024-02-27T10:00:00', end: '2024-02-27T11:00:00', resourceId: 'court5', className: 'bg-yellow-100' },
  ];

  const resources = [
    { id: 'court1', title: 'Court 1' },
    { id: 'court2', title: 'Court 2' },
    { id: 'court3', title: 'Court 3' },
    { id: 'court4', title: 'Court 4' },
    { id: 'court5', title: 'Court 5' },
    { id: 'court6', title: 'Court 6' },
  ];

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      console.log('Calendar API:', calendarApi);
      console.log('Current date:', calendarApi.getDate());
      console.log('Events:', calendarApi.getEvents());
    }
  }, []);

  const renderEventContent = (eventInfo) => {
    console.log('Rendering event:', eventInfo.event);
    return <TaskCard event={eventInfo.event} />;
  };

  return (
    <div className="custom-calendar p-4 bg-gray-100 rounded-lg shadow-md">
      <FullCalendar
        ref={calendarRef}
        plugins={[resourceTimelinePlugin]}
        initialView="resourceTimelineDay"
        initialDate="2024-02-27"
        slotMinTime="04:00:00"
        slotMaxTime="12:00:00"
        allDaySlot={false}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'resourceTimelineDay',
        }}
        events={events}
        resources={resources}
        eventContent={renderEventContent}
        height="auto"
        slotDuration="01:00:00"
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: true,
          meridiem: 'short',
        }}
        resourceAreaWidth="15%"
        
          
        
      />
    </div>
  );
};

export default ScheduleCalendar;