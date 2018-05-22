import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
$(function () {
console.log('hello');
    // page is now ready, initialize the calendar...
    $('#calendar').fullCalendar({
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        header: {
            center: 'month,agenda,week,timelineFourDays'
        } ,// buttons for switching between views
        views: {
              timelineFourDays: {
                  type: 'timeline',
                  duration: {
                      days: 4
                  }
              },
            month: { // name of view
                titleFormat: 'YYYY, MM, DD'
                // other view-specific options here
            },
            basic: {
                    // options apply to basicWeek and basicDay views
                },
                agenda: {
                    // options apply to agendaWeek and agendaDay views
                },
                week: {
                    // options apply to basicWeek and agendaWeek views
                },
                day: {
                    // options apply to basicDay and agendaDay views
                }
            },
        // put your options and callbacks here
         
              dayClick: function (date, jsEvent, view) {

                  alert('Clicked on: ' + date.format());

                  alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

                  alert('Current view: ' + view.name);

                  // change the day's background color just for fun
                  $(this).css('background-color', 'red');

              
         }
    })
});