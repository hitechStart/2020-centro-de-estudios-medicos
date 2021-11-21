document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
  
	var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['dayGrid'],
      header: {
        right: 'prev,next'
      },

      locale: 'es',  
      events: [ 

            {
             title:'TripleViral',
             start: '2020-01-02',
             end:'2020-01-02'
           },
           {
             title:'BCG',
             start: '2020-01-04',
             end:'2020-01-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-01-06',
             end:'2020-01-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-01-08',
             end:'2020-01-08'
           },
          {
             title:'Meningococo',
             start: '2020-01-13',
             end:'2020-01-13'
           },
           {
             title:'TripleViral',
             start: '2020-01-14',
             end:'2020-01-14'
           },
           {
             title:'BCG',
             start: '2020-01-16',
             end:'2020-01-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-01-20',
             end:'2020-01-20'
           },
           {
             title:'Poliomielitis',
             start: '2020-01-22',
             end:'2020-01-22'
           },
           {
             title:'Meningococo',
             start: '2020-01-27',
             end:'2020-01-27'
           },
           {
             title:'TripleViral',
             start: '2020-01-28',
             end:'2020-01-28'
           },
           {
             title:'BCG',
             start: '2020-01-30',
             end:'2020-01-30'
           },
           {
             title:'TripleViral',
             start: '2020-02-03',
             end:'2020-02-03'
           },
           {
             title:'BCG',
             start: '2020-02-04',
             end:'2020-02-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-02-06',
             end:'2020-02-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-02-08',
             end:'2020-02-08'
           },
          {
             title:'Meningococo',
             start: '2020-02-10',
             end:'2020-02-10'
           },
           {
             title:'TripleViral',
             start: '2020-02-14',
             end:'2020-02-14'
           },
           {
             title:'BCG',
             start: '2020-02-17',
             end:'2020-02-17'
           },
           {
             title:'Hepatitis B',
             start: '2020-02-20',
             end:'2020-02-20'
           },
           {
             title:'Poliomielitis',
             start: '2020-02-22',
             end:'2020-02-22'
           },
           {
             title:'Meningococo',
             start: '2020-02-27',
             end:'2020-02-27'
           },
           {
             title:'TripleViral',
             start: '2020-02-28',
             end:'2020-02-28'
           },
           {
             title:'BCG',
             start: '2020-03-02',
             end:'2020-03-02'
           },
           {
             title:'BCG',
             start: '2020-03-04',
             end:'2020-03-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-03-06',
             end:'2020-03-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-03-09',
             end:'2020-03-09'
           },
          {
             title:'Meningococo',
             start: '2020-03-11',
             end:'2020-03-11'
           },
           {
             title:'TripleViral',
             start: '2020-03-14',
             end:'2020-03-14'
           },
           {
             title:'BCG',
             start: '2020-03-16',
             end:'2020-03-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-03-20',
             end:'2020-03-20'
           },
           {
             title:'Poliomielitis',
             start: '2020-03-23',
             end:'2020-03-23'
           },
           {
             title:'Meningococo',
             start: '2020-03-27',
             end:'2020-03-27'
           },
           {
             title:'TripleViral',
             start: '2020-03-28',
             end:'2020-03-28'
           },
           {
             title:'BCG',
             start: '2020-03-30',
             end:'2020-03-30'
           },
           {
             title:'TripleViral',
             start: '2020-04-01',
             end:'2020-04-01'
           },
           {
             title:'BCG',
             start: '2020-04-04',
             end:'2020-04-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-04-06',
             end:'2020-04-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-04-08',
             end:'2020-04-08'
           },
          {
             title:'Meningococo',
             start: '2020-04-13',
             end:'2020-04-13'
           },
           {
             title:'TripleViral',
             start: '2020-04-14',
             end:'2020-04-14'
           },
           {
             title:'BCG',
             start: '2020-04-16',
             end:'2020-04-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-04-20',
             end:'2020-04-20'
           },
           {
             title:'Poliomielitis',
             start: '2020-04-22',
             end:'2020-04-22'
           },
           {
             title:'Meningococo',
             start: '2020-04-27',
             end:'2020-04-27'
           },
           {
             title:'TripleViral',
             start: '2020-04-28',
             end:'2020-04-28'
           },
           {
             title:'BCG',
             start: '2020-04-30',
             end:'2020-04-30'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-04-30',
             end:'2020-05-02'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-05-04',
             end:'2020-05-05'
           },
          {
             title:'Antigripal y Neumococo',
             start: '2020-05-06',
             end:'2020-05-07'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-05-08',
             end:'2020-05-11'
           },
          {
             title:'Antigripal y Neumococo',
             start: '2020-05-12',
             end:'2020-05-13'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-05-14',
             end:'2020-05-15'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-05-18',
             end:'2020-05-19'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-05-20',
             end:'2020-05-21'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-05-22',
             end:'2020-05-23'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-05-26',
             end:'2020-05-27'
           },
           {
             title:'Antigripal y Neumococo',
             start: '2020-05-28',
             end:'2020-05-29'
           },
           {
             title:'TripleViral',
             start: '2020-06-01',
             end:'2020-06-01'
           },
           {
             title:'BCG',
             start: '2020-06-04',
             end:'2020-06-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-06-06',
             end:'2020-06-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-06-08',
             end:'2020-06-08'
           },
          {
             title:'Meningococo',
             start: '2020-06-13',
             end:'2020-06-13'
           },
           {
             title:'TripleViral',
             start: '2020-06-16',
             end:'2020-06-16'
           },
           {
             title:'BCG',
             start: '2020-06-16',
             end:'2020-06-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-06-19',
             end:'2020-06-19'
           },
           {
             title:'Poliomielitis',
             start: '2020-06-22',
             end:'2020-06-22'
           },
           {
             title:'Meningococo',
             start: '2020-06-27',
             end:'2020-06-27'
           },
           {
             title:'TripleViral',
             start: '2020-06-29',
             end:'2020-06-29'
           },
           {
             title:'BCG',
             start: '2020-06-30',
             end:'2020-06-30'
           },
           {
             title:'TripleViral',
             start: '2020-07-02',
             end:'2020-07-02'
           },
           {
             title:'BCG',
             start: '2020-07-04',
             end:'2020-07-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-07-06',
             end:'2020-07-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-07-08',
             end:'2020-07-08'
           },
          {
             title:'Meningococo',
             start: '2020-07-13',
             end:'2020-07-13'
           },
           {
             title:'TripleViral',
             start: '2020-07-14',
             end:'2020-07-14'
           },
           {
             title:'BCG',
             start: '2020-07-16',
             end:'2020-07-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-07-20',
             end:'2020-07-20'
           },
           {
             title:'Poliomielitis',
             start: '2020-07-22',
             end:'2020-07-22'
           },
           {
             title:'Meningococo',
             start: '2020-07-27',
             end:'2020-07-27'
           },
           {
             title:'TripleViral',
             start: '2020-07-28',
             end:'2020-07-28'
           },
           {
             title:'BCG',
             start: '2020-07-30',
             end:'2020-07-30'
           },
           {
             title:'TripleViral',
             start: '2020-08-01',
             end:'2020-08-01'
           },
           {
             title:'BCG',
             start: '2020-08-04',
             end:'2020-08-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-08-06',
             end:'2020-08-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-08-08',
             end:'2020-08-08'
           },
          {
             title:'Meningococo',
             start: '2020-08-13',
             end:'2020-08-13'
           },
           {
             title:'TripleViral',
             start: '2020-08-14',
             end:'2020-08-14'
           },
           {
             title:'BCG',
             start: '2020-08-18',
             end:'2020-08-18'
           },
           {
             title:'Hepatitis B',
             start: '2020-08-20',
             end:'2020-08-20'
           },
           {
             title:'Poliomielitis',
             start: '2020-08-22',
             end:'2020-08-22'
           },
           {
             title:'Meningococo',
             start: '2020-08-27',
             end:'2020-08-27'
           },
           {
             title:'TripleViral',
             start: '2020-08-28',
             end:'2020-08-28'
           },
           {
             title:'BCG',
             start: '2020-08-31',
             end:'2020-08-31'
           },
           {
             title:'TripleViral',
             start: '2020-09-02',
             end:'2020-09-02'
           },
           {
             title:'BCG',
             start: '2020-09-04',
             end:'2020-09-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-09-07',
             end:'2020-09-07'
           },
           {
             title:'Poliomielitis',
             start: '2020-09-08',
             end:'2020-09-08'
           },
          {
             title:'Meningococo',
             start: '2020-09-11',
             end:'2020-09-11'
           },
           {
             title:'TripleViral',
             start: '2020-09-14',
             end:'2020-09-14'
           },
           {
             title:'BCG',
             start: '2020-09-16',
             end:'2020-09-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-09-18',
             end:'2020-09-18'
           },
           {
             title:'Poliomielitis',
             start: '2020-09-22',
             end:'2020-09-22'
           },
           {
             title:'Meningococo',
             start: '2020-09-25',
             end:'2020-09-25'
           },
           {
             title:'TripleViral',
             start: '2020-09-28',
             end:'2020-09-28'
           },
           {
             title:'BCG',
             start: '2020-09-30',
             end:'2020-09-30'
           },
           {
             title:'TripleViral',
             start: '2020-10-02',
             end:'2020-10-02'
           },
           {
             title:'BCG',
             start: '2020-10-05',
             end:'2020-10-05'
           },
          {
             title:'Hepatitis B',
             start: '2020-10-06',
             end:'2020-10-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-10-08',
             end:'2020-10-08'
           },
          {
             title:'Meningococo',
             start: '2020-10-13',
             end:'2020-10-13'
           },
           {
             title:'TripleViral',
             start: '2020-10-14',
             end:'2020-10-14'
           },
           {
             title:'BCG',
             start: '2020-10-16',
             end:'2020-10-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-10-20',
             end:'2020-10-20'
           },
           {
             title:'Poliomielitis',
             start: '2020-10-22',
             end:'2020-10-22'
           },
           {
             title:'Meningococo',
             start: '2020-10-27',
             end:'2020-10-27'
           },
           {
             title:'TripleViral',
             start: '2020-10-28',
             end:'2020-10-28'
           },
           {
             title:'BCG',
             start: '2020-10-30',
             end:'2020-10-30'
           },
           {
             title:'TripleViral',
             start: '2020-11-02',
             end:'2020-11-02'
           },
           {
             title:'BCG',
             start: '2020-11-04',
             end:'2020-11-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-11-06',
             end:'2020-11-06'
           },
           {
             title:'Poliomielitis',
             start: '2020-11-09',
             end:'2020-11-09'
           },
          {
             title:'Meningococo',
             start: '2020-11-12',
             end:'2020-11-12'
           },
           {
             title:'TripleViral',
             start: '2020-11-14',
             end:'2020-11-14'
           },
           {
             title:'BCG',
             start: '2020-11-16',
             end:'2020-11-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-11-20',
             end:'2020-11-20'
           },
           {
             title:'Poliomielitis',
             start: '2020-11-24',
             end:'2020-11-24'
           },
           {
             title:'Meningococo',
             start: '2020-11-27',
             end:'2020-11-27'
           },
           {
             title:'TripleViral',
             start: '2020-11-28',
             end:'2020-11-28'
           },
           {
             title:'BCG',
             start: '2020-11-30',
             end:'2020-11-30'
           },
           {
             title:'TripleViral',
             start: '2020-12-02',
             end:'2020-12-02'
           },
           {
             title:'BCG',
             start: '2020-12-04',
             end:'2020-12-04'
           },
          {
             title:'Hepatitis B',
             start: '2020-12-07',
             end:'2020-12-07'
           },
           {
             title:'Poliomielitis',
             start: '2020-12-08',
             end:'2020-12-08'
           },
          {
             title:'Meningococo',
             start: '2020-12-12',
             end:'2020-12-12'
           },
           {
             title:'TripleViral',
             start: '2020-12-14',
             end:'2020-12-14'
           },
           {
             title:'BCG',
             start: '2020-12-16',
             end:'2020-12-16'
           },
           {
             title:'Hepatitis B',
             start: '2020-12-18',
             end:'2020-12-18'
           },
           {
             title:'Poliomielitis',
             start: '2020-12-22',
             end:'2020-12-22'
           },
           {
             title:'Meningococo',
             start: '2020-12-28',
             end:'2020-12-28'
           },
           {
             title:'TripleViral',
             start: '2020-12-28',
             end:'2020-12-28'
           },
           {
             title:'BCG',
             start: '2020-12-30',
             end:'2020-12-30'
           }

        ]
             
     });
  
   calendar.render();
}); 