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
          styles: { color: 'tomato' },
        },
        id: 'basic-title-1',
      },
      {
        type: 'img',
        data: {
          contents: {
            src: '//g0.evitecdn.com/pages/signed-out-virtual-homepage/6210705586454528/21f2897a86ca4a338a9ff2a6dd83665f.png',
          },
          styles: {},
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
      {
        type: 'map',
        data: {
          contents: {
            location: {},
            address: '',
          },
        },
        id: 'basic-map-1',
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
          styles: {},
        },
        id: 'wedding-title-1',
      },
      {
        type: 'img',
        data: {
          contents: {
            src: '//g0.evitecdn.com/pages/signed-out-virtual-homepage/6210705586454528/21f2897a86ca4a338a9ff2a6dd83665f.png',
          },
          styles: {},
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
