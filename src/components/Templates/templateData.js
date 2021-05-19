const templates = [
  {
    concept: 'basic',
    backgroundColor: '#fff',
    blocks: [
      {
        type: 'title',
        data: {
          contents: {
            texts: 'Happy Wedding not happy',
          },
          styles: 'default',
        },
        id: 'basic-title-1',
      },
      {
        type: 'img',
        data: {
          contents: {
            src: '//g0.evitecdn.com/pages/signed-out-virtual-homepage/6210705586454528/21f2897a86ca4a338a9ff2a6dd83665f.png',
          },
          styles: 'default',
        },
        id: 'basic-img-1',
      },
      {
        type: 'social',
        data: {
          contents: {
            facebookLink: '',
            twitterLink: '',
            youtubeLink: '',
          },
        },
        id: 'basic-social-1',
      },
    ],
  },
  {
    concept: 'wedding',
    backgroundColor: 'pink',
    blocks: [
      {
        type: 'title',
        data: {
          contents: {
            texts: 'Happy Wedding',
          },
          styles: 'default',
        },
        id: 'wedding-title-1',
      },
      {
        type: 'img',
        data: {
          contents: {
            src: '//g0.evitecdn.com/pages/signed-out-virtual-homepage/6210705586454528/21f2897a86ca4a338a9ff2a6dd83665f.png',
          },
          styles: 'default',
        },
        id: 'wedding-img-1',
      },
      {
        type: 'social',
        data: {
          contents: {
            facebookLink: '',
            twitterLink: '',
            youtubeLink: '',
          },
        },
        id: 'wedding-social-1',
      },
    ],
  },
];

export default templates;
