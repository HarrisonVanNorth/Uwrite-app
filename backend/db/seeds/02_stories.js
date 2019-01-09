
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        { 
          story_img: 'https://cdn.vox-cdn.com/thumbor/aZQ2Ka-6MI0w1hBNSMU2N5E3r1g=/0x0:5750x3900/1200x800/filters:focal(3246x0:4166x920)/cdn.vox-cdn.com/uploads/chorus_image/image/59774901/GettyImages_184106918.0.jpg',
          title: 'The Promise of an Affordable Transition to a Fossil Fuel Free Economy',
          content: 'According to studies reported in the magazine Nature (August 2017), none of the major industrialised countries had met their pledged commitments and the sum of national pledges was not enough to keep global temperature rise to “well below 2 degrees C” which was the Paris Agreement target. The just-released findings of the Intergovernmental Panel on Climate Change (IPCC) report calls for keeping the global temperature rise to 1.5 degrees C and the reduction of global emissions by 45 per cent by 2030.',
          category: 'science', 
          author_id: 1
        },
        {
          story_img: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc8j9X52qm417sQruuxqOsgAG6WRy0blVonQvN_csziFapgQWPmrijOoI0jKQ6aLChUhzEA5eoFCdHP93JuKwmfWZsjtPIM_r5rNKp1RfPMGCX8apFfMGc7xea9mgl9YVEbuS.IuhLcTqtAazbaAqNvsJK00I07Rm7eHncZakWyZQ-&h=1080&w=1920&format=jpg',
          title: 'Devil May Cry 5 Xbox One Demo Pulled, New One Coming for Xbox And PS4 Next Month',
          content: 'Take heart, though, demon hunters. If you missed out on that demo--or if just a PS4 owner and never had access to it in the first place--you get a fresh bit of DMC5 next month. The tweet that announced the demo had been pulled also gave word that a new one will be coming on February 7, this time for both Xbox One and PlayStation 4.',
          category: 'video games',
          author_id: 2
        },
        { 
          story_img: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/08/07/101904645-54083031.1910x1000.jpg?v=1546879558',
          title: 'Disneyland raising prices, cheapest daily ticket over $100',
          content: 'Disneyland Resort is raising prices ahead of the scheduled opening of a Star Wars-themed expansion, with the cheapest daily ticket costing more than $100.Less than a year ago, prices were raised by up to 18 percent.The prices that took effect Sunday for tickets, annual passes and parking represent increases of up to 25 percent.The Los Angeles Times reports price increases in recent years haven thinned the throngs at Disneyland and nearby California Adventure Park. A one - day, one - park ticket is now $104 for low - demand days, such as May weekdays.Tickets for regular - and peak - demand days are more.',
          category: 'business', 
          author_id: 3
        }
      ]);
    });
};
