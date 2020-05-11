module.exports = {
  "title": "MV Buddies Status",
  "name": "mv_buddies_status",
  "description": "See the status of the MV Buddies Services",
  "defaultLocale": "de",
  "baseUrl": "https://status.mvbuddies.de",
  "locales": [
    {
      "code": "de",
      "iso": "de-DE",
      "name": "Deutsch",
      "file": "de.json"
    }
  ],
  "content": {
    "frontMatterFormat": "yaml",
    "systems": [
      //Systems
      'webserver',
      'mailserver',
      'netzwerkserver',
      'jonasserver',
      //Webserver Services
      'p2p',
      'pad',
      'urlshortener',
      'files',
      'cloud',
      'downloader',
      'sharex',
      'docs',
      'uptime',
      'webmin',
      'kuwr',
      //Netzwerk Server Services
      'dns',
      'proxy',
      'pi-hole',
      'vpn',
      //Jamstack Services
      'homepage',
      'blog',
      'kuw',
      'punktzahlrechner',
      'schulsammlung',
      'streberblog',
      //Jonas Server Services
      'gamerolesbot',
      'mvbuddiesbot',
      'widgetbot'
    ]
  },
  theme: {
    scheduled: {
      position: 'aboveGlobalStatus'
    }
  },
  head: {
    link: [
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3e4e88' }
    ]
  }
}